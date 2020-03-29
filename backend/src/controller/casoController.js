const conexao = require('../database/conexao');

module.exports = {

  async listar(request, response){
    const { page = 1} = request.query;
    const [count] = await conexao('caso').count();
    const casos = await conexao('caso').select('*')
      .join('ong','ong.id','=','caso.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'caso.*', 
        'ong.nome', 
        'ong.email',
        'ong.whatsapp', 
        'ong.cidade',
        'ong.uf']);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(casos);

  },

  async recuperarPorId(request, response){
    const { id } = request.params;

    const casos =  await conexao('caso')
      .where('id',id)
      .select('*');

    return response.json(casos);

  },

  async inserir(request, response){
    const {titulo, descricao, valor} = request.body;
    const ong_id = request.headers.authorization;
    
    const [id] = await conexao('caso').insert({
      titulo,
      descricao,
      valor,
      ong_id,
    });

    return response.json({ id });
  },

  async excluir(request, response){
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const caso =  await conexao('caso')
      .where('id',id)
      .select('ong_id')
      .first();

      if (caso.ong_id != ong_id){
        return response.status(401).json({ error: 'Operação não permitida' });
      }

      await conexao('caso').where('id',id).delete();

      return response.status(204).send();
  }
};
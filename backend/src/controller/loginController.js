const conexao = require('../database/conexao');

module.exports = {

  async login(request, response){
    const { id } = request.body;

    const ong = await conexao('ong')
      .where('id',id)
      .select('nome')
      .first();

    if (!ong){
      return response.status(400).json({ error: 'ONG não encontrada!'});
    }

    return response.json(ong);

  }

}
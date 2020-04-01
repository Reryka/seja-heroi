const conexao = require('../database/conexao');


module.exports = {
  
  async profile(request, response){
    const ong_id = request.headers.authorization;

    const casos =  await conexao('caso')
      .where('ong_id',ong_id)
      .select('*');

    return response.json(casos);

  }
  
}
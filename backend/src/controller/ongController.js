const crypto = require('crypto');
const conexao = require('../database/conexao');

module.exports = {
  //Lista as ongs existentes
  async listar (request, response) {
    const ongs = await conexao('ong').select('*');
  
    return response.json(ongs);
  },

  //Insere uma nova ong
  async inserir(request, response){
    const { nome,  email, whatsapp, cidade, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await conexao('ong').insert({
      id,
      nome,
      email,
      whatsapp,
      cidade,
      uf,
    })

    return response.json({ id });
  }
    
}
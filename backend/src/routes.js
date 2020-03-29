const express = require('express');
const ongController = require('./controller/ongController');
const casoController = require('./controller/casoController');
const casoService = require('./service/casoService');
const loginController = require('./controller/loginController');

const routes = express.Router();

routes.post('/login',loginController.login);

//ONG
routes.get('/ong', ongController.listar);
routes.post('/ong', ongController.inserir);

//Caso
routes.get('/caso', casoController.listar);
routes.post('/caso', casoController.inserir);
routes.delete('/caso/:id', casoController.excluir);
routes.get('/caso/recuperarPorOng', casoService.recuperarPorOng);


module.exports = routes;
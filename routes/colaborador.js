const express = require('express');
const colaboradorController = require('../controllers/colaboradorController');

const app = express.Router();

app.get('/test', colaboradorController.test);
app.post('/registro_colaborador_admin', colaboradorController.registro_colaborador_admin);
app.post('/login_admin', colaboradorController.login_admin);


module.exports = app;
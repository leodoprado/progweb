const express = require('express');
const router = express.Router();
const accessValidation = require('./middleware/accessValidation');
const loginPageController = require('./controller/loginPage');
const perfilPageController = require('./controller/perfilPage');

//const esqueceusenhaPageController = require('@controller/loginPage');
/*const admPagePerfilController = require('./controller/adm/admPagePerfil');
const admPageGerencialController = require('@controller/adm/admPageGerencial');
const admPageCreateController = require('@controller/adm/admPageCreate');
const admPageDeleteController = require('@controller/adm/admPageDelete');
const admPageFinanceiroController = require('@controller/adm/admPageFinanceiro');
const admPageMoradiasController = require('@controller/adm/admPageMoradias');
const admPageVincularMoradiasController = require('@controller/adm/admPageVincularMoradias');
const admPageComunicadosController = require('@controller/adm/admPageComunicados');
const admPageAgendaController = require('@controller/adm/admPageAgenda');
const moradorPagePerfilController = require('@controller/morador/moradorPagePerfil');
const moradorPageGerencialController = require('@controller/morador/moradorPageGerencial');
const moradorPageMoradiasController = require('@controller/morador/moradorPageMoradias');
const moradorPageFinanceiroController = require('@controller/adm/admPageFinanceiro');
const moradorPageComunicadosController = require('@controller/adm/admPageComunicados')
const moradorPageAgendaController = require('@controller/morador/moradorPageAgenda');
const create = require('@controller/loginPage');*/

router.get('/', loginPageController);
router.post('/authenticate', loginPageController);
router.get('/logout', loginPageController);
router.get('/register', loginPageController);
router.post('/register/user', loginPageController);
router.get('/login/perfil/:USR_ID', accessValidation, perfilPageController);
router.post('/login/perfil/:USR_ID', accessValidation, perfilPageController);

module.exports = router;

const express = require('express');
const router = express.Router();
const accessValidation = require('./middleware/accessValidation');
const loginPageController = require('./controller/loginPage');
const perfilPageController = require('./controller/perfilPage');
const moradorPageController = require('./controller/moradorPage')

router.get('/', loginPageController);
router.post('/authenticate', loginPageController);
router.get('/logout', loginPageController);
router.get('/register', loginPageController);
router.post('/register/user', loginPageController);
router.get('/login/perfil/:USR_ID', accessValidation, perfilPageController);
router.post('/login/perfil/:USR_ID', accessValidation, perfilPageController);


router.get('/login/morador',accessValidation ,moradorPageController);
router.get('/login/morador/adicionar', accessValidation ,moradorPageController);
router.post('/login/morador/adicionar/', moradorPageController);

router.get('/login/administrador/gerencial/delete', accessValidation ,moradorPageController);
router.post('/login/administrador/gerencial/delete', accessValidation ,moradorPageController);
router.get('/login/administrador/gerencial/delete/:idUsuario',  accessValidation ,moradorPageController);
router.post('/login/administrador/gerencial/delete/:idUsuario',  accessValidation ,moradorPageController);
router.get('/login/administrador/gerencial/update',  accessValidation ,moradorPageController);
router.post('/login/administrador/gerencial/update',  accessValidation ,moradorPageController);
router.get('/login/administrador/gerencial/update/:idUsuario',  accessValidation ,moradorPageController);
router.post('/login/administrador/gerencial/update/:idUsuario',  accessValidation ,moradorPageController);

module.exports = router;

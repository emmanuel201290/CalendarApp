/**
 * Rutas de usuario /Auth
 * host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const {validarCampos} = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new', 
[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmail(),
    check('password','El password es obligatorio').isLength({min:6}),
    validarCampos
] ,
crearUsuario);

router.post('/', 
[
    check('email','El email es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').isLength({min:3}),
    validarCampos
],
loginUsuario);

router.post('/renew', revalidarToken);

module.exports = router;

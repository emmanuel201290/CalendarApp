const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req, res = response) => {

  const { name, email, password } = req.body;

  //Manejo de errores
  res.status(200).json({
    ok: true,
    msg: 'registro',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {

  res.json({
    ok: true,
    msg: 'Login usuario',
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'Revalidar token',
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  revalidarToken,
};

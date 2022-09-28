const express = require('express');
const usuarios = require('./usuarios');
const login = require('./login');
const obras = require('./obras');


const router = express.Router();
router.use(usuarios);
router.use(login);
router.use(obras);

router.get('/', (req, res) => {
  res.json({ message: 'Ruta inválida' });
});

module.exports = router;

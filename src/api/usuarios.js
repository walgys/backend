const express = require('express');
const query = require('../DB/usuarios');
const router = express.Router();

router.post('usuarios', async (req, res) => {
  try {
    pacientes = await query.queryInsertUsuario(req.body?.usuario);
    res.statusCode(200).end();
  } catch (err) {
    console.log(err);
    res.statusCode(422).end();
  }
});

module.exports = router;

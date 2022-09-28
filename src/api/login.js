const express = require('express');
const query = require('../DB/login');
const router = express.Router();

router.post('login', async (req, res) => {
  try {
    usuario = await query.queryInsertUsuario(req.body?.usuario);
    if (usuario) {
      res
        .json({
          usuario,
        })
        .end();
    } else {
      res.statusCode(403).end();
    }
  } catch (err) {
    console.log(err);
    res.statusCode(422).end();
  }
});

module.exports = router;

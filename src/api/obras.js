const express = require('express');
const query = require('../DB/obras');
const router = express.Router();

router.get('/obras', async (req, res) => {
  try {
    const obras = await query.queryGetObras();
    res
      .json({
        obras,
      })
      .end();
  } catch (err) {
    console.log(err);
    res.statusCode(500).end();
  }
});

router.post('obras', async (req, res) => {
  try {
    pacientes = await query.queryInsertObra(req.body?.obra);
    res.statusCode(200).end();
  } catch (err) {
    console.log(err);
    res.statusCode(422).end();
  }
});

module.exports = router;

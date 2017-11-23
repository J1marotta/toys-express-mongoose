const express = require('express')
let router = express.Router()

router.get('/toys', (req, res) => {
  res.render('toys/index');
});

router.get('/toys/:id', (req, res) => {
  res.send(`GET Toys#show id=${req.params.id}`);
});

router.post('/toys', (req, res) => {
  res.send('This is a POST\n');
});

module.exports = router;

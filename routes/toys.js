const express = require('express');
const util = require('util');
const { ToysController } = require('../controllers/index');

const router = express.Router();
const toysController = new ToysController();

router.get('/toys', (req, res) => {
  toysController.index(req, res);
});

router.get('/toys/:id', (req, res) => {
  toysController.show(req, res);
});

router.post('/toys', (req, res) => {
  toysController.create(req, res);
});

module.exports = router;

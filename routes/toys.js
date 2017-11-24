const express = require('express');
const util = require('util');
const bodyParser = require('body-parser');
const { ToysController } = require('../controllers/index');

const router = express.Router();
const controller = new ToysController();

router.use(bodyParser.urlencoded({ extended: true }));
router.use((req, res, next) => {
  console.log(`req.body=${util.inspect(req.body)}`);
  next();
});

router.get('/toys', controller.index);
router.get('/toys/new', controller.new);
router.get('/toys/:id', controller.show);
router.post('/toys', controller.create);

module.exports = router;

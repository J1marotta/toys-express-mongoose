var Toy = require('../models/toy');

module.exports = class ToysController {
  index(req, res) {
    res.render('toys/index');
  }

  show(req, res) {
    res.send(`GET toys#show id=${req.params.id}\n`);
  }

  create(req, res) {
    res.send(`POST toys#create\n`);
  }
}

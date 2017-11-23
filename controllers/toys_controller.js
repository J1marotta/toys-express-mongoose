var Toy = require('../models/toy');

module.exports = class ToysController {
  index(req, res) {
    res.render('toys/index');
  }

  show(req, res) {
    res.send(`GET toys#show id=${req.params.id}\n`);
  }

  new(req, res) {
    res.render('toys/new');
  }

  create(req, res) {
    res.redirect('/toys');
  }
}

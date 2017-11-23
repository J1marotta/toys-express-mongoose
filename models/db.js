const mongoose = require('mongoose');
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/toys', { useMongoClient: true });
module.exports = mongoose;

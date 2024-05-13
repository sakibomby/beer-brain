const mongoose = require('mongoose');
require('./style');
const beerSchema = require('./beerSchema');

module.exports = mongoose.model('Beer', beerSchema);
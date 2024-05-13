// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Beer = require('./models/beer');
const Style= require('./models/style');

// Local variables will come in handy for holding retrieved documents
let user, beer, style;
let users, beers, styles;

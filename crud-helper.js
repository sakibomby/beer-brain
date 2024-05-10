// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Notes = require('./models/notes');

// Local variables will come in handy for holding retrieved documents
let user, item, category, note;
let users, items, categories, notes;

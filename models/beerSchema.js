const Schema = require('mongoose').Schema;

const beerSchema = new Schema({
  name: { type: String, required: true },
  imgSrc: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  style: { type: String, required: true },
  tastingNotes: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = beerSchema;

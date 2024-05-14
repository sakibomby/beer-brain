const Schema = require('mongoose').Schema;

const beerSchema = new Schema({
  name: { type: String, required: true },
  imgSrc: { type: String, required: true },
  style: {type: Schema.Types.ObjectId, ref: 'Style'},
  tastingNotes: { type: String, required: true },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

module.exports = beerSchema;

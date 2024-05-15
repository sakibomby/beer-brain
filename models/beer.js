const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beerSchema = new Schema({
    name: { type: String, required: true, unique: true },
    imgSrc: { type: String, required: true },
    style: {type: Schema.Types.ObjectId, ref: 'Style'},
    tastingNotes: { type: String, required: true },
    users: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Beer', beerSchema);
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
  character: {
    type: String,
    required: true
  },
  castMember: {
    type: String,
    required: true
  },
  episodes: {
    type: Array
  },
  sketches: {
    type: Array
  }
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;

const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  character: {
    type: String,
    required: true
  },
  castMember: {
    type: String,
    required: true
  },
  episode: {
    type: String,
    required: true
  },
  sketchName: {
    type: String
  }, 
  quote: {
    type: String,
    required: true
  }
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;

//Quotes
	//Character
	//Cast member
	//Episode
	//Sketch

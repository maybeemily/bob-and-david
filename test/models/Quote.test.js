require ('dotenv').config();
const mongoose = require('mongoose');
const Quote = require('../../lib/models/Quote')


describe('Quote model test', () => {
  it('can create a new quote', () => {
    const newQuote = new Quote({
      character: 'Voiceover King',
      castMember: 'Bob Odenkirk',
      episode: '1.2',
      sketchName: 'Announcements',
      quote: 'Not to be confused with the disease cancer.'
    });
    expect(newQuote.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      character: 'Voiceover King',
      castMember: 'Bob Odenkirk',
      episode: '1.2',
      sketchName: 'Announcements',
      quote: 'Not to be confused with the disease cancer.'
    })
  });
});

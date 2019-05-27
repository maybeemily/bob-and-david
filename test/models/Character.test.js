require('dotenv').config();
const mongoose = require('mongoose');
const Character = require('../../lib/models/Character');

describe('Character model test', () => {
  it('can create a new character', () => {
    const newCharacter = new Character({
      character: 'Voiceover King',
      castMember: 'Bob Odenkirk',
      episodes: ['1.2', '1.3'],
      sketches: ['Announcements', 'Fake sketch']
    });
    expect(newCharacter.toJSON()).toEqual({
      _id: expect.any(mongoose.Types.ObjectId),
      character: 'Voiceover King',
      castMember: 'Bob Odenkirk',
      episodes: ['1.2', '1.3'],
      sketches: ['Announcements', 'Fake sketch']
    })
  });
});

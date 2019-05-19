const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  mood: {
    type: String,
    trim: true,
  },
  color: {
    type: String,
    trim: true,
  },
  time: {
      type: String,
      trim: true,
  }
});

module.exports = mongoose.model('Moods', moodSchema);
let mongoose = require('mongoose');

let enrollSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  confirmed: {
    type: Boolean,
    required: true,
    default: false
  }
});

let Enroll = module.exports = mongoose.model('Enroll', enrollSchema);

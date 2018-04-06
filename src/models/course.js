let mongoose = require('mongoose');

let courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  }
});

let Course = module.exports = mongoose.model('Course', courseSchema);

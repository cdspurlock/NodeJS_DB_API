const mongoose = require('mongoose');
const Student = require('./student.module');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  students: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  }]
}, {
  versionKey: false // Exclude version field
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  title: String,
  description: String,
  instructor: String,
  price: Number,
  category: String,
  enrolledStudents: Number
});

module.exports = mongoose.model('Course', CourseSchema);

const express = require('express');
const router = express.Router();

// Import controllers
const studentController = require('./student.controller');
const courseController = require('./course.controller');

// Student routes
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.delete('/students/:id', studentController.deleteStudentById);

// Course routes
router.get('/courses', courseController.getAllCourses);
router.get('/courses/:id', courseController.getCourseById);
router.delete('/courses/:id', courseController.deleteCourseById);

module.exports = router;

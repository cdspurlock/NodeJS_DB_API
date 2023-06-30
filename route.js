const express = require('express');
const router = express.Router();
const app = require("./app")

// Import controllers
const studentController = require('./student.controller');
const courseController = require('./course.controller');

// Student routes
router.get('/students', studentController.getAllStudents);
router.get('/students/:id', studentController.getStudentById);
router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudentById);
router.delete('/students/:id', studentController.deleteStudentById);

// Course routes
router.get('/courses', courseController.getAllCourses);
router.get('/courses/:id', courseController.getCourseById);
router.post('/courses', courseController.createCourse);
router.put('/courses/:id', courseController.updateCourseById);
router.delete('/courses/:id', courseController.deleteCourseById);

module.exports = router;

const Course = require('./course.model');
const messages = require('./messages');

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('students');
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: messages.errorFetching });
  }
};

const getCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findById(courseId).populate('students');
    if (!course) {
      return res.status(404).json({ error: messages.objectNotFound });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: messages.errorFetching });
  }
};

const createCourse = async (req, res) => {
  try {
    const { name, description, instructor } = req.body;
    const course = new Course({ name, description, instructor });
    const newCourse = await course.save();
    res.json(newCourse);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the course.' });
  }
};

const updateCourseById = async (req, res) => {
  try {
    const { name, description, instructor } = req.body;
    const courseId = req.params.id;
    const updatedCourse = await Course.findByIdAndUpdate(
      courseId,
      { name, description, instructor },
      { new: true }
    ).populate('students');
    if (!updatedCourse) {
      return res.status(404).json({ error: messages.objectNotFound });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the course.' });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await Course.findByIdAndDelete(courseId);
    if (!course) {
      return res.status(404).json({ error: messages.objectNotFound });
    }
    res.json({ message: 'Course deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the course.' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourseById,
  deleteCourseById
};

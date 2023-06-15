const Course = require('./course.model');

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching courses.' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found.' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the course.' });
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
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, { name, description, instructor }, { new: true });
    if (!updatedCourse) {
      return res.status(404).json({ error: 'Course not found.' });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the course.' });
  }
};

const deleteCourseById = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ error: 'Course not found.' });
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

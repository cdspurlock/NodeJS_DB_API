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
  deleteCourseById
};

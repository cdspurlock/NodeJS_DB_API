// student.controller.js
const Student = require('./student.model');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching students.' });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found.' });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the student.' });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: 'Student not found.' });
    }
    res.json({ message: 'Student deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the student.' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  deleteStudentById
};

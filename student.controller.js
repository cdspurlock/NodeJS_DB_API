const Student = require('./student.model');
const messages = require('./messages');

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: messages.errorFetching });
  }
};

const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ error: messages.objectNotFound });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: messages.errorFetching });
  }
};

const createStudent = async (req, res) => {
  try {
    const { name, age } = req.body;
    const student = new Student({ name, age });
    const newStudent = await student.save();
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the student.' });
  }
};

const updateStudentById = async (req, res) => {
  try {
    const { name, age } = req.body;
    const studentId = req.params.id;
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      { name, age },
      { new: true }
    );
    if (!updatedStudent) {
      return res.status(404).json({ error: messages.objectNotFound });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the student.' });
  }
};

const deleteStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await Student.findByIdAndDelete(studentId);
    if (!student) {
      return res.status(404).json({ error: messages.objectNotFound });
    }
    res.json({ message: 'Student deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the student.' });
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudentById,
  deleteStudentById
};

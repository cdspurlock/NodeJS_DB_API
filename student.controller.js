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
    const updatedStudent = await Student.findByIdAndUpdate(req.params.id, { name, age }, { new: true });
    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found.' });
    }
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the student.' });
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
  createStudent,
  updateStudentById,
  deleteStudentById
};

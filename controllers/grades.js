const Grade = require('../models/grades')


module.exports = {
  createGrade,
  getOneGrade,
  getGrades
}

async function createGrade(req, res) {
  try {

    const grade = await Grade.create(req.body);


    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function getGrades(req, res) {
  try {
    const grades = await Grade.find({}).limit(5);

    res.status(200).json(grades);
  } catch (err) {
    res.status(400).send(err);
  }
}

async function getOneGrade(req, res) {
  try {

    const grade = await Grade.findById(req.params.id);

    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json(err);
  }
}
const { Router } = require('express');
const gradesCtrl = require('../controllers/grades.js');
const grades = require('../models/grades.js');

const router = Router();


// Create a single grade entry
router.post('/', gradesCtrl.createGrade)

// Get grades
router.get('/', gradesCtrl.getGrades)

// // Get a single grade by id
router.get("/:id", gradesCtrl.getOneGrade)

module.exports = router;
const express = require('express');
const { assignmentController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { assignmentValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('manageAssignment'), validate(assignmentValidation.createAssignment), assignmentController.createAssignment);
router.get('/', auth('getAssignments'), validate(assignmentValidation.getAssignments), assignmentController.getAssignments);
router.get('/:assignmentId', auth('getAssignment'), validate(assignmentValidation.getAssignment), assignmentController.getAssignment);
router.post('/update/:assignmentId', auth('manageAssignment'), validate(assignmentValidation.updateAssignment), assignmentController.updateAssignment);
router.post('/delete/:assignmentId', auth('manageAssignment'), validate(assignmentValidation.deleteAssignment), assignmentController.deleteAssignment);

module.exports = router;
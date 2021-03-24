const express = require('express');
const { quizController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { quizValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('manageQuiz'), validate(quizValidation.createQuiz), quizController.createQuiz);
router.get('/', auth('getQuizzes'), validate(quizValidation.getQuizzes), quizController.getQuizzes);
router.get('/:quizId', auth('getQuiz'), validate(quizValidation.getQuiz), quizController.getQuiz);
router.post('/update/:quizId', auth('manageQuiz'), validate(quizValidation.updateQuiz), quizController.updateQuiz);
router.post('/delete/:quizId', auth('manageQuiz'), validate(quizValidation.deleteQuiz), quizController.deleteQuiz);

module.exports = router;
const express = require('express');
const { questionController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { questionValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('manageQuestion'), validate(questionValidation.createQuestion), questionController.createQuestion);
router.get('/', auth('getQuestions'), validate(questionValidation.getQuestions), questionController.getQuestions);
router.get('/:questionId', auth('getQuestion'), validate(questionValidation.getQuestion), questionController.getQuestion);
router.post('/update/:questionId', auth('manageQuestion'), validate(questionValidation.updateQuestion), questionController.updateQuestion);
router.post('/delete/:questionId', auth('manageQuestion'), validate(questionValidation.deleteQuestion), questionController.deleteQuestion);

module.exports = router;
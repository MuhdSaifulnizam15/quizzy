const express = require('express');
const { motivationQuoteController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { motivationQuoteValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('manageMotivationQuote'), validate(motivationQuoteValidation.createMotivationQuote), motivationQuoteController.createMotivationQuote);
router.get('/', auth('getMotivationQuotes'), validate(motivationQuoteValidation.getMotivationQuotes), motivationQuoteController.getMotivationQuotes);
router.get('/:motivationQuoteId', auth('getMotivationQuote'), validate(motivationQuoteValidation.getMotivationQuote), motivationQuoteController.getMotivationQuote);
router.post('/update/:motivationQuoteId', auth('manageMotivationQuote'), validate(motivationQuoteValidation.updateMotivationQuote), motivationQuoteController.updateMotivationQuote);
router.post('/delete/:motivationQuoteId', auth('manageMotivationQuote'), validate(motivationQuoteValidation.deleteMotivationQuote), motivationQuoteController.deleteMotivationQuote);

module.exports = router;
const express = require('express');
const { paymentController } = require('../../controllers');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { paymentValidation } = require('../../validations');

const router = express.Router();

router.post('/', auth('managePayment'), validate(paymentValidation.createPayment), paymentController.createPayment);
router.get('/', auth('getPayments'), validate(paymentValidation.getPayments), paymentController.getPayments);
router.get('/:paymentId', auth('getPayment'), validate(paymentValidation.getPayment), paymentController.getPayment);
router.post('/update/:paymentId', auth('managePayment'), validate(paymentValidation.updatePayment), paymentController.updatePayment);
router.post('/delete/:paymentId', auth('managePayment'), validate(paymentValidation.deletePayment), paymentController.deletePayment);

module.exports = router;
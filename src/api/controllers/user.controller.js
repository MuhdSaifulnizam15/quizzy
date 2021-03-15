const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { body, check, validationResult } = require('express-validator');

const User = require('../models/user.model');

exports.register = [
    body('email').isEmail().normalizeEmail(),
    check('password')
        .isLength({ min: 8 })
        .withMessage('must be at least 8 chars long')
        .matches(/\d/)
        .withMessage('must contain at least one number')
        .matches('/\W|_/g')
        .withMessage('must containe at least one special characters')
        .not()
        .isIn(['Asd1234!', 'abcd123!'])
        .withMessage('do not use a common word as the password'),

    body('first_name').not().isEmpty().trim().escape(),
    body('last_name').not().isEmpty().trim().escape(),
    (req, res, next) => {
        User
            .find({ email: req.body.email })
            .exec()
            .then(user => {
                if(user.length < 1){
                    return bcrypt.hash(req.body.password, 10);
                }

                const error = new Error();
                error.message = 'User already exist in our database';
                throw error;
            })
            .then(hash => {
                const user = createUser(req.body.email, hash, req.body.first_name, req.body.last_name);
                return user.save();
            })
            .then(result => {
                return res.status(201).json({
                    message: 'User created successfully!'
                })
            })
            .catch(error => {
                next(error);
            });
    }
];
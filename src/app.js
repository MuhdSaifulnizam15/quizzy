const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const httpStatus = require('http-status');

const config = require('./config/config');
const morgan = require('./config/morgan');
const routes = require('./api/routes/v1');
const logger = require('./config/logger');

const app = express();

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info('Connected to MongoDB');
});

if (config.env !== 'test') {
    app.use(morgan.successHandler);
    app.use(morgan.errorHandler);
}

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/v1', routes);

// Send back a 404 error for any unknown api request
app.use((req, res, next) => {
    const error = new Error();
    error.message = 'Not found';
    error.status = httpStatus.NOT_FOUND;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || httpStatus.INTERNAL_SERVER_ERROR).json({
        error: error
    });
});

module.exports = app;
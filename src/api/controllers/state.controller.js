const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { stateService } = require('../services');

const createState = catchAsync(async (req, res) => {
    const state = await stateService.createState(req.body);
    res.status(httpStatus.CREATED).send(state);
});

const getStates = catchAsync(async (req, res) => {
    const result = await stateService.getAllState();
    res.send(result);
});

const getState = catchAsync(async (req, res) => {
    const result = await stateService.getStateById(req.params.stateId);
    if(!result){
        throw new ApiError(httpStatus.NOT_FOUND, 'State not found');
    }
    res.send(result);
});

const updateState = catchAsync(async (req, res) => {
    const state = await stateService.updateStateById(req.params.stateId, req.body);
    res.send(state);
});

const deleteState = catchAsync(async (req, res) => {
    await stateService.deleteStateById(req.params.stateId);
    res.status(httpStatus.NO_CONTENT).send({ message: 'State successfully deleted' });
});

module.exports = {
    createState,
    getState,
    getStates,
    updateState,
    deleteState,
};
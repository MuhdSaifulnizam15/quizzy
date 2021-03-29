const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { cityService } = require('../services');

const createCity = catchAsync(async (req, res) => {
    const city = await cityService.createCity(req.body);
    res.status(httpStatus.CREATED).send(city);
});

const getCitys = catchAsync(async (req, res) => {
    const result = await cityService.getAllCity();
    res.send(result);
});

const getCityByState = catchAsync(async (req, res) => {
    const result = await cityService.getCityByStateId(req.params.stateId);
    if(!result){
        throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
    }
    res.send(result);
});

const getCity = catchAsync(async (req, res) => {
    const result = await cityService.getCityById(req.params.cityId);
    if(!result){
        throw new ApiError(httpStatus.NOT_FOUND, 'City not found');
    }
    res.send(result);
});

const updateCity = catchAsync(async (req, res) => {
    const city = await cityService.updateCityById(req.params.cityId, req.body);
    res.send(city);
});

const deleteCity = catchAsync(async (req, res) => {
    await cityService.deleteCityById(req.params.cityId);
    res.status(httpStatus.NO_CONTENT).send({ message: 'City successfully deleted' });
});

module.exports = {
    createCity,
    getCity,
    getCityByState,
    getCitys,
    updateCity,
    deleteCity,
};
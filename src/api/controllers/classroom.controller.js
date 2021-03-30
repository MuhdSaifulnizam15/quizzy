const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { classroomService } = require('../services');

const createClassroom = catchAsync(async (req, res) => {
    const classroom = await classroomService.createClassroom(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', classroom });
});

const getClassrooms = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'programme_module', 'batch', 'is_active']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    options.populate = 'subject,tutor'; 
    const result = await classroomService.queryClassrooms(filter, options);
    res.send({ status: true, code: '0000', result });
});

const getClassroom = catchAsync(async (req, res) => {
    const filter = { _id: req.params.classroomId };
    const result = await classroomService.queryClassrooms(filter, options);
    if(result.results.length === 0){
        throw new ApiError(httpStatus.NOT_FOUND, 'Classroom not found');
    }
    res.send({ status: true, code: '0000', result });
});

const updateClassroom = catchAsync(async (req, res) => {
    const classroom = await classroomService.updateClassroomById(req.params.classroomId, req.body);
    res.send({ status: true, code: '0000', classroom });
});

const deleteClassroom = catchAsync(async (req, res) => {
    await classroomService.deleteClassroomById(req.params.classroomId);
    res.send({ status: true, code: '0000', message: 'Classroom successfully deleted' });
});

module.exports = {
    createClassroom,
    getClassroom,
    getClassrooms,
    updateClassroom,
    deleteClassroom,
};
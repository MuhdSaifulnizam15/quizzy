const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { assignmentService } = require('../services');

const createAssignment = catchAsync(async (req, res) => {
    const assignment = await assignmentService.createAssignment(req.body);
    res.status(httpStatus.CREATED).send(assignment);
});

const getAssignments = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title', 'dateline', 'priority', 'subject', 'quiz', 'classroom']);
    const options = pick(req.query, ['sortBy', 'populate', 'limit', 'page']);
    const result = await assignmentService.queryAssignments(filter, options);
    res.send(result);
});

const getAssignment = catchAsync(async (req, res) => {
    const filter = { _id: req.params.assignmentId };
    const options = { populate: 'subject,quiz,classroom' };
    const result = await assignmentService.queryAssignments(filter, options);
    if(result.results.length === 0){
        throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found');
    }
    res.send(result);
});

const updateAssignment = catchAsync(async (req, res) => {
    const assignment = await assignmentService.updateAssignmentById(req.params.assignmentId, req.body);
    res.send(assignment);
});

const deleteAssignment = catchAsync(async (req, res) => {
    await assignmentService.deleteAssignmentById(req.params.assignmentId);
    res.status(httpStatus.NO_CONTENT).send({ message: 'Assignment successfully deleted' });
});

module.exports = {
    createAssignment,
    getAssignment,
    getAssignments,
    updateAssignment,
    deleteAssignment,
};
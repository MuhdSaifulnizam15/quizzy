const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { assignmentService } = require('../services');

const createAssignment = catchAsync(async (req, res) => {
    const assignment = await assignmentService.createAssignment(req.body);
    res.status(httpStatus.CREATED).send({ status: true, code: '0000', assignment });
});

const getAssignments = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['title', 'dateline', 'priority', 'subject', 'quiz', 'classroom']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    options.populate = 'subject,quiz,classroom';
    const result = await assignmentService.queryAssignments(filter, options);
    res.send({ status: true, code: '0000', result });
});

const getAssignment = catchAsync(async (req, res) => {
    const assignment = await assignmentService.getAssignmentById(req.params.assignmentId);
    if (!assignment) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found');
    }
    res.send({ status: true, code: '0000', assignment });
});

const updateAssignment = catchAsync(async (req, res) => {
    const assignment = await assignmentService.updateAssignmentById(req.params.assignmentId, req.body);
    res.send({ status: true, code: '0000', assignment });
});

const deleteAssignment = catchAsync(async (req, res) => {
    await assignmentService.deleteAssignmentById(req.params.assignmentId);
    res.send({ status: true, code: '0000',  message: 'Assignment successfully deleted' });
});

module.exports = {
    createAssignment,
    getAssignment,
    getAssignments,
    updateAssignment,
    deleteAssignment,
};
const httpStatus = require('http-status');
const { Assignment } = require('../models');
const ApiError = require('../utils/ApiError');

const createAssignment = async (userBody) => {
    const assignment = await Assignment.create(userBody);
    return assignment;
};

const queryAssignments = async (filter, options) => {
    const assignments = await Assignment.paginate(filter, options);
    return assignments;
};

const getAssignmentById = async (id) => {
    return Assignment.findById(id);
};

const updateAssignmentById = async (assignmentId, updateBody) => {
    const assignment = await getAssignmentById(assignmentId);
    if(!assignment){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Assignment not found');
    }
    Object.assign(assignment, updateBody);
    await assignment.save();
    return assignment;
};

const deleteAssignmentById = async (assignmentId) => {
    const assignment = await getAssignmentById(assignmentId);
    if(!assignment){
        throw new ApiError(httpStatus.NOT_FOUND, 'Assignment not found');
    }
    await assignment.remove();
    return assignment;
};

module.exports = {
    createAssignment,
    queryAssignments,
    getAssignmentById,
    updateAssignmentById,
    deleteAssignmentById,
};
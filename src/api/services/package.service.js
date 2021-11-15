const httpStatus = require('http-status');
const { Package } = require('../models');
const ApiError = require('../utils/ApiError');

const createPackage = async (userBody) => {
    const package = await Package.create(userBody);
    return package;
};

const queryPackages = async (options) => {
    console.log(options)
    options.populate = ['subject'];
    console.log(options);
    const packages = await Package.paginate({}, options);
    return packages;
};

const getPackageById = async (id) => {
    return Package.findById(id).populate(['subject']);
};

const updatePackageById = async (quizId, updateBody) => {
    const package = await getPackageById(quizId);
    if(!package){
        throw new ApiError(httpStatus.BAD_REQUEST, 'Package not found');
    }
    Object.assign(package, updateBody);
    await package.save();
    return package;
};

const deletePackageById = async (quizId) => {
    const package = await getPackageById(quizId);
    if(!package){
        throw new ApiError(httpStatus.NOT_FOUND, 'Package not found');
    }
    await package.remove();
    return package;
};

module.exports = {
    createPackage,
    queryPackages,
    getPackageById,
    updatePackageById,
    deletePackageById,
};
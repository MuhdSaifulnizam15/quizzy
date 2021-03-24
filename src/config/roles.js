const roles = ['student', 'tutor', 'admin'];

const roleRights = new Map();

const getPermissionList = [
  'getUser', 'getUsers', 
  'getSubject', 'getSubjects', 
  'getClassroom', 'getClassrooms', 
  'getAssignment', 'getAssignments', 
  'getQuiz', 'getQuizzes', 
  'getMotivationQuote', 'getMotivationQuotes', 
  'getState', 'getStates'
];
const studentPermissionList = [];
const tutorManagePermissionList = ['manageSubjects', 'manageClassroom', 'manageAssignment', 'manageQuiz', 'manageMotivationQuote'];
const adminManagePermissionList = ['manageUsers', 'manageState'];

roleRights.set(roles[0], studentPermissionList.concat(getPermissionList));
roleRights.set(roles[1], tutorManagePermissionList.concat(getPermissionList, studentPermissionList));
roleRights.set(roles[2], adminManagePermissionList.concat(getPermissionList, studentPermissionList, tutorManagePermissionList));

module.exports = {
  roles,
  roleRights,
};
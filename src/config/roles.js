const roles = ['student', 'tutor', 'admin'];

const roleRights = new Map();

const getPermissionList = [
  'getUser', 'getUsers', 
  'getSubject', 'getSubjects', 
  'getClassroom', 'getClassrooms', 
  'getAssignment', 'getAssignments', 
  'getQuiz', 'getQuizzes', 
  'getMotivationQuote', 'getMotivationQuotes', 
  'getState', 'getStates',
  'getCity', 'getCitys', 'getCityByState',
  'getQuestion', 'getQuestions',
  'getDashboard', 'getUserProfile',
];
const studentPermissionList = [];
const tutorManagePermissionList = ['manageSubjects', 'manageClassroom', 'manageAssignment', 'manageQuiz', 'manageMotivationQuote', 'manageQuestion'];
const adminManagePermissionList = ['manageUsers', 'manageState', 'manageCity'];

roleRights.set(roles[0], studentPermissionList.concat(getPermissionList));
roleRights.set(roles[1], tutorManagePermissionList.concat(getPermissionList, studentPermissionList));
roleRights.set(roles[2], adminManagePermissionList.concat(getPermissionList, studentPermissionList, tutorManagePermissionList));

module.exports = {
  roles,
  roleRights,
};
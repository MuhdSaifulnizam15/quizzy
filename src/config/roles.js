const roles = ['student', 'tutor', 'admin'];

const roleRights = new Map();
roleRights.set(roles[0], ['getUsers']);
roleRights.set(roles[1], []);
roleRights.set(roles[2], ['getUser', 'getUsers', 'manageUsers', 'getSubject', 'getSubjects', 'manageSubjects']);

module.exports = {
  roles,
  roleRights,
};
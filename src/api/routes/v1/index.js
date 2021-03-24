const express = require("express");
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const subjectRoutes = require('./subject.route');
const classroomRoutes = require('./classroom.route');
const assignmentRoutes = require('./assignment.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

// router.use('/users', userRoutes);
const defaultRoutes = [
    {
      path: '/auth',
      route: authRoutes,
    },
    {
      path: '/users',
      route: userRoutes,
    },
    {
      path: '/subjects',
      route: subjectRoutes,
    },
    {
      path: '/classrooms',
      route: classroomRoutes,
    },
    {
      path: '/assignments',
      route: assignmentRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;
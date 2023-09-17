const { Router } = require('express');
const { projectsRouter } = require('./projects.route');

const router = Router();

router.use('/projects', projectsRouter);

module.exports = {
    router,
}
const { Router } = require('express');
const { projectsRouter } = require('./projects.route');
const { userRouter } = require("./user.route");

const router = Router();

router.use('/projects', projectsRouter);
router.use('/users', userRouter);

module.exports = {
    router,
}
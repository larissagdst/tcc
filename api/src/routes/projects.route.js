const { Router } = require('express');
const projectController = require('../controllers/projects.controller');
const {authMiddleware} = require("../middlewares/auth.middleware");

const projectsRouter = Router();

projectsRouter.post('/', authMiddleware, projectController.create);
projectsRouter.get('/', projectController.search);
projectsRouter.put('/:id', projectController.update);
projectsRouter.delete('/:id', projectController.remove);
projectsRouter.get('/:id', projectController.detail);
projectsRouter.post('/:id/rate', authMiddleware, projectController.rate);

module.exports = {
  projectsRouter,
}


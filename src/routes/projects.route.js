const { Router } = require('express');
const projectController = require('../controllers/projects.controller');

const projectsRouter = Router();

projectsRouter.post('/', projectController.create);
projectsRouter.get('/', projectController.search);
projectsRouter.put('/:id', projectController.update);
projectsRouter.delete('/:id', projectController.remove);
projectsRouter.get('/:id', projectController.detail);

module.exports = {
  projectsRouter,
}
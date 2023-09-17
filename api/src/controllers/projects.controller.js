const projectService = require('../services/project.service');

async function search(req, res) {
  try {
    const projects = await projectService.search(req.query);
    res.json(projects);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function create(req, res) {
  try {
    const project = await projectService.create(req.body);
    res.json(project);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function update(req, res) {
  try {
    const data = await projectService.update(req.params.id, req.body);

    if(data.error) return res.status(data.status).send({ message: data.message });

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function remove(req, res) {
  try {
    const data = await projectService.remove(req.params.id);

    if(data.error) return res.status(data.status).send({ message: data.message });

    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function detail(req, res) {
  try {
    const data = await projectService.detail(req.params.id);

    if(data.error) return res.status(data.status).send({ message: data.message });

    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  search,
  create,
  update,
  remove,
  detail
}
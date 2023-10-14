const projectService = require('../services/project.service');
const { createProjectValidator } = require('../validator/project.validator')

async function search(req, res) {
  try {
    const projects = await projectService.search(req.query);
    res.json(projects);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function create(req, res) {
  const body = req.body;
  

  const validation = await createProjectValidator.validate(req.body, { abortEarly: false }).catch(err => {
     return err
  })

  if(validation.errors) {
    return res.status(422).json({ errors: validation.errors })
  }

  const { project, message } = await projectService.create(body);

  if(message) {
    return res.status(400).json({ message })
  }

    res.status(200).json(project)
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
    create,
    search,
    update,
    remove,
    detail
  }
const projectRepository = require('../repositories/project.repository');

async function search() {
  return projectRepository.search();
}

async function create(project) {
  return projectRepository.create(project);
}

async function update(id, project) {
  const projectExists = await projectRepository.findOne(id);

  if(!projectExists) return { error: true, status: 404, message: 'Project not found' };

  return projectRepository.update(id, project);
}

async function remove(id) {
  const projectExists = await projectRepository.findOne(id);

  if(!projectExists) return { error: true, status: 404, message: 'Project not found' };

  await projectRepository.remove(id);

  return { success: true }
}

async function detail(id) {
  const projectExists = await projectRepository.findOne(id);

  if(!projectExists) return { error: true, status: 404, message: 'Project not found' };

  return projectExists;
}

module.exports = {
  search,
  create,
  update,
  remove,
  detail
}
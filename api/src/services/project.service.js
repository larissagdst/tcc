const projectRepository = require('../repositories/project.repository');

async function search() {
  let projects = await projectRepository.search();

  projects = projects.map(project => {

    const rating = project.ratings.reduce((acc, current) => { return acc + current.star }, 0) / project.ratings.length;

    return {
      ...project,
      rating: Math.ceil(rating)
    }
  })

  return projects
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

  const rating = projectExists.ratings.reduce((acc, current) => { return acc + current.star }, 0) / projectExists.ratings.length;

  return {
    ...projectExists,
    rating: Math.ceil(rating)
  };
}

module.exports = {
  search,
  create,
  update,
  remove,
  detail
}
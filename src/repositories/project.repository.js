const { db } = require('../database/database')
const { projectEntity } = require('../entities/project.entity')

const repository = db.getRepository(projectEntity);

async function search() {
  return repository.find();
}

async function create(project) {
  return repository.save(project);
}

async function findOne(id) {
  return repository.findOne({ where: { id}});
}

async function update(id, project) {
  await repository.update({ id }, project);

  return findOne(id);
}

async function remove(id) {
  await repository.delete({ id });
}

module.exports = {
  search,
  create,
  findOne,
  update,
  remove,
}
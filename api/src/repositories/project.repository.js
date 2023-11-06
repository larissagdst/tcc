const { db } = require('../database/database')
const { projectEntity } = require('../entities/project.entity')

const repository = db.getRepository(projectEntity);

async function search() {
  return repository.find({
    select: {
      user: {
        id: true,
        name: true,
        email: true
      }
    },
    relations: {
      user: true,
      ratings: true
    }
  });
}

async function create(project) {
  return repository.save(project);
}

async function findOne(id) {
  return repository.findOne({
    where: { id },
    select: {
      ratings: {
        id: true,
        star: true,
        message: true,
        user: {
          id: true,
          name: true,
          email: true
        }
      }
    },
    relations: {
      ratings: {
        user: true
      }
    }
  });
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
const { db } = require('../database/database')
const { userEntity } = require('../entities/user.entity')

const repository = db.getRepository(userEntity);

async function search() {
  return repository.find();
}

async function create(user) {
  return repository.save(user);
}

async function findOne(where) {
  return repository.findOne({ where });
}

async function update(id, user) {
  await repository.update({ id }, user);

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
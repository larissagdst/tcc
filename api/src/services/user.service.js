const userRepository = require('../repositories/user.repository')

async function search() {
  return userRepository.search();
}

async function create(user) {
  return userRepository.create(user);
}

async function update(id, user) {
  const userExists = await userRepository.findOne(id);

  if(!userExists) return { error: true, status: 404, message: 'User not found' };

  return userRepository.update(id, user);
}

async function remove(id) {
  const userExists = await userRepository.findOne(id);

  if(!userExists) return { error: true, status: 404, message: 'User not found' };

  await userRepository.remove(id);

  return { success: true }
}

async function findOne(where) {
  return await userRepository.findOne(where)
}

async function detail(id) {
  const userExists = await userRepository.findOne(id);

  if(!userExists) return { error: true, status: 404, message: 'User not found' };

  return userExists;
}

module.exports = {
  search,
  create,
  update,
  remove,
  detail,
  findOne
}
const { db } = require('../database/database')
const { ratingEntity } = require('../entities/rating.entity')

const repository = db.getRepository(ratingEntity);

async function create(user) {
  return repository.save(user);
}

module.exports = {
  create,
}
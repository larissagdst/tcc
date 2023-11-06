const ratingRepository = require('../repositories/rating.repository');

async function create(project) {
  return ratingRepository.create(project);
}

module.exports = {
  create,
}
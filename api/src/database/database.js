const typeorm = require('typeorm');
const { projectEntity } = require('../entities/project.entity');
const { userEntity } = require('../entities/user.entity')
const { ratingEntity } = require('../entities/rating.entity')

const db = new typeorm.DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'projeto',
  synchronize: true,
  entities: [projectEntity, userEntity, ratingEntity]
});

module.exports = {
    db
}
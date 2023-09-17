const typeorm = require('typeorm');
const { projectEntity } = require('../entities/project.entity');

const db = new typeorm.DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'projeto',
  synchronize: true,
  entities: [projectEntity]
});

module.exports = {
    db
}
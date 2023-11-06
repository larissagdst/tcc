const { EntitySchema } = require('typeorm');

const userEntity = new EntitySchema({
  name: 'User',
  tableName: 'users',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    email: {
      type: 'varchar',
      length: 255,
    },
    password: {
      type: 'varchar',
      length: 255,
    },
    createdAt: {
      type: 'timestamp',
      name: 'created_at',
      default: () => 'CURRENT_TIMESTAMP',
    },
    updatedAt: {
      type: 'timestamp',
      name: 'updated_at',
      default: () => 'CURRENT_TIMESTAMP',
    },
    deletedAt: {
      type: 'timestamp',
      name: 'deleted_at',
      nullable: true,
    },
  },
  relations: {
    projects: {
      type: 'one-to-many',
      target: 'Project'
    },
    ratings: {
      type: 'one-to-many',
      target: 'Rating'
    }
  }
})

module.exports = {
  userEntity
}
const { EntitySchema } = require('typeorm')

const ratingEntity = new EntitySchema({
  name: 'Rating',
  tableName: 'ratings',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    star: {
      type: 'int'
    },
    message: {
      type: 'varchar'
    },
    userId: {
      type: 'int',
      name: 'user_id'
    },
    projectId: {
      type: 'int',
      name: 'project_id'
    },
  },
  relations: {
    user: {
      type: 'many-to-one',
      target: 'User',
      eager: false,
      joinColumn: {
        name: 'user_id',
        referencedColumnName: 'id'
      }
    },
    project: {
      type: 'many-to-one',
      target: 'Project',
      joinColumn: {
        name: 'project_id'
      },
      inverseSide: 'ratings'
    }
  }
})

module.exports = {
  ratingEntity
}
const { EntitySchema } = require('typeorm');

const projectEntity = new EntitySchema({
  name: 'Project',
  tableName: 'projects',
  columns: {
    id: {
      type: 'int',
      primary: true,
      generated: true,
    },
    coverImage: {
      type: 'varchar',
      length: 255,
      name: 'cover_image',
      nullable: true
    },
    name: {
      type: 'varchar',
      length: 255,
    },
    description: {
      type: 'text',
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
  }
});

module.exports = {
  projectEntity,
}
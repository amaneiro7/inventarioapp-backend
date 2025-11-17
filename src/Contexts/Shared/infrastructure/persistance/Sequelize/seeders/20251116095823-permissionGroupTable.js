'use strict'

const permissionGroups = [
  { id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a01', name: 'Admin' },
  { id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a02', name: 'IT Support' },
  { id: 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a03', name: 'Read-Only' }
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const groupsWithTimestamps = permissionGroups.map(g => ({
      ...g,
      created_at: new Date(),
      updated_at: new Date()
    }))
    await queryInterface.bulkInsert('permission_groups', groupsWithTimestamps, {})
  },

  async down (queryInterface, Sequelize) {
    // Eliminar primero las relaciones en la tabla de unión
    await queryInterface.bulkDelete(
      'permission_group_permissions',
      {
        permission_group_id: { [Sequelize.Op.in]: permissionGroups.map(g => g.id) }
      },
      {}
    )
    // Luego eliminar los grupos
    await queryInterface.bulkDelete(
      'permission_groups',
      { id: { [Sequelize.Op.in]: permissionGroups.map(g => g.id) } },
      {}
    )
  }
}

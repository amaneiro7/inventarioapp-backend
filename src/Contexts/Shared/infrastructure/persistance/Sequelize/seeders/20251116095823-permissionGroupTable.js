'use strict'

const { permissionGroups } = require('./access_control/permissions2')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const groupsWithTimestamps = permissionGroups.map(g => ({
			...g,
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('permission_groups', groupsWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		// Eliminar primero las relaciones en la tabla de unión
		// await queryInterface.bulkDelete(
		// 	'permission_groups',
		// 	{
		// 		permission_group_id: { [Sequelize.Op.in]: permissionGroups.map(g => g.id) }
		// 	},
		// 	{}
		// )
		// Luego eliminar los grupos
		await queryInterface.bulkDelete(
			'permission_groups',
			{ id: { [Sequelize.Op.in]: permissionGroups.map(g => g.id) } },
			{}
		)
	}
}

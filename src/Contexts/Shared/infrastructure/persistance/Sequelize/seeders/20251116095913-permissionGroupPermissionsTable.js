'use strict'

const { permissionGroups, generateGroupPermissions } = require('./access_control/permissions')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const groupPermissions = generateGroupPermissions()
		await queryInterface.bulkInsert('asignacion_permiso_grupo', groupPermissions, {})
	},

	async down(queryInterface, Sequelize) {
		// Obtenemos todos los IDs de los grupos para hacer el borrado
		const groupIds = permissionGroups.map(g => g.id)
		await queryInterface.bulkDelete(
			'asignacion_permiso_grupo',
			{
				permission_group_id: { [Sequelize.Op.in]: groupIds }
			},
			{}
		)
	}
}

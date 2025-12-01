'use strict'

const { permissions } = require('./access_control/permissions')

// const { randomUUID } = require('crypto')

// for (let index = 0; index < 6; index++) {
// 	console.log(randomUUID())
// }

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const permissionsWithTimestamps = permissions.map(p => ({
			...p,
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('permissions', permissionsWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'permissions',
			{
				id: { [Sequelize.Op.in]: permissions.map(p => p.id) }
			},
			{}
		)
	}
}

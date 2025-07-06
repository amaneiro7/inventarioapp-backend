'use strict'

const { cargosData } = require('./employee/cargo/cargos')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'cargos',
			cargosData.map(({ id, name }) => ({
				id,
				name,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('cargos', null, {})
	}
}

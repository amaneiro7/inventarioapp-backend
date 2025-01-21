'use strict'

const { centroCostoData } = require('./employee/area/centroCosto')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'centro_costos',
			centroCostoData.map(({ id, name }) => ({
				id,
				name,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('centro_costos', null, {})
	}
}

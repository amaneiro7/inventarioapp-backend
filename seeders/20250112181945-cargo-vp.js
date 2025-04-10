'use strict'

const { cargoVPData } = require('./employee/area/cargoVP')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'cargo_vicepresidencia',
			cargoVPData.map(({ cargoId, vicepresidenciaId }) => ({
				vicepresidencia_id: vicepresidenciaId,
				cargo_id: cargoId,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('cargo_vicepresidencia', null, {})
	}
}

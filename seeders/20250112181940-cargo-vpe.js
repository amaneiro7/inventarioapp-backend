'use strict'


const { cargoVPEData } = require('./employee/area/cargoVPE')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'cargo_vicepresidencia_ejecutiva',
			cargoVPEData.map(({ cargoId, vicepresidenciaEjecutivaId }) => ({
				vicepresidencia_ejecutiva_id: vicepresidenciaEjecutivaId,
				cargo_id: cargoId,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.bulkDelete('cargo_vicepresidencia_ejecutiva', null, {})
	}
}

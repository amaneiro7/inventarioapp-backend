'use strict'

const { VPData } = require('./employee/area/vicepresidencia')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'vicepresidencias',
			VPData.map(({ id, name, vicepresidenciaEjecutivaId }) => ({
				id,
				name,
				vicepresidencia_ejecutiva_id: vicepresidenciaEjecutivaId,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('vicepresidencias', null, {})
	}
}

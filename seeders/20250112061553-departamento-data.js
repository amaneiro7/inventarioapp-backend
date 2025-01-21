'use strict'

const { departamentoData } = require('./employee/area/departamento')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'departamentos',
			departamentoData.map(
				({ id, name, centroCostoId, vicepresidenciaEjecutivaId }) => ({
					id,
					name,
					centro_costo_id: centroCostoId,
					vicepresidencia_ejecutiva_id: vicepresidenciaEjecutivaId,
					created_at: new Date(),
					updated_at: new Date()
				})
			)
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('departamentos', null, {})
	}
}

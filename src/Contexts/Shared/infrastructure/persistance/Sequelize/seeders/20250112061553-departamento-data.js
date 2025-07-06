'use strict'

const { departamentoData } = require('./employee/area/departamento')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'departamentos',
			departamentoData.map(({ id, name, vicepresidenciaId }) => ({
				id,
				name,
				vicepresidencia_id: vicepresidenciaId,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('departamentos', null, {})
	}
}

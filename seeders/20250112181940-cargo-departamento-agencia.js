'use strict'

const {
	cargoDepartamentoAgenciaData
} = require('./employee/area/cargoDepartamento')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert(
			'cargo_departamento',
			cargoDepartamentoAgenciaData.map(({ cargoId, departamentoId }) => ({
				departamento_id: departamentoId,
				cargo_id: cargoId,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('cargo_departamento', null, {})
	}
}

'use strict'

const { restoNuevosUsuarios } = require('./employee/nuevos_usuarios')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const employeesWithTimestamps = restoNuevosUsuarios.map(employee => ({
			id: crypto.randomUUID(),
			user_name: employee.userName.toLowerCase(),
			name: employee.name,
			last_name: employee.lastName,
			type: employee.type,
			email: employee.email,
			is_still_working: employee.isStillWorking,
			employee_code: employee.employeeCode,
			nationality: employee.nationality,
			cedula: employee.cedula,
			location_id: employee.locationId,
			directiva_id: employee.directivaId,
			vicepresidencia_ejecutiva_id: employee.vicepresidenciaEjecutivaId,
			vicepresidencia_id: employee.vicepresidenciaId,
			departamento_id: employee.departamentoId,
			cargo_id: employee.cargoId,
			extension: Sequelize.literal(`ARRAY[]::VARCHAR[]`),
			phone: Sequelize.literal(`ARRAY[]::VARCHAR[]`),
			created_at: new Date(),
			updated_at: new Date()
		}))
		await queryInterface.bulkInsert('employees', employeesWithTimestamps, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete(
			'employees',
			{
				user_name: { [Sequelize.Op.in]: restoNuevosUsuarios.map(p => p.userName) }
			},
			{}
		)
	}
}

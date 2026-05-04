'use strict'

const { newUserSinInfo } = require('./employee/nuevos_usuarios_sin_info')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const now = new Date()
		const employeesWithTimestamps = newUserSinInfo.map(employee => ({
			id: crypto.randomUUID(),
			user_name: employee.userName.toLowerCase(),
			name: null,
			last_name: null,
			type: 'regular',
			email: null,
			is_still_working: true,
			employee_code: null,
			nationality: null,
			cedula: null,
			location_id: null,
			directiva_id: null,
			vicepresidencia_ejecutiva_id: null,
			vicepresidencia_id: null,
			departamento_id: null,
			cargo_id: null,
			extension: Sequelize.literal(`ARRAY[]::VARCHAR[]`),
			phone: Sequelize.literal(`ARRAY[]::VARCHAR[]`),
			created_at: now,
			updated_at: now
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

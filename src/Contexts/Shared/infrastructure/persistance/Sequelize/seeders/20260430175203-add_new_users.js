'use strict'

const restoNuevosUsuarios = [
	{
		userName: 'angimartinez'
	},
	{
		userName: 'cazambrano'
	},
	{
		userName: 'dbasanta'
	},
	{
		userName: 'drondon'
	},
	{
		userName: 'jmaturel'
	},
	{
		userName: 'jnoguera'
	},
	{
		userName: 'jpepper'
	},
	{
		userName: 'lpalazzi'
	},
	{
		userName: 'lsobrado'
	},
	{
		userName: 'lugonzalez'
	},
	{
		userName: 'mcarrillo'
	},
	{
		userName: 'negonzalez'
	},
	{
		userName: 'svidal'
	},
	{
		userName: 'vvarani'
	},
	{
		userName: 'yecastro'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const employeesWithTimestamps = restoNuevosUsuarios.map(employee => ({
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

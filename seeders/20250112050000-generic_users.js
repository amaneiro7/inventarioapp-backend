'use strict'

const { genericsUsers } = require('./employee/usuariosGenericos')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		for (const employee of genericsUsers) {
			employee.phone = Sequelize.literal(`ARRAY[]::VARCHAR[]`)
			employee.extension = Sequelize.literal(`ARRAY[]::VARCHAR[]`)
			const existingEmployee = await queryInterface.rawSelect(
				'employees',
				{
					where: {
						user_name: {
							[Sequelize.Op.iLike]: `${employee.userName}`
						}
					}
				},
				['id']
			)

			if (existingEmployee) {
				await queryInterface.bulkUpdate(
					'employees',
					{
						user_name: employee.userName.toLowerCase(),
						// name: null,
						// last_name: null,
						// type: employee.type,
						// email: null,
						// is_still_working: employee.isStillWorking,
						// employee_code: null,
						// nationality: null,
						// cedula: null,
						// location_id: null,
						// directiva_id: null,
						// vicepresidencia_ejecutiva_id: null,
						// vicepresidencia_id: null,
						// departamento_id: null,
						// cargo_id: null,
						// extension: null,
						// phone: null
					},
					{
						id: existingEmployee
					}
				)
			} else {
				const id = crypto.randomUUID()
				await queryInterface.bulkInsert('employees', [
					{
						id,
						user_name: employee.userName,
						// name: null,
						// last_name: null,
						// type: employee.type,
						// email: null,
						// is_still_working: employee.isStillWorking,
						// employee_code: null,
						// nationality: null,
						// cedula: null,
						// location_id: null,
						// directiva_id: null,
						// vicepresidencia_ejecutiva_id: null,
						// vicepresidencia_id: null,
						// departamento_id: null,
						// cargo_id: null,
						// extension: null,
						// phone: null,
						created_at: new Date(),
						updated_at: new Date()
					}
				])
			}
		}
	},

	async down (queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	}
}

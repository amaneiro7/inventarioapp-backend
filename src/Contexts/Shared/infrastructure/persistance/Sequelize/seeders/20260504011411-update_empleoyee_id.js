'use strict'
const { updateDeviceEmployee } = require('./newUpdate/updateEmployee')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log(
				`--- Iniciando actualización de employee_id para ${updateDeviceEmployee.length} dispositivos ---`
			)

			for (const device of updateDeviceEmployee) {
				const { serial, employeeId: userName } = device

				if (serial && userName) {
					// 1. Buscar el id del empleado a través del user_name
					const employees = await queryInterface.sequelize.query(
						`SELECT id FROM employees WHERE LOWER(user_name) = LOWER(:userName) LIMIT 1`,
						{
							replacements: { userName },
							type: Sequelize.QueryTypes.SELECT,
							transaction
						}
					)

					if (employees && employees.length > 0) {
						const employeeUuid = employees[0].id
						console.log(`Actualizando Serial: ${serial} -> Usuario: ${userName} (ID: ${employeeUuid})`)

						// 2. Actualizar el campo employee_id en la tabla devices
						await queryInterface.bulkUpdate(
							'devices',
							{
								employee_id: employeeUuid,
								updated_at: new Date()
							},
							{ serial: serial },
							{ transaction }
						)
					} else {
						console.warn(`   ⚠️ No se encontró el empleado: ${userName} para el serial: ${serial}`)
					}
				}
			}

			await transaction.commit()
			console.log('✅ Seeder de asociación completado exitosamente.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la migración:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		console.log('--- Revirtiendo: Desvinculando empleados de los dispositivos afectados ---')
		const serials = updateDeviceEmployee.map(d => d.serial)
		await queryInterface.bulkUpdate(
			'devices',
			{
				employee_id: null,
				updated_at: new Date()
			},
			{
				serial: { [Sequelize.Op.in]: serials }
			},
			{}
		)
	}
}

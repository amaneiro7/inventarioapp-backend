'use strict'

const crypto = require('node:crypto')
const { restoNuevosUsuarios } = require('./employee/nuevos_usuarios')
const fixUserName = [
	{
		badusername: 'dalfonso',
		correctUsername: 'dalfonzo'
	}
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log('--- Fase 1: Insertando nuevos empleados (restoNuevosUsuarios) ---')
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
			await queryInterface.bulkInsert('employees', employeesWithTimestamps, { transaction })

			console.log('--- Fase 2: Ejecutando correcciones de nombres de usuario (fixUserName) ---')
			for (const fix of fixUserName) {
				console.log(`Corrigiendo: ${fix.badusername} -> ${fix.correctUsername}`)
				await queryInterface.bulkUpdate(
					'employees',
					{
						user_name: fix.correctUsername.toLowerCase(),
						updated_at: new Date()
					},
					{ user_name: fix.badusername.toLowerCase() },
					{ transaction }
				)
			}

			await transaction.commit()
			console.log('✅ Seeder ejecutado y confirmado exitosamente.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en la ejecución del seeder. Transacción revertida.', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		console.log('--- Revirtiendo: Eliminando empleados insertados ---')
		await queryInterface.bulkDelete(
			'employees',
			{
				user_name: { [Sequelize.Op.in]: restoNuevosUsuarios.map(p => p.userName) }
			},
			{}
		)
	}
}

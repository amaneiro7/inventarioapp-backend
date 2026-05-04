'use strict'

const { newUserSinInfo, capitalCadena } = require('./employee/nuevos_usuarios_sin_info')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log('--- Fase 1: Insertando nuevos empleados (restoNuevosUsuarios) ---')
			const now = new Date()
			const employeesWithTimestamps = newUserSinInfo.map(
				({ cedula, lastname, name, nationality, type, userName }) => ({
					id: crypto.randomUUID(),
					user_name: userName.toLowerCase().trim(),
					name: capitalCadena(name.trim()),
					last_name: capitalCadena(lastname.trim()),
					type: type.trim().toLowerCase(),
					email: null,
					is_still_working: true,
					employee_code: null,
					nationality: nationality?.trim()?.toUpperCase(),
					cedula,
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
				})
			)
			await queryInterface.bulkInsert('employees', employeesWithTimestamps, {})
			await transaction.commit()
			console.log('✅ Seeder ejecutado y confirmado exitosamente.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en la ejecución del seeder. Transacción revertida.', error)
			throw error
		}
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

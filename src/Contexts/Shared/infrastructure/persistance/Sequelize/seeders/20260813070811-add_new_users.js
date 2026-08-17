'use strict'

const crypto = require('node:crypto')
const { nuevosUsuarios } = require('./newUpdate0826/newUsers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log('--- Fase 1: Insertando nuevos empleados (nuevosUsuarios) ---')
			const now = new Date()
			const employeesWithTimestamps = nuevosUsuarios.map(
				({ cedula, lastname, name, nationality, type, userName }) => ({
					id: crypto.randomUUID(),
					user_name: userName,
					name,
					last_name: lastname,
					type: type.trim().toLowerCase(),
					email: null,
					is_still_working: true,
					employee_code: null,
					nationality,
					cedula,
					location_id: null,
					unidad_id: null,
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
				user_name: { [Sequelize.Op.in]: newUserSinInfo.map(p => p.userName) }
			},
			{}
		)
	}
}

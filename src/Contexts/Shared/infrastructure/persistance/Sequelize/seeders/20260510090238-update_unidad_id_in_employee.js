'use strict'

const { updateEmployeeUnidad } = require('./newUpdate/updateUnidadEmployeeId')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log(`--- Iniciando actualización de unidad_id para ${updateEmployeeUnidad.length} empleados ---`)

			for (const employee of updateEmployeeUnidad) {
				// Validar que el unidad_id exista para evitar errores de integridad o updates vacíos
				if (!employee.unidad_id) {
					console.warn(`  ⚠️ Saltando empleado con cédula ${employee.cedula}: unidad_id no encontrado.`)
					continue
				}

				await queryInterface.bulkUpdate(
					'employees',
					{
						unidad_id: employee.unidad_id,
						updated_at: new Date()
					},
					{ cedula: employee.cedula },
					{ transaction }
				)
			}

			await transaction.commit()
			console.log('✅ Actualización de unidad_id en empleados completada con éxito.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la ejecución del seeder update_unidad_id_in_employee:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log('--- Revirtiendo cambios de unidad_id en empleados ---')
			const cedulas = updateEmployeeUnidad.map(e => e.cedula)

			if (cedulas.length > 0) {
				await queryInterface.bulkUpdate(
					'employees',
					{
						unidad_id: null,
						updated_at: new Date()
					},
					{ cedula: { [Sequelize.Op.in]: cedulas } },
					{
						transaction
					}
				)
			}
			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			throw error
		}
	}
}

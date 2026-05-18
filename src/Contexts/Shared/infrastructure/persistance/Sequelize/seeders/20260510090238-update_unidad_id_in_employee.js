'use strict'

const { updateEmployeeUnidadContratado } = require('./newUpdate/updateUnidadEmployeeAgencyContratado')
const { updateEmployeeUnidadp1 } = require('./newUpdate/updateUnidadEmployeeAgencyp1')
const { updateEmployeeUnidadp2 } = require('./newUpdate/updateUnidadEmployeeAgencyp2')
const { updateEmployeeUnidadp3 } = require('./newUpdate/updateUnidadEmployeeAgencyp3')
const { updateEmployeeUnidad } = require('./newUpdate/updateUnidadEmployeeId')

const allEmployees = updateEmployeeUnidad.concat(
	updateEmployeeUnidadp2,
	updateEmployeeUnidadp1,
	updateEmployeeUnidadp3,
	updateEmployeeUnidadContratado
)
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log(`--- Iniciando actualización de unidad_id y cargo_id para ${allEmployees.length} empleados ---`)

			for (const employee of allEmployees) {
				// Validar que unidad_id y cargo_id existan para evitar errores de integridad
				if (!employee.unidad_id || !employee.cargo_id) {
					console.warn(
						`  ⚠️ Saltando empleado con cédula ${employee.cedula}: unidad_id o cargo_id no encontrado.`
					)
					continue
				}

				await queryInterface.bulkUpdate(
					'employees',
					{
						unidad_id: employee.unidad_id,
						cargo_id: employee.cargo_id,
						updated_at: new Date()
					},
					{ cedula: employee.cedula },
					{ transaction }
				)
			}

			await transaction.commit()
			console.log('✅ Actualización de unidad_id y cargo_id en empleados completada con éxito.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error durante la ejecución del seeder update_unidad_id_in_employee:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log('--- Revirtiendo cambios de unidad_id y cargo_id en empleados ---')
			const cedulas = allEmployees.map(e => e.cedula)

			if (cedulas.length > 0) {
				await queryInterface.bulkUpdate(
					'employees',
					{
						unidad_id: null,
						cargo_id: null,
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

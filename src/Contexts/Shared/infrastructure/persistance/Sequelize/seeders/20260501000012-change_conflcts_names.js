'use strict'

const {
	changeConflictNameToAlmacen,
	chanceConflictNameToPorDesincorporar,
	conflictNameToSwitchNames
} = require('./newUpdate/changeConflictName')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const now = new Date()

			// 1. Procesar changeConflictNameToAlmacen (Actualiza Device y Device_Computer)
			for (const update of changeConflictNameToAlmacen) {
				const {
					oldComputerName,
					locationId,
					statusId,
					computerName,
					ipAddress,
					operatingSystemId,
					operatingSystemArqId
				} = update

				console.log(`Procesando conflicto: ${oldComputerName}`)

				// Actualizar tabla devices (location y status)
				await queryInterface.sequelize.query(
					`UPDATE devices 
           SET location_id = :locationId, status_id = :statusId, updated_at = :now
           WHERE id IN (SELECT device_id FROM device_computers WHERE computer_name = :oldComputerName)`,
					{ replacements: { locationId, statusId, oldComputerName, now }, transaction }
				)

				// Actualizar tabla device_computers
				await queryInterface.sequelize.query(
					`UPDATE device_computers 
           SET computer_name = :computerName, 
               ip_address = :ipAddress, 
               operating_system_version_id = :operatingSystemId, 
               operating_system_arq_id = :operatingSystemArqId, 
               updated_at = :now
           WHERE computer_name = :oldComputerName`,
					{
						replacements: {
							computerName,
							ipAddress,
							operatingSystemId,
							operatingSystemArqId,
							oldComputerName,
							now
						},
						transaction
					}
				)
			}

			// 2. Procesar chanceConflictNameToPorDesincorporar
			for (const update of chanceConflictNameToPorDesincorporar) {
				const { oldComputerName, statusId, computerName, ipAddress, operatingSystemId, operatingSystemArqId } =
					update

				console.log(`Desincorporando: ${oldComputerName}`)

				// Actualizar tabla devices (status)
				await queryInterface.sequelize.query(
					`UPDATE devices 
           SET status_id = :statusId, updated_at = :now
           WHERE id IN (SELECT device_id FROM device_computers WHERE computer_name = :oldComputerName)`,
					{ replacements: { statusId, oldComputerName, now }, transaction }
				)

				// Actualizar tabla device_computers
				await queryInterface.sequelize.query(
					`UPDATE device_computers 
           SET computer_name = :computerName, 
               ip_address = :ipAddress, 
               operating_system_version_id = :operatingSystemId, 
               operating_system_arq_id = :operatingSystemArqId, 
               updated_at = :now
           WHERE computer_name = :oldComputerName`,
					{
						replacements: {
							computerName,
							ipAddress,
							operatingSystemId,
							operatingSystemArqId,
							oldComputerName,
							now
						},
						transaction
					}
				)
			}

			// 3. Procesar conflictNameToSwitchNames (Solo cambia computerName)
			for (const update of conflictNameToSwitchNames) {
				const { oldComputerName, computerName } = update

				console.log(`Cambiando nombre: ${oldComputerName} -> ${computerName}`)

				await queryInterface.sequelize.query(
					`UPDATE device_computers 
           SET computer_name = :computerName, updated_at = :now
           WHERE computer_name = :oldComputerName`,
					{ replacements: { computerName, oldComputerName, now }, transaction }
				)
			}

			await transaction.commit()
			console.log('✅ Seeder de resolución de conflictos completado con éxito.')
		} catch (error) {
			await transaction.rollback()
			console.error('❌ Error ejecutando el seeder de conflictos:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		// Revertir estos cambios es complejo ya que se pierde el rastro de los nombres antiguos
		// y estados originales. Se recomienda restaurar un backup si es necesario volver atrás.
	}
}

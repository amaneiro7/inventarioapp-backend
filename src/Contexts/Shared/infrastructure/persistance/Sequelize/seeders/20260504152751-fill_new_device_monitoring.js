'use strict'

const { newDeviceToAdd } = require('./newUpdate/newDeviceData')
const DEVICE_MONITORING_TABLE = 'device_monitorings'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			const serials = newDeviceToAdd.map(device => device.serial).filter(Boolean)

			if (serials.length === 0) {
				console.log('No se encontraron seriales en newDeviceData.js para procesar.')
				return
			}

			// 1. Buscamos los IDs de los dispositivos basados en los seriales del nuevo lote
			const devices = await queryInterface.sequelize.query(`SELECT id FROM devices WHERE serial IN (:serials)`, {
				replacements: { serials },
				type: Sequelize.QueryTypes.SELECT,
				transaction
			})

			if (devices.length === 0) {
				console.log('No se encontraron dispositivos en la DB que coincidan con los seriales proporcionados.')
				await transaction.rollback()
				return
			}

			// 2. Mapeamos para crear los registros de monitoreo iniciales
			const deviceMonitoringsData = devices.map(device => ({
				id: device.id, // Usualmente el ID de monitoreo coincide con el del dispositivo en relaciones 1:1
				device_id: device.id,
				status: 'not available', // Estado inicial desconocido
				last_scan: null,
				last_success: null,
				last_failed: null,
				created_at: new Date(),
				updated_at: new Date()
			}))

			// 3. Inserción masiva
			await queryInterface.bulkInsert(DEVICE_MONITORING_TABLE, deviceMonitoringsData, { transaction })

			console.log(`✅ Se crearon ${deviceMonitoringsData.length} registros de monitoreo.`)
			await transaction.commit()
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('❌ Error en la ejecución del seeder. Transacción revertida.', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const serials = newDeviceToAdd.map(device => device.serial).filter(Boolean)

		// Para revertir, buscamos los IDs de esos mismos seriales y los borramos de la tabla de monitoreo
		const devices = await queryInterface.sequelize.query(`SELECT id FROM devices WHERE serial IN (:serials)`, {
			replacements: { serials },
			type: Sequelize.QueryTypes.SELECT
		})

		if (devices.length > 0) {
			const ids = devices.map(d => d.id)
			await queryInterface.bulkDelete(DEVICE_MONITORING_TABLE, {
				device_id: {
					[Sequelize.Op.in]: ids
				}
			})
			console.log(`⏪ Se eliminaron los registros de monitoreo para los seriales procesados.`)
		}
	}
}

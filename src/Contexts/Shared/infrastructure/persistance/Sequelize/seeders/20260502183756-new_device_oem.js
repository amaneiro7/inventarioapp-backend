'use strict'

const { randomUUID } = require('node:crypto')
const { newOEMDeviceToAdd } = require('./newUpdate/newDeviceDataForOEM')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			console.log('--- INICIANDO VALIDACIÓN DE DATOS ---')
			const errors = []

			// 1. Fase de Validación: Antes de tocar la BD, verificamos la integridad del array
			for (const [index, device] of newOEMDeviceToAdd.entries()) {
				const identifier = device.computerName || `Registro #${index + 1}`

				// Validar que los IDs existan (que los .find() en newDeviceData.js hayan funcionado)
				if (!device.computerName)
					errors.push(`[${identifier}] El Nombre de Equipo (computerName) es obligatorio.`)
				if (!device.categoryId)
					errors.push(
						`[${identifier}] Categoría no encontrada (verifica el nombre en la data de categorías).`
					)
				if (!device.brandId) errors.push(`[${identifier}] Marca no encontrada.`)
				if (!device.modelId) errors.push(`[${identifier}] Modelo no encontrado.`)
				if (!device.processorId) errors.push(`[${identifier}] Procesador no encontrado.`)
				if (!device.locationId) errors.push(`[${identifier}] Ubicación no encontrada.`)
				if (!device.statusId) errors.push(`[${identifier}] StatusId no definido.`)

				// Validación de consistencia de RAM
				const ramSum = device.memoriaRamModules?.reduce((acc, val) => acc + val, 0) || 0
				if (ramSum !== device.memoryRamCapacity) {
					errors.push(
						`[${identifier}] RAM inconsistente: Suma de módulos (${ramSum}) != Capacidad total (${device.memoryRamCapacity}).`
					)
				}
			}

			if (errors.length > 0) {
				console.error('❌ ERRORES DE VALIDACIÓN DETECTADOS EN newDeviceDataForOEM.js:')
				errors.forEach(err => console.error(` -> ${err}`))
				throw new Error('Migración abortada por inconsistencia de datos.')
			}

			console.log('✅ Validación exitosa. Insertando dispositivos...')

			for (const device of newOEMDeviceToAdd) {
				const deviceId = randomUUID()
				const now = new Date()

				// 2. Inserción en tabla principal 'devices'
				// Buscamos el ID del empleado por su user_name para asegurar la relación dinámica
				await queryInterface.sequelize.query(
					`INSERT INTO devices (id, serial, activo, status_id, category_id, brand_id, model_id, employee_id, location_id, observation, created_at, updated_at)
           VALUES (:id, :serial, :activo, :statusId, :categoryId, :brandId, :modelId, 
                  (SELECT id FROM employees WHERE LOWER(user_name) = LOWER(:employeeId) LIMIT 1), 
                  :locationId, :observation, :now, :now)`,
					{
						replacements: {
							id: deviceId,
							serial: device.serial,
							activo: device.activo,
							statusId: device.statusId,
							categoryId: device.categoryId,
							brandId: device.brandId,
							modelId: device.modelId,
							employeeId: device.employeeId,
							locationId: device.locationId,
							observation: device.observation,
							now
						},
						type: Sequelize.QueryTypes.INSERT,
						transaction
					}
				)

				// 3. Inserción en tabla de extensión 'device_computers'
				await queryInterface.bulkInsert(
					'device_computers',
					[
						{
							id: deviceId,
							category_id: device.categoryId,
							device_id: deviceId,
							processor_id: device.processorId,
							computer_name: device.computerName,
							memory_ram_capacity: device.memoryRamCapacity,
							memory_ram: device.memoriaRamModules,
							hard_drive_capacity_id: device.hardDriveCapacityId,
							hard_drive_type_id: device.hardDriveTypeId,
							operating_system_version_id: device.operatingSystemId,
							operating_system_arq_id: device.operatingSystemArqId,
							mac_address: device.macAddress,
							ip_address: device.ipAddress,
							created_at: now,
							updated_at: now
						}
					],
					{ transaction }
				)
			}

			await transaction.commit()
			console.log('🌟 Nuevos dispositivos insertados correctamente.')
		} catch (error) {
			if (transaction) await transaction.rollback()
			console.error('Error durante la migración de inserción:', error)
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const names = newOEMDeviceToAdd.map(d => d.computerName)
		const devices = await queryInterface.sequelize.query(
			`SELECT device_id FROM device_computers WHERE computer_name IN (:names)`,
			{
				replacements: { names },
				type: Sequelize.QueryTypes.SELECT
			}
		)
		const deviceIds = devices.map(d => d.device_id)

		if (deviceIds.length > 0) {
			await queryInterface.bulkDelete('device_computers', {
				device_id: { [Sequelize.Op.in]: deviceIds }
			})
			await queryInterface.bulkDelete('devices', {
				id: { [Sequelize.Op.in]: deviceIds }
			})
			console.log(`Se eliminaron los dispositivos con nombres: ${names.join(', ')}`)
		}
	}
}

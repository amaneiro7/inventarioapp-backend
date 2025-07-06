'use strict'

const { randomUUID } = require('node:crypto')
const { agenciaGuayana } = require('./newDeviceData/agenciasGuayana')
const { agenciaCapital } = require('./newDeviceData/agenciasCapital')
const { agenciaInsular } = require('./newDeviceData/agenciasInsular')
const { agenciaLlanos } = require('./newDeviceData/agenciasLlanos')
const { agenciaCarabobo } = require('./newDeviceData/agenciasCarabobo')
const { agenciaOriente } = require('./newDeviceData/agenciasOriente')
const { agenciaCentroOccidente } = require('./newDeviceData/agenciasCentroOccidente')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const agencias = agenciaGuayana.concat(
			agenciaCapital,
			agenciaInsular,
			agenciaLlanos,
			agenciaCarabobo,
			agenciaOriente,
			agenciaCentroOccidente
		)
		return queryInterface.sequelize.transaction(async transaction => {
			const devicesWithResolvedEmployeeds = await Promise.all(
				agencias.map(async device => {
					let resolvedEmployeeId = null
					if (device.employeeId) {
						const employee = await queryInterface.rawSelect(
							'employees',
							{
								where: {
									user_name: {
										[Sequelize.Op.iLike]: `${device.employeeId}`
									}
								}
							},
							['id']
						)
						resolvedEmployeeId = employee
					}
					return {
						...device,
						employeeId: resolvedEmployeeId,
						id: randomUUID(),
						createdAt: new Date(),
						updatedAt: new Date()
					}
				})
			)
			// Insertar en la tabla 'devices'
			await queryInterface.bulkInsert(
				'devices',
				devicesWithResolvedEmployeeds.map(device => ({
					id: device.id,
					serial: device.serial,
					activo: device.activo,
					status_id: device.statusId,
					category_id: device.categoryId,
					brand_id: device.brandId,
					model_id: device.modelId,
					employee_id: device.employeeId,
					location_id: device.locationId,
					observation: device.observation,
					created_at: device.createdAt,
					updated_at: device.updatedAt
				})),
				{ transaction }
			)

			// Insertar en la tabla 'device_computeres'
			await queryInterface.bulkInsert(
				'device_computers',
				devicesWithResolvedEmployeeds.map(device => ({
					id: device.id,
					category_id: device.categoryId,
					device_id: device.id,
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
					created_at: device.createdAt,
					updated_at: device.updatedAt
				})),
				{ transaction }
			)
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('device_computers', {
			device_id: devicesToSeed.map(device => device.id).filter(Boolean)
		})
		await queryInterface.bulkDelete('devices', {
			id: devicesToSeed.map(device => device.id).filter(Boolean)
		})
	}
}

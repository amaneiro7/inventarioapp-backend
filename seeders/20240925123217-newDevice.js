'use strict'

const { randomUUID } = require('crypto')
const { partsAndPieces } = require('./deviceData/partsandpieces')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		return await queryInterface.bulkInsert(
			'devices',
			partsAndPieces.map(device => ({
				id: randomUUID(),
				serial: device.serial,
				activo: device.activo,
				status_id: device.statusId,
				category_id: device.categoryId,
				brand_id: device.brandId,
				model_id: device.modelId,
				employee_id: device.employeeId,
				location_id: device.locationId,
				observation: device.observation,
				created_at: new Date(),
				updated_at: new Date()
			}))
		)
	},

	async down(queryInterface, Sequelize) {
		return await queryInterface.bulkDelete('devices', {
			serial: {
				[Sequelize.Op.in]: partsAndPieces.map(device => device.serial)
			}
		})
	}
}

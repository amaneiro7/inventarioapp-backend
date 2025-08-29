'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('shipment_devices', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false
			},
			shipment_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'shipments',
					key: 'id'
				},
				onDelete: 'CASCADE' // Si se borra un envío, se borran sus registros asociados
			},
			device_id: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'devices',
					key: 'id'
				}
			},
			device_snapshot: {
				type: Sequelize.JSONB,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('shipment_devices')
	}
}

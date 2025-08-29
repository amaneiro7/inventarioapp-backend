'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('shipments', {
			id: {
				type: Sequelize.UUID,
				primaryKey: true,
				allowNull: false
			},
			shipment_code: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			origin: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'sites',
					key: 'id'
				}
			},
			destination: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'sites',
					key: 'id'
				}
			},
			shipment_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			delivery_date: {
				type: Sequelize.DATE,
				allowNull: true
			},
			sent_by: {
				type: Sequelize.UUID,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id'
				}
			},
			received_by: {
				type: Sequelize.UUID,
				allowNull: true,
				references: {
					model: 'employees',
					key: 'id'
				}
			},
			tracking_number: {
				type: Sequelize.STRING,
				allowNull: true,
				unique: true
			},
			observation: {
				type: Sequelize.STRING,
				allowNull: true
			},
			status: {
				type: Sequelize.ENUM('pendiente', 'en_transito', 'entregado', 'cancelado'),
				allowNull: false
			},
			reason: {
				type: Sequelize.ENUM(
					'nueva_asignacion',
					'reparacion',
					'devolucion',
					'traslado',
					'desincorporacion',
					'otro'
				),
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE
			},
			updated_at: {
				type: Sequelize.DATE
			}
		})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('shipments')
	}
}

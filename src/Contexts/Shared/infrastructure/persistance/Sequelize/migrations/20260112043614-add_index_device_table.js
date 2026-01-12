'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const tableName = 'devices'
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.removeConstraint(tableName, 'devices_serial_key')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key1')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key2')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key3')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key4')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key5')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key6')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key7')
			await queryInterface.removeConstraint(tableName, 'devices_serial_key8')

			await queryInterface.addConstraint(tableName, {
				fields: ['serial', 'brand_id'],
				type: 'unique',
				name: 'unique_device_serial_per_brand'
			})

			await queryInterface.addConstraint(tableName, {
				type: 'check',
				fields: ['location_id', 'status_id'],
				where: {
					[Sequelize.Op.or]: [
						// Opción A: Es desincorporado (puede ser nulo o no)
						{ status_id: '4' },
						// Opción B: Si es cualquier otro estatus, la ubicación NO debe ser nula
						{ location_id: { [Sequelize.Op.ne]: null } }
					]
				}
			})

			await queryInterface.addIndex(tableName, ['status_id'], { name: 'device_printer_status_id_idx' })
			await queryInterface.addIndex(tableName, ['category_id'], { name: 'device_category_id_idx' })
			await queryInterface.addIndex(tableName, ['brand_id'], { name: 'device_brand_id_idx' })
			await queryInterface.addIndex(tableName, ['model_id'], { name: 'device_model_id_idx' })
			await queryInterface.addIndex(tableName, ['employee_id'], { name: 'device_employee_id_idx' })
			await queryInterface.addIndex(tableName, ['location_id'], { name: 'device_location_id_idx' })
			await queryInterface.addIndex(tableName, ['status_id', 'category_id'], {
				name: 'device_status_category_id_idx'
			})
			await queryInterface.addIndex(tableName, ['location_id', 'status_id'], {
				name: 'device_location_status_id_idx'
			})

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const tableName = 'devices'
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key1' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key2' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key3' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key4' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key5' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key6' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key7' },
				{ transaction }
			)
			await queryInterface.addConstraint(
				tableName,
				{ fields: ['serial'], type: 'unique', name: 'devices_serial_key8' },
				{ transaction }
			)

			await queryInterface.removeConstraint(tableName, 'unique_device_serial_per_brand', { transaction })
			;(await queryInterface.removeConstraint('devices', 'check_location_if_not_desincorporado'), { transaction })

			// Revertir cambios
			await queryInterface.removeIndex(tableName, 'device_printer_status_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_category_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_brand_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_model_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_employee_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_location_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_status_category_id_idx', { transaction })
			await queryInterface.removeIndex(tableName, 'device_location_status_id_idx', { transaction })

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}

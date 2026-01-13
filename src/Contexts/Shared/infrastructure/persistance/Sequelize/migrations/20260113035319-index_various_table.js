'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await Promise.all([
				queryInterface.addIndex(
					'access_policies',
					['role_id'],
					{ name: 'access_polices_role_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'access_policies',
					['cargo_id'],
					{ name: 'access_polices_cargo_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'access_policies',
					['departamento_id'],
					{ name: 'access_polices_departamento_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'access_policies',
					['vicepresidencia_id'],
					{ name: 'access_polices_vicepresidencia_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'access_policies',
					['vicepresidencia_ejecutiva_id'],
					{ name: 'access_polices_vicepresidencia_ejecutiva_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'access_policies',
					['directiva_id'],
					{ name: 'access_polices_directiva_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'access_policies',
					['priority'],
					{ name: 'access_polices_priority_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'categories',
					['main_category_id'],
					{ name: 'categories_main_category_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_hard_drives',
					['device_id'],
					{ name: 'device_hard_drives_device_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_hard_drives',
					['hard_drive_capacity_id'],
					{ name: 'device_hard_drives_hard_drive_capacity_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_hard_drives',
					['hard_drive_type_id'],
					{ name: 'device_hard_drives_hard_drive_type_id_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'device_printers',
					['device_id'],
					{ name: 'device_printers_device_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_printers',
					['ip_address'],
					{ name: 'device_printers_ip_address_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_printers',
					['category_id'],
					{ name: 'device_printers_category_id_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'device_computers',
					['device_id'],
					{ name: 'device_computers_device_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_computers',
					['processor_id'],
					{ name: 'device_computers_processor_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_computers',
					['operating_system_version_id'],
					{ name: 'device_computers_operating_system_version_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_computers',
					['ip_address'],
					{ name: 'device_computers_ip_address_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'shipment_devices',
					['shipment_id'],
					{ name: 'shipment_devices_shipment_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'shipment_devices',
					['device_id'],
					{ name: 'shipment_devices_device_id_idx' },
					{ transaction }
				),

				queryInterface.addIndex('shipments', ['origin'], { name: 'shipments_origin_idx' }, { transaction }),
				queryInterface.addIndex(
					'shipments',
					['destination'],
					{ name: 'shipments_destination_idx' },
					{ transaction }
				),
				queryInterface.addIndex('shipments', ['sent_by'], { name: 'shipments_sent_by_idx' }, { transaction }),
				queryInterface.addIndex(
					'shipments',
					['received_by'],
					{ name: 'shipments_received_by_idx' },
					{ transaction }
				),
				queryInterface.addIndex('shipments', ['status'], { name: 'shipments_status_idx' }, { transaction }),
				queryInterface.addIndex(
					'shipments',
					['shipment_date'],
					{ name: 'shipments_shipment_date_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'device_monitorings',
					['device_id'],
					{ name: 'device_monitorings_device_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'device_monitorings',
					['status'],
					{ name: 'device_monitorings_status_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'operating_system_versions',
					['name'],
					{ name: 'operating_system_versions_name_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'processors',
					['product_collection'],
					{ name: 'processors_product_collection_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'vicepresidencia_ejecutivas',
					['directiva_id'],
					{ name: 'vicepresidencia_ejecutivas_directiva_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'vicepresidencias',
					['vicepresidencia_ejecutiva_id'],
					{ name: 'vicepresidencias_vicepresidencia_ejecutiva_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'departamentos',
					['vicepresidencia_id'],
					{ name: 'departamentos_vicepresidencia_id_idx' },
					{ transaction }
				),

				queryInterface.addIndex('states', ['region_id'], { name: 'states_region_id_idx' }, { transaction }),
				queryInterface.addIndex('cities', ['state_id'], { name: 'cities_state_id_idx' }, { transaction }),
				queryInterface.addIndex('sites', ['city_id'], { name: 'sites_city_id_idx' }, { transaction }),
				queryInterface.addIndex(
					'regions',
					['administrative_region_id'],
					{ name: 'regions_administrative_region_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'location_monitorings',
					['location_id'],
					{ name: 'location_monitorings_location_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'location_monitorings',
					['status'],
					{ name: 'location_monitorings_status_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'locations',
					['type_of_site_id'],
					{ name: 'locations_type_of_site_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex('locations', ['site_id'], { name: 'locations_site_id_idx' }, { transaction }),
				queryInterface.addIndex(
					'locations',
					['location_status_id'],
					{ name: 'locations_location_status_id_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'histories',
					['device_id'],
					{ name: 'histories_device_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex('histories', ['user_id'], { name: 'histories_user_id_idx' }, { transaction }),
				queryInterface.addIndex(
					'histories',
					['employee_id'],
					{ name: 'histories_employee_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex('histories', ['action'], { name: 'histories_action_idx' }, { transaction }),
				queryInterface.addIndex(
					'histories',
					['created_at'],
					{ name: 'histories_created_at_idx' },
					{ transaction }
				),

				queryInterface.addIndex(
					'model_monitors',
					['category_id'],
					{ name: 'model_monitors_category_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_printers',
					['category_id'],
					{ name: 'model_printers_category_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_mouses',
					['input_type_id'],
					{ name: 'model_mouses_input_type_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_mouses',
					['category_id'],
					{ name: 'model_mouses_category_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_keyboards',
					['input_type_id'],
					{ name: 'model_keyboards_input_type_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_keyboards',
					['category_id'],
					{ name: 'model_keyboards_category_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_computers',
					['memory_ram_type_id'],
					{ name: 'model_computers_memory_ram_type_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_computers',
					['category_id'],
					{ name: 'model_computers_category_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_laptops',
					['memory_ram_type_id'],
					{ name: 'model_laptops_memory_ram_type_id_idx' },
					{ transaction }
				),
				queryInterface.addIndex(
					'model_laptops',
					['category_id'],
					{ name: 'model_laptops_category_id_idx' },
					{ transaction }
				),

				queryInterface.addIndex('users', ['role_id'], { name: 'users_role_id_idx' }, { transaction }),
				queryInterface.addIndex('users', ['status'], { name: 'users_status_idx' }, { transaction })
			])
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	},

	async down(queryInterface, Sequelize) {
		const transaction = await queryInterface.sequelize.transaction()
		try {
			await Promise.all([
				queryInterface.removeIndex('access_policies', 'access_polices_role_id_idx', { transaction }),
				queryInterface.removeIndex('access_policies', 'access_polices_cargo_id_idx', { transaction }),
				queryInterface.removeIndex('access_policies', 'access_polices_departamento_id_idx', { transaction }),
				queryInterface.removeIndex('access_policies', 'access_polices_vicepresidencia_id_idx', { transaction }),
				queryInterface.removeIndex('access_policies', 'access_polices_vicepresidencia_ejecutiva_id_idx', {
					transaction
				}),
				queryInterface.removeIndex('access_policies', 'access_polices_directiva_id_idx', { transaction }),
				queryInterface.removeIndex('access_policies', 'access_polices_priority_idx', { transaction }),
				queryInterface.removeIndex('categories', 'categories_main_category_id_idx', { transaction }),
				queryInterface.removeIndex('device_hard_drives', 'device_hard_drives_device_id_idx', { transaction }),
				queryInterface.removeIndex('device_hard_drives', 'device_hard_drives_hard_drive_capacity_id_idx', {
					transaction
				}),
				queryInterface.removeIndex('device_hard_drives', 'device_hard_drives_hard_drive_type_id_idx', {
					transaction
				}),

				queryInterface.removeIndex('device_printers', 'device_printers_device_id_idx', { transaction }),
				queryInterface.removeIndex('device_printers', 'device_printers_ip_address_idx', { transaction }),
				queryInterface.removeIndex('device_printers', 'device_printers_category_id_idx', { transaction }),

				queryInterface.removeIndex('device_computers', 'device_computers_device_id_idx', { transaction }),
				queryInterface.removeIndex('device_computers', 'device_computers_processor_id_idx', { transaction }),
				queryInterface.removeIndex('device_computers', 'device_computers_operating_system_version_id_idx', {
					transaction
				}),
				queryInterface.removeIndex('device_computers', 'device_computers_ip_address_idx', { transaction }),

				queryInterface.removeIndex('shipment_devices', 'shipment_devices_shipment_id_idx', { transaction }),
				queryInterface.removeIndex('shipment_devices', 'shipment_devices_device_id_idx', { transaction }),

				queryInterface.removeIndex('shipments', 'shipments_origin_idx', { transaction }),
				queryInterface.removeIndex('shipments', 'shipments_destination_idx', { transaction }),
				queryInterface.removeIndex('shipments', 'shipments_sent_by_idx', { transaction }),
				queryInterface.removeIndex('shipments', 'shipments_received_by_idx', { transaction }),
				queryInterface.removeIndex('shipments', 'shipments_status_idx', { transaction }),
				queryInterface.removeIndex('shipments', 'shipments_shipment_date_idx', { transaction }),

				queryInterface.removeIndex('device_monitorings', 'device_monitorings_device_id_idx', { transaction }),
				queryInterface.removeIndex('device_monitorings', 'device_monitorings_status_idx', { transaction }),

				queryInterface.removeIndex('operating_system_versions', 'operating_system_versions_name_idx', {
					transaction
				}),
				queryInterface.removeIndex('processors', 'processors_product_collection_idx', { transaction }),

				queryInterface.removeIndex(
					'vicepresidencia_ejecutivas',
					'vicepresidencia_ejecutivas_directiva_id_idx',
					{ transaction }
				),
				queryInterface.removeIndex('vicepresidencias', 'vicepresidencias_vicepresidencia_ejecutiva_id_idx', {
					transaction
				}),
				queryInterface.removeIndex('departamentos', 'departamentos_vicepresidencia_id_idx', { transaction }),

				queryInterface.removeIndex('states', 'states_region_id_idx', { transaction }),
				queryInterface.removeIndex('cities', 'cities_state_id_idx', { transaction }),
				queryInterface.removeIndex('sites', 'sites_city_id_idx', { transaction }),
				queryInterface.removeIndex('regions', 'regions_administrative_region_id_idx', { transaction }),
				queryInterface.removeIndex('location_monitorings', 'location_monitorings_location_id_idx', {
					transaction
				}),
				queryInterface.removeIndex('location_monitorings', 'location_monitorings_status_idx', { transaction }),

				queryInterface.removeIndex('locations', 'locations_type_of_site_id_idx', { transaction }),
				queryInterface.removeIndex('locations', 'locations_site_id_idx', { transaction }),
				queryInterface.removeIndex('locations', 'locations_location_status_id_idx', { transaction }),

				queryInterface.removeIndex('histories', 'histories_device_id_idx', { transaction }),
				queryInterface.removeIndex('histories', 'histories_user_id_idx', { transaction }),
				queryInterface.removeIndex('histories', 'histories_employee_id_idx', { transaction }),
				queryInterface.removeIndex('histories', 'histories_action_idx', { transaction }),
				queryInterface.removeIndex('histories', 'histories_created_at_idx', { transaction }),

				queryInterface.removeIndex('model_monitors', 'model_monitors_category_id_idx', { transaction }),
				queryInterface.removeIndex('model_printers', 'model_printers_category_id_idx', { transaction }),
				queryInterface.removeIndex('model_mouses', 'model_mouses_input_type_id_idx', { transaction }),
				queryInterface.removeIndex('model_mouses', 'model_mouses_category_id_idx', { transaction }),
				queryInterface.removeIndex('model_keyboards', 'model_keyboards_input_type_id_idx', { transaction }),
				queryInterface.removeIndex('model_keyboards', 'model_keyboards_category_id_idx', { transaction }),
				queryInterface.removeIndex('model_computers', 'model_computers_memory_ram_type_id_idx', {
					transaction
				}),
				queryInterface.removeIndex('model_computers', 'model_computers_category_id_idx', { transaction }),
				queryInterface.removeIndex('model_laptops', 'model_laptops_memory_ram_type_id_idx', { transaction }),
				queryInterface.removeIndex('model_laptops', 'model_laptops_category_id_idx', { transaction }),

				queryInterface.removeIndex('users', 'users_role_id_idx', { transaction }),
				queryInterface.removeIndex('users', 'users_status_idx', { transaction })
			])
			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw error
		}
	}
}

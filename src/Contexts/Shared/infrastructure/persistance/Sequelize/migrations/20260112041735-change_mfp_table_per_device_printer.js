'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		// 1. Renombrar la tabla
		await queryInterface.renameTable('device_mfp', 'device_printers')

		// 3. Agregar Índices de Optimización
		// Verificamos si existen antes de crearlos para evitar errores si se re-ejecuta
		try {
			await queryInterface.addIndex('device_printers', ['device_id'], {
				name: 'device_printer_device_id_idx'
			})
		} catch (e) {
			/* Ignorar si ya existe */
		}

		try {
			await queryInterface.addIndex('device_printers', ['ip_address'], {
				name: 'device_printer_ip_address_idx'
			})
		} catch (e) {
			/* Ignorar si ya existe */
		}
	},

	async down(queryInterface, Sequelize) {
		// Revertir cambios
		await queryInterface.removeIndex('device_printers', 'device_printer_ip_address_idx')
		await queryInterface.removeIndex('device_printers', 'device_printer_device_id_idx')

		// Si agregaste la columna ip_address en esta migración, deberías quitarla,
		// pero si renombraste, depende de si quieres perder datos.
		// Generalmente en rename, el down es rename back.
		await queryInterface.renameTable('device_printers', 'device_mfp')
	}
}

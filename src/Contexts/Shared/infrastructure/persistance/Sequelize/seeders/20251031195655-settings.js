'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const defaultPasswordHash = '$2a$10$XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX' // Reemplazar con el hash real de la contraseña por defecto

		const settingsToSeed = [
			// CONFIGURACIONES DE SEGURIDAD
			{
				key: 'DEFAULT_PASSWORD_HASH',
				value: defaultPasswordHash,
				type: 'string',
				description: 'Hash de la contraseña inicial asignada a nuevos usuarios.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'PASSWORD_EXPIRY_DAYS',
				value: '90',
				type: 'number',
				description: 'Número de días antes de que una contraseña caduque y se requiera un cambio.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'FAILED_ATTEMPTS_LIMIT',
				value: '5',
				type: 'number',
				description: 'Número máximo de intentos de login fallidos antes de bloquear la cuenta.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'LOCKOUT_UNTIL_MINUTES',
				value: '15',
				type: 'number',
				description: 'Tiempo de bloqueo (en minutos) después de alcanzar el límite de intentos fallidos.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},

			// CONFIGURACIONES DE MONITOREO
			{
				key: 'DEVICE_MONITORING_ENABLED',
				value: 'false',
				type: 'boolean',
				description: 'Interruptor principal para activar el monitoreo de dispositivos.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'LOCATION_MONITORING_ENABLED',
				value: 'false',
				type: 'boolean',
				description: 'Interruptor principal para activar el monitoreo de ubicación.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'DEVICE_MONITORING_CONCURRENCY_LIMIT',
				value: '5',
				type: 'number',
				description: 'Límite de pings concurrentes para el monitoreo de dispositivos.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'DEVICE_MONITORING_START_HOUR',
				value: '7',
				type: 'number',
				description: 'Hora (en formato 24h) en que inicia el periodo de monitoreo.',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			},
			{
				key: 'DEVICE_MONITORING_DISABLE_TIME_CHECKS',
				value: 'false',
				type: 'boolean',
				description: 'Establecer a true para ignorar los límites de tiempo de monitoreo (uso en QA).',
				is_editable: true,
				created_at: new Date(),
				updated_at: new Date()
			}
		]

		await queryInterface.bulkInsert('settings', settingsToSeed, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('settings', null, {})
	}
}

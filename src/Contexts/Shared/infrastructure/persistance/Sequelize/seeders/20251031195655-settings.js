'use strict'

const bcrypt = require('bcrypt')
const { Json } = require('sequelize/lib/utils')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		const saltRounds = 10
		const defaultPasswordHash = bcrypt.hashSync('Avion01.', saltRounds)

		const allowedDomainsJson = JSON.stringify('["bnc.com.ve","banconacionaldecredito.com.ve","bncenlinea.net"]')

		const settingsToSeed = [
			// CONFIGURACIONES DE SEGURIDAD
			{
				key: 'DEFAULT_PASSWORD_HASH',
				value: defaultPasswordHash,
				type: 'string',
				description: 'Hash de la contraseña inicial asignada a nuevos usuarios.',
				group: 'security',
				is_editable: true
			},
			{
				key: 'PASSWORD_EXPIRY_DAYS',
				value: '90',
				type: 'number',
				description: 'Número de días antes de que una contraseña caduque y se requiera un cambio.',
				group: 'security',
				is_editable: true
			},
			{
				key: 'FAILED_ATTEMPTS_LIMIT',
				value: '5',
				type: 'number',
				description: 'Número máximo de intentos de login fallidos antes de bloquear la cuenta.',
				group: 'security',
				is_editable: true
			},
			{
				key: 'LOCKOUT_UNTIL_MINUTES',
				value: '15',
				type: 'number',
				description: 'Tiempo de bloqueo (en minutos) después de alcanzar el límite de intentos fallidos.',
				group: 'security',
				is_editable: true
			},

			// CONFIGURACIONES DE MONITOREO
			// LOCATION
			{
				key: 'LOCATION_MONITORING_ENABLED',
				value: 'false',
				type: 'boolean',
				description: 'Interruptor principal para activar el monitoreo de ubicación.',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_CONCURRENCY_LIMIT',
				value: '5',
				type: 'number',
				description: 'Límite de pings concurrentes para el monitoreo de ubicación.',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_IDLE_TIME_MINUTES',
				value: '1',
				type: 'number',
				description: 'Tiempo de inactividad (en minutos) antes de considerar que un dispositivo está inactivo.',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_START_HOUR', // Ejemplo: 8 para 8 AM
				value: '7',
				type: 'number',
				description: 'Hora (en formato 24h) en que inicia el periodo de monitoreo.',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_END_HOUR',
				value: '19',
				type: 'number',
				description: 'Hora (en formato 24h) en que finaliza el periodo de monitoreo.',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_START_DAY_OF_WEEK', // 0 (Domingo) a 6 (Sábado)
				value: '1',
				type: 'number',
				description: 'Día de la semana en que inicia el monitoreo (0=Domingo, 6=Sábado).',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_END_DAY_OF_WEEK',
				value: '6',
				type: 'number',
				description: 'Día de la semana en que finaliza el monitoreo (0=Domingo, 6=Sábado).',
				group: 'location_monitoring',
				is_editable: true
			},
			{
				key: 'LOCATION_MONITORING_DISABLE_TIME_CHECKS',
				value: 'false',
				type: 'boolean',
				description: 'Establecer a true para ignorar los límites de tiempo de monitoreo (uso en QA).',
				group: 'location_monitoring',
				is_editable: true
			},
			// DEVICE
			{
				key: 'DEVICE_MONITORING_ENABLED',
				value: 'false',
				type: 'boolean',
				description: 'Interruptor principal para activar el monitoreo de dispositivos.',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_CONCURRENCY_LIMIT',
				value: '5',
				type: 'number',
				description: 'Límite de pings concurrentes para el monitoreo de dispositivos.',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_IDLE_TIME_MINUTES',
				value: '1',
				type: 'number',
				description: 'Tiempo de inactividad (en minutos) antes de considerar que un dispositivo está inactivo.',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_START_HOUR', // Ejemplo: 8 para 8 AM
				value: '7',
				type: 'number',
				description: 'Hora (en formato 24h) en que inicia el periodo de monitoreo.',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_END_HOUR',
				value: '19',
				type: 'number',
				description: 'Hora (en formato 24h) en que finaliza el periodo de monitoreo.',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_START_DAY_OF_WEEK', // 0 (Domingo) a 6 (Sábado)
				value: '1',
				type: 'number',
				description: 'Día de la semana en que inicia el monitoreo (0=Domingo, 6=Sábado).',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_END_DAY_OF_WEEK',
				value: '6',
				type: 'number',
				description: 'Día de la semana en que finaliza el monitoreo (0=Domingo, 6=Sábado).',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'DEVICE_MONITORING_DISABLE_TIME_CHECKS',
				value: 'false',
				type: 'boolean',
				description: 'Establecer a true para ignorar los límites de tiempo de monitoreo (uso en QA).',
				group: 'device_monitoring',
				is_editable: true
			},
			{
				key: 'ALLOWED_EMAIL_DOMAINS',
				value: allowedDomainsJson,
				type: 'json',
				description: 'Lista de dominios de correo electrónico permitidos para los empleados.',
				group: 'security',
				is_editable: true
			}
		]

		await queryInterface.bulkInsert('settings', settingsToSeed, {})
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('settings', null, {})
	}
}

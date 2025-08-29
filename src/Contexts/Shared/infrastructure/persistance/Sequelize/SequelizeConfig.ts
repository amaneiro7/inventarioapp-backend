import { Sequelize } from 'sequelize'
import { config } from '../../config'
import { initializeModels } from './initializeModels' // Corregido: initilizarModels -> initializeModels
import { type Database } from '../../../domain/Database'
import { type Logger } from '../../../domain/Logger'

const {
	postgres: { user, password, dbName, host, port, ssl }
} = config
const url = `postgres://${user}:${password}@${host}:${port}/${dbName}`

// --- Mejoras ---
// 1. Se encapsula la instancia de Sequelize para que no sea exportada directamente.
//    La clase SequelizeConfig será la única responsable de gestionar la conexión.
export const sequelize = new Sequelize(url, {
	logging: false,
	dialect: 'postgres',
	...(ssl && {
		dialectOptions: {
			ssl: {
				require: 'require' // O true, dependiendo de la configuración del servidor
			}
		}
	}),
	pool: {
		max: 50,
		min: 0,
		acquire: 30000, // Aumentado para dar más tiempo en caso de carga
		idle: 10000
	}
})

// --- Variables para la lógica de reintentos ---
const MAX_RETRIES = 5
const RETRY_DELAY_MS = 5000 // 5 segundos

export class SequelizeConfig implements Database {
	private sequelizeConnection: Sequelize
	private readonly logger: Logger

	constructor({ logger }: { logger: Logger }) {
		// La instancia de Sequelize se pasa aquí para mantener la encapsulación.
		this.sequelizeConnection = sequelize
		this.logger = logger
	}

	// El método createConfig() era redundante y se elimina.

	async close(): Promise<void> {
		await this.sequelizeConnection.close()
		this.logger.info('La conexión a la base de datos ha sido cerrada.')
	}

	/**
	 * @description Conecta a la base de datos con una lógica de reintentos.
	 * Si la conexión falla, lo reintentará varias veces antes de fallar definitivamente.
	 */
	async connect(): Promise<void> {
		for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
			try {
				// 2. Se usa await para manejar correctamente la promesa de autenticación.
				await this.sequelizeConnection.authenticate()
				this.logger.info('Conexión a la base de datos establecida exitosamente.')
				this.logger.info(`dbHost: ${host}, dbPort: ${port}, dbName: ${dbName}`)

				// 3. La inicialización de modelos solo ocurre después de una conexión exitosa.
				await initializeModels(this.sequelizeConnection)
				this.logger.info('Los modelos de Sequelize han sido inicializados exitosamente.')

				// Si todo es exitoso, salimos del bucle.
				return
			} catch (error) {
				this.logger.error(`Error details: ${error}`)
				this.logger.error(
					`Intento ${attempt} de ${MAX_RETRIES}: No se pudo conectar a la base de datos. Reintentando en ${RETRY_DELAY_MS / 1000}s...`
				)

				if (attempt === MAX_RETRIES) {
					this.logger.error(
						'Se alcanzó el número máximo de intentos de conexión. No se pudo conectar a la base de datos.'
					)
					// Lanza el error para que la aplicación no se inicie.
					throw new Error(`Unable to connect to the database after ${MAX_RETRIES} attempts.`)
				}

				// Espera antes del siguiente reintento.
				await new Promise(resolve => setTimeout(resolve, RETRY_DELAY_MS))
			}
		}
	}
}

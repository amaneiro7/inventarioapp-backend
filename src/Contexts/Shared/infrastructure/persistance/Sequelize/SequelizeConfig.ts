import { Sequelize } from 'sequelize'
import { config } from '../../config'
import { initilizarModels } from './initSchemas'
import { type Database } from '../../../domain/Database'
import { type Logger } from '../../../domain/Logger'

const {
	postgres: { user, password, dbName, host, port, ssl }
} = config
const url = `postgres://${user}:${password}@${host}:${port}/${dbName}`

export const sequelize = new Sequelize(url, {
	logging: false,
	...(ssl && {
		dialectOptions: {
			ssl: {
				require: 'require'
			}
		}
	}),
	pool: {
		max: 50,
		min: 0,
		acquire: 10000,
		idle: 10000
	}
})

export class SequelizeConfig implements Database {
	private sequelizeConnection: Sequelize
	private readonly logger: Logger
	constructor({ logger }: { logger: Logger }) {
		this.sequelizeConnection = sequelize
		this.logger = logger
	}

	public createConfig(): Sequelize {
		return this.sequelizeConnection
	}

	async close(): Promise<void> {
		return this.sequelizeConnection.close()
	}

	async connet(): Promise<void> {
		try {
			this.sequelizeConnection.authenticate()
			this.logger.info('Connection to database has been established successfully.')
			this.logger.info(`dbHost: ${host}, dbPort: ${port}, dbName: ${dbName}`)
		} catch (error) {
			this.logger.error(`Unable to connect to the database:, ${error}`)
		}
		try {
			await initilizarModels(this.sequelizeConnection)
		} catch (error) {
			this.logger.error(`Unable to initilize models:, ${error}`)
		}
	}
}

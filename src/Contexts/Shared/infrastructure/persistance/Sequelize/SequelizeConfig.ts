import { Sequelize } from 'sequelize'
import { config } from '../../config'
import { Database } from '../../../domain/Database'
import { Logger } from '../../../domain/Logger'
import { initilizarModels } from './initSchemas'

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
		max: 5,
		min: 0,
		acquire: 60000,
		idle: 10000
	}
})

export class SequelizeConfig implements Database {
	private sequelizeConnection: Sequelize
	constructor(private readonly logger: Logger) {
		this.sequelizeConnection = sequelize
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

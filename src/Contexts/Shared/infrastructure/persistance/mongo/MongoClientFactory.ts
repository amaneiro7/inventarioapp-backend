import { MongoClient } from 'mongodb'
import MongoConfig from './MongoConfig'

const TIMEOUT = 3000

export class MongoClientFactory {
	private static clients: { [key: string]: MongoClient } = {}

	static async createClient(contextName: string, config: MongoConfig): Promise<MongoClient> {
		let client = MongoClientFactory.getClient(contextName)

		if (!client) {
			client = await MongoClientFactory.createAndConnectClient(config, contextName)

			MongoClientFactory.registerClient(client, contextName)
		}

		return client
	}

	private static getClient(contextName: string): MongoClient | null {
		return MongoClientFactory.clients[contextName]
	}

	private static buildUri(config: MongoConfig): string {
		if (config.url) {
			return config.url
		}

		const host = config.host || 'localhost'
		const port = config.port || 27017
		const dbName = config.dbName || 'dev'
		const hasAuth = Boolean(config.user && config.password)

		const auth = hasAuth ? `${encodeURIComponent(config.user!)}:${encodeURIComponent(config.password!)}@` : ''

		// En Docker, los usuarios root creados por MONGO_INITDB_ROOT_USERNAME se crean en la bd 'admin'
		const authSource = hasAuth ? '?authSource=admin' : ''

		return `mongodb://${auth}${host}:${port}/${dbName}${authSource}`
	}

	private static async createAndConnectClient(config: MongoConfig, contextName: string): Promise<MongoClient> {
		const uri = MongoClientFactory.buildUri(config)
		const client = new MongoClient(uri, {
			ignoreUndefined: true,
			serverSelectionTimeoutMS: TIMEOUT,
			connectTimeoutMS: TIMEOUT
		})

		try {
			await client.connect()
			console.log(
				`[MongoClientFactory] Conexión a MongoDB exitosa para "${contextName}" (${config.host || 'localhost'}:${config.port || 27017}/${config.dbName || 'dev'})`
			)
			return client
		} catch (error) {
			const safeHost = config.host || 'localhost'
			const safePort = config.port || 27017
			const safeDb = config.dbName || 'dev'
			const safeUser = config.user || 'sin usuario'
			const errorMessage = error instanceof Error ? error.message : String(error)

			console.error(
				`[MongoClientFactory ERROR] Falló la conexión a MongoDB para contexto "${contextName}":\n` +
					`  ➜ Host: ${safeHost}:${safePort}\n` +
					`  ➜ Database: ${safeDb}\n` +
					`  ➜ User: ${safeUser}\n` +
					`  ➜ Causa: ${errorMessage}\n` +
					`  ➜ Verifique si el contenedor de Mongo está arriba y si las credenciales en .env son correctas.`
			)

			throw new Error(`[MongoDB Connection Failed - ${contextName}]: ${errorMessage}`)
		}
	}

	private static registerClient(client: MongoClient, contextName: string): void {
		MongoClientFactory.clients[contextName] = client
	}
}

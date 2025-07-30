import { createClient, type RedisClientType } from 'redis'
import { config } from '../../config'
import { type Logger } from '../../../domain/Logger'
import { type CacheRepository } from '../../../domain/CacheRepository'
export class RedisRepository implements CacheRepository {
	private readonly client: RedisClientType = createClient({
		password: config.redis.password,
		socket: {
			host: config.redis.host,
			port: config.redis.port
		}
	})
	private readonly logger: Logger

	constructor({ logger }: { logger: Logger }) {
		this.logger = logger
		this.client.on('error', error => this.logger.error(`Error del cliente Redis: ${error}`))
	}

	async connect(): Promise<void> {
		try {
			await this.client.connect()
			this.logger.info('Conectado a Redis')
		} catch (error) {
			this.logger.error(`Error al conectar a Redis: ${error}`)
		}
	}

	/**
	 * @method get
	 * @description Retrieves a value from Redis by its key.
	 * @param {string} key - The unique key of the cached item.
	 * @returns {Promise<string | null>} A promise that resolves to the cached string value, or null if not found.
	 */
	async get(key: string): Promise<string | null> {
		try {
			const value = await this.client.get(key)
			return value
		} catch (error) {
			this.logger.error(`Error al obtener valor de Redis: ${error}`)
			return null
		}
	}

	/**
	 * @method set
	 * @description Stores a value in Redis with a specified key and time-to-live (TTL).
	 * @param {string} key - The unique key for the item.
	 * @param {string} value - The string value to store.
	 * @param {number} ex - The time-to-live for the item in seconds.
	 * @returns {Promise<void>} A promise that resolves when the item is successfully stored.
	 */
	async set(key: string, value: string, ex: number): Promise<void> {
		try {
			await this.client.set(key, value, { EX: ex })
		} catch (error) {
			this.logger.error(`Error al establecer valor en Redis: ${error}`)
		}
	}

	/**
	 * @method del
	 * @description Deletes a specific item from Redis by its exact key.
	 * @param {string} key - The exact key of the item to delete.
	 * @returns {Promise<void>} A promise that resolves when the item is successfully deleted.
	 */
	async del(key: string): Promise<void> {
		try {
			await this.client.del(key)
		} catch (error) {
			this.logger.error(`Error al eliminar valor en Redis: ${error}`)
		}
	}

	/**
	 * @method delByPattern
	 * @description Deletes multiple items from Redis that match a given pattern.
	 * This is typically used for wildcard invalidation (e.g., 'prefix:*').
	 * @param {string} pattern - The pattern to match keys for deletion.
	 * @returns {Promise<void>} A promise that resolves when matching items are successfully deleted.
	 */
	async delByPattern(pattern: string): Promise<void> {
		try {
			const keys = await this.client.keys(pattern)
			if (keys.length > 0) {
				await this.client.del(keys)
			}
		} catch (error) {
			this.logger.error(`Error al eliminar valores por patrón en Redis: ${error}`)
		}
	}

	async close(): Promise<void> {
		await this.client.destroy()
	}
}

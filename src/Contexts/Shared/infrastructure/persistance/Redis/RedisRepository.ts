import { createClient, type RedisClientType } from 'redis'
import { config } from '../../config'
import { type Logger } from '../../../domain/Logger'
import { CacheRepository } from '../../../domain/CacheRepository'
export class RedisRepository implements CacheRepository {
    private readonly client: RedisClientType = createClient({
        password: config.redis.password,
        socket: {
            host: config.redis.host,
            port: config.redis.port
        }
    })

    constructor(private readonly logger: Logger) {
        this.client.on('error', (error) => this.logger.error(`'Redis Client Error', ${error}`))
    }

    async connect(): Promise<void> {
        try {
            await this.client.connect()
            this.logger.info('Connected to Redis')
        } catch (error) {
            this.logger.error(`'Error connecting to Redis', ${error}`)
        }
    }

    async get(key: string): Promise<string | null> {
        try {
            const value = await this.client.get(key)
            return value
        } catch (error) {
            this.logger.error(`'Error getting value from Redis', ${error}`)
            return null
        }
    }

    async set(key: string, value: string): Promise<void> {
        try {
            await this.client.set(key, value)
        } catch (error) {
            this.logger.error(`'Error setting value in Redis: ', ${error}`)
        }
    }
    async del(key: string): Promise<void> {
        try {
            await this.client.del(key)
        } catch (error) {
            this.logger.error(`'Error deleting value in Redis: ', ${error}`)
        }
    }

    async close(): Promise<void> {
        await this.client.disconnect();
    }
}
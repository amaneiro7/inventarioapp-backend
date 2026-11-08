import { asClass, asFunction, type AwilixContainer } from 'awilix'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { CacheService } from '../../Contexts/Shared/domain/CacheService'
import { SequelizeConfig } from '../../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { PingLogger } from '../../Contexts/Shared/domain/Monitoring/infra/PingLogger'
// import { InMemoryEventBus } from '../../Contexts/Shared/infrastructure/event/inMemoryEventBus'
import { PingService } from '../../Contexts/Shared/domain/Monitoring/application/PingService'
import { CacheClearController } from '../controllers/shared/cache_clear.controller'
import { CacheClearer } from '../../Contexts/Shared/application/CacheClearer'
import { RabbitMqConnection } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMqConnection'
import { RabbitMQqueueFormatter } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMQqueueFormatter'
import { MongoClientFactory } from '../../Contexts/Shared/infrastructure/persistance/mongo/MongoClientFactory'
import { config } from '../../Contexts/Shared/infrastructure/config'
import { DomainEventFailoverPublisher } from '../../Contexts/Shared/infrastructure/event/DomainEventFailoverPublisher/DomainEventFailoverPublisher'
import { RabbitMQConfigurer } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMQConfigurer'
import { RabbitMqEventBus } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMqEventBus'

export enum SharedDependencies {
	Logger = 'logger',
	Database = 'database',
	CacheRepository = 'cacheRepository',
	Cache = 'cache',
	PingService = 'pingService',
	PingLogger = 'pingLogger',
	EventBus = 'eventBus',
	ClearCacheController = 'clearCacheController',
	CacheClearer = 'cacheClearer',
	RabbitMqConnection = 'rabbitMqConnection',
	RabbitMQqueueFormatter = 'queueNameFormatter',
	RabbitMQConfigurer = 'rabbitMQConfigurer',
	DomainEventFailoverPublisher = 'failoverPublisher'
}

export const register = (container: AwilixContainer) => {
	container.register({
		// Logger
		[SharedDependencies.Logger]: asClass(WinstonLogger).singleton(),
		// Databses
		[SharedDependencies.Database]: asClass(SequelizeConfig).singleton(),
		// Cache
		[SharedDependencies.CacheRepository]: asClass(RedisRepository).singleton(),
		[SharedDependencies.Cache]: asClass(CacheService).singleton(),
		[SharedDependencies.ClearCacheController]: asClass(CacheClearController).singleton(),
		[SharedDependencies.CacheClearer]: asClass(CacheClearer).singleton(),
		// Ping Services
		[SharedDependencies.PingService]: asClass(PingService).singleton(),
		[SharedDependencies.PingLogger]: asClass(PingLogger).singleton(),
		// 1. COnexion de RabbitMQ
		[SharedDependencies.RabbitMqConnection]: asClass(RabbitMqConnection).singleton(),
		// 2. Formateador de nombre de colas
		[SharedDependencies.RabbitMQqueueFormatter]: asFunction(
			() => new RabbitMQqueueFormatter('inventory')
		).singleton(),
		// 3. Cliente de MongoDB y Failover Publisher
		[SharedDependencies.DomainEventFailoverPublisher]: asFunction(() => {
			const client = MongoClientFactory.createClient('shared', { url: config.mongo.url })
			return new DomainEventFailoverPublisher({ client })
		}).singleton(),
		// 4. COnfigruador de Exchanges y Queues
		[SharedDependencies.RabbitMQConfigurer]: asFunction(({ rabbitMqConnection, queueNameFormatter }) => {
			const messageRetryTtl = 5000 // 5 segundos antes de reintentar
			return new RabbitMQConfigurer(rabbitMqConnection, queueNameFormatter, messageRetryTtl)
		}).singleton(),
		[SharedDependencies.EventBus]: asFunction(
			({ failoverPublisher, rabbitMqConnection, queueNameFormatter, logger }) => {
				return new RabbitMqEventBus({
					failoverPublisher,
					rabbitMqConnection,
					exchange: 'inventoryapp-events',
					queueNameFormatter,
					maxRetries: 3,
					logger
				})
			}
		).singleton()
		// [SharedDependencies.EventBus]: asClass(InMemoryEventBus).singleton()
	})
}

import { asClass, asFunction, type AwilixContainer } from 'awilix'
import { WinstonLogger } from '../../Contexts/Shared/infrastructure/WinstonLogger'
import { SequelizeConfig } from '../../Contexts/Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { RedisRepository } from '../../Contexts/Shared/infrastructure/persistance/Redis/RedisRepository'
import { CacheService } from '../../Contexts/Shared/domain/CacheService'
import { PingService } from '../../Contexts/Shared/domain/Monitoring/application/PingService'
import { PingLogger } from '../../Contexts/Shared/domain/Monitoring/infra/PingLogger'
import { RabbitMqConnection } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMqConnection'
import { RabbitMQqueueFormatter } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMQqueueFormatter'
import { MongoClientFactory } from '../../Contexts/Shared/infrastructure/persistance/mongo/MongoClientFactory'
import { DomainEventFailoverPublisher } from '../../Contexts/Shared/infrastructure/event/DomainEventFailoverPublisher/DomainEventFailoverPublisher'
import { RabbitMQConfigurer } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMQConfigurer'
import { RabbitMqEventBus } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMqEventBus'
import { config } from '../../Contexts/Shared/infrastructure/config'
import { SettingsFinder } from '../../Contexts/AppSettings/application/SettingsFinder'
import { SequelizeDeviceMonitoringRepository } from '../../Contexts/Device/DeviceMonitoring/infra/sequelize/SequelizeDeviceMonitoringRepository'
import { DeviceMonitoringService } from '../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringService'
import { SyncDeviceMonitoringStateOnEvents } from '../../Contexts/Device/DeviceMonitoring/application/SyncDeviceMonitoringStateOnEvents'
import { InvalidateDeviceMonitoringCacheOnDeviceChanged } from '../../Contexts/Device/DeviceMonitoring/application/InvalidateDeviceMonitoringCacheOnDeviceChanged'
import { InvalidateDeviceMonitoringCacheOnGeneralInfoChanged } from '../../Contexts/Device/DeviceMonitoring/application/InvalidateDeviceMonitoringCacheOnGeneralInfoChanged'
import { SequelizeLocationMonitoringRepository } from '../../Contexts/Location/LocationMonitoring/infra/sequelize/SequelizeLocationMonitoringRepository'
import { LocationMonitoringService } from '../../Contexts/Location/LocationMonitoring/application/LocationMonitoringService'
import { RestartMonitoringServices } from '../../Contexts/Shared/application/event/RestartMonitoringServices'
import { SequelizeSettingsRepository } from '../../Contexts/AppSettings/infrastructure/persistence/sequelize/SequelizeSettingsRepository'
import { CreateDeviceMonitoringOnDeviceCreated } from '../../Contexts/Device/DeviceMonitoring/application/CreateDeviceMonitoringOnDeviceCreated'
import { SyncLocationMonitoringStateOnEvents } from '../../Contexts/Location/LocationMonitoring/application/SyncLocationMonitoringStateOnEvents'
import { InvalidateLocationMonitoringCacheOnLocationChanged } from '../../Contexts/Location/LocationMonitoring/application/InvalidateLocationMonitoringCacheOnLocationChanged'
import { InvalidateLocationMonitoringCacheOnGeneralInfoChanged } from '../../Contexts/Location/LocationMonitoring/application/InvalidateLocationMonitoringCacheOnGeneralInfoChanged'
import { CreateLocationMonitoringOnLocationCreated } from '../../Contexts/Location/LocationMonitoring/application/CreateLocationMonitoringOnLocationCreated'
import { LocationMonitoringCreator } from '../../Contexts/Location/LocationMonitoring/application/LocationMonitoringCreator'
import { DeviceMonitoringCreator } from '../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringCreator'

export enum MonitoringAppDependencies {
	Logger = 'logger',
	Database = 'database',
	CacheRepository = 'cacheRepository',
	Cache = 'cache',
	PingService = 'pingService',
	PingLogger = 'pingLogger',
	RabbitMqConnection = 'rabbitMqConnection',
	RabbitMQqueueFormatter = 'queueNameFormatter',
	FailoverPublisher = 'failoverPublisher',
	RabbitMQConfigurer = 'rabbitMQConfigurer',
	EventBus = 'eventBus',
	SettingsRepository = 'settingsRepository',
	SettingsFinder = 'settingsFinder',
	DeviceMonitoringRepository = 'deviceMonitoringRepository',
	DeviceMonitoringService = 'deviceMonitoringService',
	SyncDeviceMonitoringStateOnEvents = 'syncDeviceMonitoringStateOnEvents',
	InvalidateDeviceMonitoringCacheOnDeviceChanged = 'invalidateDeviceMonitoringCacheOnDeviceChanged',
	InvalidateDeviceMonitoringCacheOnGeneralInfoChanged = 'invalidateDeviceMonitoringCacheOnGeneralInfoChanged',
	LocationMonitoringRepository = 'locationMonitoringRepository',
	LocationMonitoringService = 'locationMonitoringService',
	RestartMonitoringServices = 'restartMonitoringServices',
	CreateDeviceMonitoringOnDeviceCreated = 'createDeviceMonitoringOnDeviceCreated',
	SyncLocationMonitoringStateOnEvents = 'syncLocationMonitoringStateOnEvents',
	InvalidateLocationMonitoringCacheOnLocationChanged = 'invalidateLocationMonitoringCacheOnLocationChanged',
	InvalidateLocationMonitoringCacheOnGeneralInfoChanged = 'invalidateLocationMonitoringCacheOnGeneralInfoChanged',
	CreateLocationMonitoringOnLocationCreated = 'createLocationMonitoringOnLocationCreated',
	DeviceMonitoringCreator = 'deviceMonitoringCreator',
	LocationMonitoringCreator = 'locationMonitoringCreator'
}

export const registerDependecies = (container: AwilixContainer): void => {
	container.register({
		// Logger
		[MonitoringAppDependencies.Logger]: asClass(WinstonLogger).singleton(),
		// Databses
		[MonitoringAppDependencies.Database]: asClass(SequelizeConfig).singleton(),
		// Cache
		[MonitoringAppDependencies.CacheRepository]: asClass(RedisRepository).singleton(),
		[MonitoringAppDependencies.Cache]: asClass(CacheService).singleton(),
		// Ping Services
		[MonitoringAppDependencies.PingService]: asClass(PingService).singleton(),
		[MonitoringAppDependencies.PingLogger]: asClass(PingLogger).singleton(),
		// 1. COnexion de RabbitMQ
		[MonitoringAppDependencies.RabbitMqConnection]: asClass(RabbitMqConnection).singleton(),
		// 2. Formateador de nombre de colas
		[MonitoringAppDependencies.RabbitMQqueueFormatter]: asFunction(
			() => new RabbitMQqueueFormatter('inventory-monitor')
		).singleton(),
		// 3. Cliente de MongoDB y Failover Publisher
		[MonitoringAppDependencies.FailoverPublisher]: asFunction(() => {
			const client = MongoClientFactory.createClient('monitoring-worker', { url: config.mongo.url })
			return new DomainEventFailoverPublisher({ client })
		}).singleton(),
		// 4. COnfigruador de Exchanges y Queues
		[MonitoringAppDependencies.RabbitMQConfigurer]: asFunction(({ rabbitMqConnection, queueNameFormatter }) => {
			const messageRetryTtl = 5000 // 5 segundos antes de reintentar
			return new RabbitMQConfigurer(rabbitMqConnection, queueNameFormatter, messageRetryTtl)
		}).singleton(),
		[MonitoringAppDependencies.EventBus]: asFunction(
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
		).singleton(),
		// --- AppSettings (solo el finder, no el updater ni controllers) ---
		[MonitoringAppDependencies.SettingsRepository]: asClass(SequelizeSettingsRepository).singleton(),
		[MonitoringAppDependencies.SettingsFinder]: asClass(SettingsFinder).singleton(),
		// --- Device Monitoring ---
		[MonitoringAppDependencies.DeviceMonitoringRepository]: asClass(
			SequelizeDeviceMonitoringRepository
		).singleton(),
		[MonitoringAppDependencies.DeviceMonitoringService]: asClass(DeviceMonitoringService).singleton(),
		[MonitoringAppDependencies.DeviceMonitoringCreator]: asClass(DeviceMonitoringCreator).singleton(),
		// --- Location Monitoring ---
		[MonitoringAppDependencies.LocationMonitoringRepository]: asClass(
			SequelizeLocationMonitoringRepository
		).singleton(),
		[MonitoringAppDependencies.LocationMonitoringCreator]: asClass(LocationMonitoringCreator).singleton(),
		[MonitoringAppDependencies.LocationMonitoringService]: asClass(LocationMonitoringService).singleton(),
		// Subscribers (los mismos que ya existen):
		[MonitoringAppDependencies.RestartMonitoringServices]: asClass(RestartMonitoringServices).singleton(),
		[MonitoringAppDependencies.SyncDeviceMonitoringStateOnEvents]: asClass(
			SyncDeviceMonitoringStateOnEvents
		).singleton(),
		[MonitoringAppDependencies.InvalidateDeviceMonitoringCacheOnDeviceChanged]: asClass(
			InvalidateDeviceMonitoringCacheOnDeviceChanged
		).singleton(),
		[MonitoringAppDependencies.InvalidateDeviceMonitoringCacheOnGeneralInfoChanged]: asClass(
			InvalidateDeviceMonitoringCacheOnGeneralInfoChanged
		).singleton(),
		[MonitoringAppDependencies.CreateDeviceMonitoringOnDeviceCreated]: asClass(
			CreateDeviceMonitoringOnDeviceCreated
		).singleton(),
		[MonitoringAppDependencies.SyncLocationMonitoringStateOnEvents]: asClass(
			SyncLocationMonitoringStateOnEvents
		).singleton(),
		[MonitoringAppDependencies.InvalidateLocationMonitoringCacheOnLocationChanged]: asClass(
			InvalidateLocationMonitoringCacheOnLocationChanged
		).singleton(),
		[MonitoringAppDependencies.InvalidateLocationMonitoringCacheOnGeneralInfoChanged]: asClass(
			InvalidateLocationMonitoringCacheOnGeneralInfoChanged
		).singleton(),
		[MonitoringAppDependencies.CreateLocationMonitoringOnLocationCreated]: asClass(
			CreateLocationMonitoringOnLocationCreated
		).singleton()
	})
}

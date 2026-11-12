import { MonitoringAppDependencies, registerDependecies } from './monitoring-app'
import { DomainEventSubscribers } from '../../Contexts/Shared/infrastructure/event/DomainEventSubscribers'
import type { Logger } from '../../Contexts/Shared/domain/Logger'
import type { Database } from '../../Contexts/Shared/domain/Database'
import type { CacheRepository } from '../../Contexts/Shared/domain/CacheRepository'
import type { RabbitMqConnection } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMqConnection'
import type { RabbitMQConfigurer } from '../../Contexts/Shared/infrastructure/event/rabbitmq/RabbitMQConfigurer'
import type { EventBus } from '../../Contexts/Shared/domain/event/EventBus'
import type { DeviceMonitoringService } from '../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringService'
import type { LocationMonitoringService } from '../../Contexts/Location/LocationMonitoring/application/LocationMonitoringService'
import type { RestartMonitoringServices } from '../../Contexts/Shared/application/event/RestartMonitoringServices'
import { createContainer, type AwilixContainer } from 'awilix'

export class MonitoringApp {
	private readonly container: AwilixContainer
	private readonly logger!: Logger

	constructor() {
		this.container = createContainer({ injectionMode: 'PROXY', strict: true })
		registerDependecies(this.container)
		this.logger = this.container.resolve<Logger>(MonitoringAppDependencies.Logger)
	}

	async start(): Promise<void> {
		try {
			this.logger.info('[MonitoringApp] Iniciando worker de monitoreo...')

			// 1. Conectar DB y caché
			await this.initializeStorage()

			// 2. Conectar RabbitMq y suscribir a eventos
			await this.configureEventBus()

			// 3. Leer config de DB y arrancar loops de ping
			const restarMonitoring = this.container.resolve<RestartMonitoringServices>(
				MonitoringAppDependencies.RestartMonitoringServices
			)
			await restarMonitoring.init()

			this.logger.info('[MonitoringApp] Worker de monitoreo activo.')
		} catch (error) {
			this.logger.error(`[MonitoringApp] Error al iniciar: ${error}`)
			throw error
		}
	}

	async stop(): Promise<void> {
		this.logger.info('Iniciando el proceso de apagado (Graceful Shutdown)...')
		const deviceSvc = this.container.resolve<DeviceMonitoringService>(
			MonitoringAppDependencies.DeviceMonitoringService
		)
		const locationSvc = this.container.resolve<LocationMonitoringService>(
			MonitoringAppDependencies.LocationMonitoringService
		)

		deviceSvc.stopMonitoringLoop()
		locationSvc.stopMonitoringLoop()

		const db = this.container.resolve<Database>(MonitoringAppDependencies.Database)
		const cache = this.container.resolve<CacheRepository>(MonitoringAppDependencies.CacheRepository)
		const rmq = this.container.resolve<RabbitMqConnection>(MonitoringAppDependencies.EventBus)
		await db.close()
		await cache.close()
		await rmq.close()
	}

	private async initializeStorage(): Promise<void> {
		const database = this.container.resolve<Database>(MonitoringAppDependencies.Database)
		const cache = this.container.resolve<CacheRepository>(MonitoringAppDependencies.CacheRepository)

		await database.connect()
		await cache.connect()
	}

	private async configureEventBus(): Promise<void> {
		const rabbitMqConnection = this.container.resolve<RabbitMqConnection>(
			MonitoringAppDependencies.RabbitMqConnection
		)
		const rabbitMQConfigurer = this.container.resolve<RabbitMQConfigurer>(
			MonitoringAppDependencies.RabbitMQConfigurer
		)
		const eventBus = this.container.resolve<EventBus>(MonitoringAppDependencies.EventBus)
		await rabbitMqConnection.connect()
		const subscribers = DomainEventSubscribers.from(this.container)
		await rabbitMQConfigurer.configure({
			exchange: 'inventoryapp-events',
			subscribers: subscribers.items
		})
		await eventBus.addSubscribers(subscribers)
		this.logger.info('[MonitoringApp] RabbitMQ configurado.')
	}
}

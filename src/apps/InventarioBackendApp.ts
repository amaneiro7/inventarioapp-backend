import { Server } from './server'
import { config } from '../Contexts/Shared/infrastructure/config'
import { container } from './di/container'
import { SharedDependencies } from './di/shared.di'
import { AuthDependencies } from './di/auth/auth.di'
import { DeviceDependencies } from './di/device/device.di'
import { type DeviceMonitoringService } from '../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringService'
import { type LocationMonitoringService } from '../Contexts/Location/LocationMonitoring/application/LocationMonitoringService'
import { type PassportManager } from '../Contexts/Auth/infrastructure/passport'
import { type Logger } from '../Contexts/Shared/domain/Logger'
import { type CacheRepository } from '../Contexts/Shared/domain/CacheRepository'
import { type Database } from '../Contexts/Shared/domain/Database'
import { LocationMonitoringDependencies } from './di/location/location-monitoring.di'
import { EventBus } from '../Contexts/Shared/domain/event/EventBus'
import { DomainEventSubscribers } from '../Contexts/Shared/infrastructure/event/DomainEventSubscribers'

export class InventarioBackendApp {
	server?: Server
	private readonly logger: Logger = container.resolve(SharedDependencies.Logger)

	async start(): Promise<void> {
		try {
			const port = config.port
			this.server = new Server({ port, logger: this.logger })

			this.logger.info('Iniciando la inicialización de servicios...')

			// 1. Inicializar la base de datos y la caché primero.
			await this.initializeDBStorage()

			// 2. Inicializar el gestor de autenticación (Passport).
			const passportManager: PassportManager = container.resolve(AuthDependencies.PassportManager)
			await passportManager.initialize()
			this.logger.info('Passport manager inicializado correctamente.')

			await this.configureEventBus()

			// 4. Poner el servidor a escuchar SOLO después de que todo lo demás esté listo.
			await this.server.listen()
		} catch (error) {
			this.logger.error(`Ocurrió un error durante el arranque de la aplicación:, ${error as Error}`)
			// Propagar el error para que el proceso principal pueda detenerse.
			throw error
		}
	}

	get httpServer(): Server['httpServer'] | undefined {
		return this.server?.getHTTPServer()
	}

	async stop(): Promise<void> {
		this.logger.info('Iniciando el proceso de apagado (Graceful Shutdown)...')
		const locationPingService: LocationMonitoringService = container.resolve(
			LocationMonitoringDependencies.LocationMonitoringService
		)
		const devicePingService: DeviceMonitoringService = container.resolve(DeviceDependencies.DeviceMonitoringService)
		const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
		const database: Database = container.resolve(SharedDependencies.Database)
		try {
			// Detener los bucles de monitoreo
			locationPingService.stopMonitoringLoop()
			devicePingService.stopMonitoringLoop()
			this.logger.info('Servicios de monitoreo detenidos.')

			// Cerrar conexiones a la base de datos y caché
			await database.close()
			await cache.close()
			this.logger.info('Conexiones de base de datos y caché cerradas.')

			// Finalmente, detener el servidor HTTP
			if (this.server) {
				await this.server.stop()
				this.logger.info('Servidor HTTP detenido.')
			}

			this.logger.info('La aplicación se ha detenido correctamente.')
		} catch (error) {
			this.logger.error(`Ocurrió un error durante el apagado de la aplicación:, ${error as Error}`)
			throw error
		}
	}

	private async initializeDBStorage(): Promise<void> {
		const database: Database = container.resolve(SharedDependencies.Database)
		const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
		// El método connect() ahora tiene su propia lógica de reintentos y logs.
		await database.connect()
		await cache.connect()
	}

	async configureEventBus() {
		const eventBus: EventBus = container.resolve(SharedDependencies.EventBus)
		await eventBus.addSubscribers(DomainEventSubscribers.from(container))
		this.logger.info('Event Bus configurado correctamente.')
	}
}

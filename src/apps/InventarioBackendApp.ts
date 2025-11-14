import { Server } from './server'
import { config } from '../Contexts/Shared/infrastructure/config'
import { container } from './di/container'
import { SharedDependencies } from './di/shared.di'
import { AuthDependencies } from './di/auth/auth.di'
import { DeviceDependencies } from './di/device/device.di'
import { LocationMonitoringDependencies } from './di/location/location-monitoring.di'
import { AppSettingsDependencies } from './di/app-settings/app-settings.di'
import { AppSettingKeys } from '../Contexts/Shared/AppSettings/domain/entity/SettingsKeys'
import { type DeviceMonitoringService } from '../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringService'
import { type LocationMonitoringService } from '../Contexts/Location/LocationMonitoring/application/LocationMonitoringService'
import { type PassportManager } from '../Contexts/Auth/infrastructure/passport'
import { type Logger } from '../Contexts/Shared/domain/Logger'
import { type CacheRepository } from '../Contexts/Shared/domain/CacheRepository'
import { type Database } from '../Contexts/Shared/domain/Database'
import { type SettingsFinder } from '../Contexts/Shared/AppSettings/application/SettingsFinder'
import { type EventBus } from '../Contexts/Shared/domain/event/EventBus'

export class InventarioBackendApp {
	server?: Server
	private readonly logger: Logger = container.resolve(SharedDependencies.Logger)
	private readonly settingsFinder: SettingsFinder = container.resolve(AppSettingsDependencies.Finder)
	private readonly devicePingService: DeviceMonitoringService = container.resolve(
		DeviceDependencies.DeviceMonitoringService
	)
	private readonly locationPingService: LocationMonitoringService = container.resolve(
		LocationMonitoringDependencies.LocationMonitoringService
	)
	private readonly eventBus: EventBus = container.resolve(SharedDependencies.EventBus)

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

			// 3. Poner el servidor a escuchar SOLO después de que todo lo demás esté listo.
			await this.server.listen()

			// 4. Iniciar los bucles de monitoreo.
			await this.startMonitoringServices()

			// 5. Suscribirse a eventos de cambio de configuración.
			this.subscribeToSettingsChanges()
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
		try {
			// Detener los bucles de monitoreo
			this.locationPingService.stopMonitoringLoop()
			this.devicePingService.stopMonitoringLoop()
			this.logger.info('Servicios de monitoreo detenidos.')

			// Cerrar conexiones a la base de datos y caché
			const cache: CacheRepository = container.resolve(SharedDependencies.CacheRepository)
			const database: Database = container.resolve(SharedDependencies.Database)
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

	private async startMonitoringServices(): Promise<void> {
		const isLocationMonitoringEnabled = await this.isSettingEnabled(
			AppSettingKeys.LOCATION_MONITORING.ENABLED,
			false // default value
		)
		if (isLocationMonitoringEnabled) {
			this.locationPingService.startMonitoringLoop({ showLogs: false })
			this.logger.info('El servicio de monitoreo de ubicaciones está activo.')
		} else {
			this.logger.info('El servicio de monitoreo de ubicaciones está inactivo.')
		}

		const isDeviceMonitoringEnabled = await this.isSettingEnabled(
			AppSettingKeys.DEVICE_MONITORING.ENABLED,
			false // default value
		)
		if (isDeviceMonitoringEnabled) {
			this.devicePingService.startMonitoringLoop({ showLogs: false })
			this.logger.info('El servicio de monitoreo de dispositivos está activo.')
		} else {
			this.logger.info('El servicio de monitoreo de dispositivos está inactivo.')
		}
	}

	private async isSettingEnabled(key: string, fallback: boolean): Promise<boolean> {
		try {
			return await this.settingsFinder.findAsBoolean({ key, fallback })
		} catch (error) {
			this.logger.info(`No se pudo obtener la configuración para "${key}". Usando valor por defecto: ${fallback}`)
			this.logger.error(`Error al obtener la configuración "${key}": ${error as Error}`)
			return fallback
		}
	}

	private subscribeToSettingsChanges(): void {
		this.eventBus.subscribe('setting:updated', async (payload: { key: string; value: string }) => {
			const { key, value } = payload
			const isEnabled = value.toLowerCase() === 'true'

			if (key === AppSettingKeys.LOCATION_MONITORING.ENABLED) {
				this.logger.info(
					`[EVENT] Cambio de configuración para ${key}. Nuevo estado: ${isEnabled ? 'Activado' : 'Desactivado'}.`
				)
				if (isEnabled) {
					this.locationPingService.startMonitoringLoop({ showLogs: false })
				} else {
					this.locationPingService.stopMonitoringLoop()
				}
			}

			if (key === AppSettingKeys.DEVICE_MONITORING.ENABLED) {
				this.logger.info(
					`[EVENT] Cambio de configuración para ${key}. Nuevo estado: ${isEnabled ? 'Activado' : 'Desactivado'}.`
				)
				if (isEnabled) {
					this.devicePingService.startMonitoringLoop({ showLogs: false })
				} else {
					this.devicePingService.stopMonitoringLoop()
				}
			}
		})
		this.logger.info('Suscrito a los cambios de configuración para los servicios de monitoreo.')
	}
}

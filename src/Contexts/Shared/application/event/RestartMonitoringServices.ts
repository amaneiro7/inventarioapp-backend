import { AppSettingsUpdaterDomainEvent } from '../../../AppSettings/domain/entity/AppSettingsUpdaterDomainEvent'
import { AppSettingKeys } from '../../../AppSettings/domain/entity/SettingsKeys'
import { type DeviceMonitoringService } from '../../../Device/DeviceMonitoring/application/DeviceMonitoringService'
import { type SettingsFinder } from '../../../AppSettings/application/SettingsFinder'
import { type LocationMonitoringService } from '../../../Location/LocationMonitoring/application/LocationMonitoringService'
import { type DomainEventSubscriber } from '../../domain/event/DomainEventSubscriber'
import { type Logger } from '../../domain/Logger'
import { type DomainEventClass } from '../../domain/event/DomainEvent'

export class RestartMonitoringServices implements DomainEventSubscriber<AppSettingsUpdaterDomainEvent> {
	private readonly deviceMonitoringService: DeviceMonitoringService
	private readonly locationMonitoringService: LocationMonitoringService
	private readonly logger: Logger
	private readonly settingsFinder: SettingsFinder
	// Definimos explícitamente las claves que nos interesan
	private readonly relevantKeys: Set<string> = new Set([
		AppSettingKeys.LOCATION_MONITORING.ENABLED,
		AppSettingKeys.DEVICE_MONITORING.ENABLED
	])

	constructor({
		deviceMonitoringService,
		locationMonitoringService,
		logger,
		settingsFinder
	}: {
		deviceMonitoringService: DeviceMonitoringService
		locationMonitoringService: LocationMonitoringService
		logger: Logger
		settingsFinder: SettingsFinder
	}) {
		this.deviceMonitoringService = deviceMonitoringService
		this.locationMonitoringService = locationMonitoringService
		this.logger = logger
		this.settingsFinder = settingsFinder

		// Inicializamos el estado de los servicios al instanciar el suscriptor.
		// Usamos un IIFE para poder usar async en el constructor.
		;(async () => {
			await this.initializeServicesState()
		})().catch(error => {
			this.logger.error(`[RestartMonitoringServices] Error during initial state setup: ${error as string}`)
		})
	}

	// --- Domain Event Handlers ---

	async on(event: AppSettingsUpdaterDomainEvent): Promise<void> {
		const { key, value } = event

		// Si la clave del evento no es una de las que nos interesan, salimos inmediatamente.
		if (!this.relevantKeys.has(key)) {
			return
		}

		this.logger.info(`[RestartMonitoringServices] Relevant setting changed: ${key}. Processing...`)

		const isEnabled = value.toLowerCase() === 'true'

		switch (key) {
			case AppSettingKeys.LOCATION_MONITORING.ENABLED:
				return this.handleLocationMonitoring(key, isEnabled)
			case AppSettingKeys.DEVICE_MONITORING.ENABLED:
				return this.handleDeviceMonitoring(key, isEnabled)
		}
	}

	// Le decimos al Event Bus que solo queremos escuchar este evento
	subscribedTo(): DomainEventClass[] {
		return [AppSettingsUpdaterDomainEvent]
	}

	// --- Private Logic ---

	/**
	 * @description Comprueba el estado inicial de la configuración y arranca los servicios si es necesario.
	 * Se ejecuta una sola vez cuando la aplicación se inicia.
	 */
	private async initializeServicesState(): Promise<void> {
		this.logger.info('[RestartMonitoringServices] Initializing monitoring services state...')

		const isLocationEnabled = await this.isSettingEnabled(AppSettingKeys.LOCATION_MONITORING.ENABLED, false)
		this.handleLocationMonitoring(AppSettingKeys.LOCATION_MONITORING.ENABLED, isLocationEnabled)

		const isDeviceEnabled = await this.isSettingEnabled(AppSettingKeys.DEVICE_MONITORING.ENABLED, false)
		this.handleDeviceMonitoring(AppSettingKeys.DEVICE_MONITORING.ENABLED, isDeviceEnabled)
	}

	private async isSettingEnabled(key: string, fallback: boolean): Promise<boolean> {
		try {
			return await this.settingsFinder.findAsBoolean({ key, fallback })
		} catch (error) {
			this.logger.error(`[RestartMonitoringServices] Error fetching setting "${key}": ${error as string}`)
			return fallback
		}
	}

	private handleLocationMonitoring(key: string, isEnabled: boolean): void {
		this.logger.info(`[MonitoringServices] Setting: ${key} | State: ${isEnabled ? 'ACTIVE' : 'INACTIVE'}.`)
		if (isEnabled) {
			void this.locationMonitoringService.startMonitoringLoop({ showLogs: false })
		} else {
			this.locationMonitoringService.stopMonitoringLoop()
		}
	}

	private handleDeviceMonitoring(key: string, isEnabled: boolean): void {
		this.logger.info(`[MonitoringServices] Setting: ${key} | State: ${isEnabled ? 'ACTIVE' : 'INACTIVE'}.`)
		if (isEnabled) {
			void this.deviceMonitoringService.startMonitoringLoop({ showLogs: false })
		} else {
			this.deviceMonitoringService.stopMonitoringLoop()
		}
	}
}

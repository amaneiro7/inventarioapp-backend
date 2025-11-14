import { DeviceMonitoringService } from '../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringService'
import { LocationMonitoringService } from '../Contexts/Location/LocationMonitoring/application/LocationMonitoringService'
import { AppSettingsDomainEvent } from '../Contexts/Shared/AppSettings/domain/entity/AppSettingsDomainEvent'
import { AppSettingKeys } from '../Contexts/Shared/AppSettings/domain/entity/SettingsKeys'
import { DomainEventSubscriber } from '../Contexts/Shared/domain/event/DomainEventSubscriber'
import { Logger } from '../Contexts/Shared/domain/Logger'

export class RestartMonitoringServices implements DomainEventSubscriber<AppSettingsDomainEvent> {
	private readonly deviceService: DeviceMonitoringService
	private readonly locationService: LocationMonitoringService
	private readonly logger: Logger

	constructor(deviceService: DeviceMonitoringService, locationService: LocationMonitoringService, logger: Logger) {
		this.deviceService = deviceService
		this.locationService = locationService
		this.logger = logger
	}

	async on(event: AppSettingsDomainEvent): Promise<void> {
		const { key, value } = event
		const isEnabled = value.toLowerCase() === 'true'

		if (key === AppSettingKeys.LOCATION_MONITORING.ENABLED) {
			this.handleLocationMonitoring(key, isEnabled)
		}
		if (key === AppSettingKeys.DEVICE_MONITORING.ENABLED) {
			this.handleDeviceMonitoring(key, isEnabled)
		}
	}

	private handleLocationMonitoring(key: string, isEnabled: boolean): void {
		this.logger.info(
			`[EVENT SUBSCRIBER] Cambio de ${key}. Nuevo estado: ${isEnabled ? 'Activado' : 'Desactivado'}.`
		)
		if (isEnabled) {
			this.locationService.startMonitoringLoop({ showLogs: false })
		} else {
			this.locationService.stopMonitoringLoop()
		}
	}

	private handleDeviceMonitoring(key: string, isEnabled: boolean): void {
		this.logger.info(
			`[EVENT SUBSCRIBER] Cambio de ${key}. Nuevo estado: ${isEnabled ? 'Activado' : 'Desactivado'}.`
		)
		if (isEnabled) {
			this.deviceService.startMonitoringLoop({ showLogs: false })
		} else {
			this.deviceService.stopMonitoringLoop()
		}
	}

	// Le decimos al Event Bus que solo queremos escuchar este evento
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	subscribedTo(): any[] {
		return [AppSettingsDomainEvent]
	}
}

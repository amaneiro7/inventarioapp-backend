import { MonitoringService } from '../../../Shared/domain/Monitoring/application/MonitoringService'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { convertSubnetToHostIp } from '../../../Shared/infrastructure/utils/convertSubnetToHostIp'
import { AppSettingDefaults, AppSettingKeys } from '../../../AppSettings/domain/entity/SettingsKeys'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'

import { type Logger } from '../../../Shared/domain/Logger'
import { type MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type PingLogger } from '../../../Shared/domain/Monitoring/infra/PingLogger'
import { type LocationMonitoringDto, type LocationMonitoringPrimitives } from '../domain/entity/LocationMonitoring.dto'
import {
	MonitoringConfigDefaults,
	MonitoringConfigKeys
} from '../../../Shared/domain/Monitoring/domain/entity/MonitoringConfig'
import { type IPingService } from '../../../Shared/domain/Monitoring/infra/IPingService'

/**
 * Service responsible for monitoring locations. Extends the generic MonitoringService.
 * Handles pinging locations, updating their status, and logging monitoring activities.
 */
export class LocationMonitoringService extends MonitoringService<
	LocationMonitoringDto,
	LocationMonitoringPrimitives,
	LocationMonitoring,
	LocationMonitoringRepository
> {
	protected readonly locationMonitoringRepository: LocationMonitoringRepository
	protected readonly pingService: IPingService
	protected readonly logger: Logger
	protected readonly pingLogger: PingLogger

	constructor({
		locationMonitoringRepository,
		logger,
		pingLogger,
		pingService
	}: {
		locationMonitoringRepository: LocationMonitoringRepository
		pingService: IPingService
		logger: Logger
		pingLogger: PingLogger
	}) {
		super(locationMonitoringRepository, pingService, logger, pingLogger)
		this.locationMonitoringRepository = locationMonitoringRepository
		this.pingService = pingService
		this.logger = logger
		this.pingLogger = pingLogger
	}

	protected getMonitoringConfigKeys(): MonitoringConfigKeys {
		return {
			concurrencyLimit: AppSettingKeys.LOCATION_MONITORING.CONCURRENCY_LIMIT,
			idleTimeMs: AppSettingKeys.LOCATION_MONITORING.IDLE_TIME_MINUTES,
			startDayOfWeek: AppSettingKeys.LOCATION_MONITORING.START_DAY_OF_WEEK,
			endDayOfWeek: AppSettingKeys.LOCATION_MONITORING.END_DAY_OF_WEEK,
			startHour: AppSettingKeys.LOCATION_MONITORING.START_HOUR,
			endHour: AppSettingKeys.LOCATION_MONITORING.END_HOUR,
			disableTimeChecks: AppSettingKeys.LOCATION_MONITORING.DISABLE_TIME_CHECKS
		}
	}

	protected getMonitoringConfigDefaults(): MonitoringConfigDefaults {
		return {
			concurrencyLimit: AppSettingDefaults.LOCATION_MONITORING.CONCURRENCY_LIMIT,
			idleTimeMs: AppSettingDefaults.LOCATION_MONITORING.IDLE_TIME_MINUTES,
			startDayOfWeek: AppSettingDefaults.LOCATION_MONITORING.START_DAY_OF_WEEK,
			endDayOfWeek: AppSettingDefaults.LOCATION_MONITORING.END_DAY_OF_WEEK,
			startHour: AppSettingDefaults.LOCATION_MONITORING.START_HOUR,
			endHour: AppSettingDefaults.LOCATION_MONITORING.END_HOUR,
			disableTimeChecks: AppSettingDefaults.LOCATION_MONITORING.DISABLE_TIME_CHECKS
		}
	}

	/**
	 * Returns the name of the monitoring service.
	 * @returns {string} The monitoring name, which is 'Location'.
	 */
	protected getMonitoringName(): string {
		return 'Location'
	}

	/**
	 * Retrieves the IP address from a LocationMonitoringDto.
	 * Converts the subnet to a host IP if available.
	 * @param {LocationMonitoringDto} item - The location monitoring DTO.
	 * @returns {Promise<string | null | undefined>} The IP address or null/undefined if not available.
	 */
	protected async getIpAddress(item: LocationMonitoringDto): Promise<string | null | undefined> {
		const subnet = item?.location?.subnet
		return await convertSubnetToHostIp(subnet)
	}

	/**
	 * Retrieves the expected hostname. Not applicable for locations.
	 * @returns {Promise<string | null | undefined>} Always returns undefined.
	 */
	protected async getExpectedHostname(): Promise<string | null | undefined> {
		// Hostname is not applicable for locations
		return undefined
	}

	/**
	 * Retrieves the monitoring ID from a LocationMonitoringDto.
	 * @param {LocationMonitoringDto} item - The location monitoring DTO.
	 * @returns {Primitives<MonitoringId>} The monitoring ID.
	 */
	protected getMonitoringId(item: LocationMonitoringDto): Primitives<MonitoringId> {
		return item.id
	}

	/**
	 * Creates a LocationMonitoring entity from a DTO.
	 * @param {LocationMonitoringDto} item - The location monitoring DTO.
	 * @returns {LocationMonitoring} A new LocationMonitoring entity.
	 */
	protected createMonitoringEntity(item: LocationMonitoringDto): LocationMonitoring {
		return LocationMonitoring.fromPrimitives(item)
	}

	/**
	 * Converts a LocationMonitoring entity to its primitive payload representation.
	 * @param {LocationMonitoring} item - The location monitoring entity.
	 * @returns {LocationMonitoringPrimitives} The primitive payload.
	 */
	protected createMonitoringPayload(item: LocationMonitoring): LocationMonitoringPrimitives {
		return item.toPrimitive()
	}

	/**
	 * Validates the ping result. No hostname validation for locations.
	 * @returns {boolean} Always returns true.
	 */
	protected validatePingResult(): boolean {
		// No hostname validation for locations, always return true

		return true
	}

	/**
	 * Updates the status and timestamps of a LocationMonitoring entity.
	 * @param {LocationMonitoring} entity - The entity to update.
	 * @param {MonitoringStatuses} status - The new monitoring status.
	 * @param {Date | null} lastSuccess - The timestamp of the last successful scan.
	 * @param {Date | null} lastFailed - The timestamp of the last failed scan.
	 * @param {Date | null} lastScan - The timestamp of the last scan.
	 */
	protected updateMonitoringEntityStatus(
		entity: LocationMonitoring,
		status: MonitoringStatuses,
		lastSuccess: Date | null,
		lastFailed: Date | null,
		lastScan: Date | null
	): void {
		entity.updateStatus(status)
		entity.updateLastSuccess(lastSuccess)
		entity.updateLastFailed(lastFailed)
		entity.updateLastScan(lastScan)
	}
}

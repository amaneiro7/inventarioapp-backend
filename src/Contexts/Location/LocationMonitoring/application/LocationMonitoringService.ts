import { config } from '../../../Shared/infrastructure/config'
import { MonitoringService } from '../../../Shared/domain/Monitoring/application/MonitoringService'
import { LocationMonitoring } from '../domain/entity/LocationMonitoring'
import { MonitoringStatuses } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { convertSubnetToHostIp } from '../../../Shared/infrastructure/utils/convertSubnetToHostIp'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoringRepository } from '../domain/repository/LocationMonitoringRepository'
import { type PingService } from '../../../Shared/domain/Monitoring/application/PingService'
import { type Logger } from '../../../Shared/domain/Logger'
import { type LocationMonitoringDto, type LocationMonitoringPrimitives } from '../domain/entity/LocationMonitoring.dto'
import { type MonitoringId } from '../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { type PingLogger } from '../../../Shared/domain/Monitoring/infra/PingLogger'
import { type MonitoringServiceConfig } from '../../../Shared/domain/Monitoring/domain/entity/MonitoringConfig'

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
	protected readonly pingService: PingService
	protected readonly logger: Logger
	protected readonly pingLogger: PingLogger

	/**
	 * Constructs a new LocationMonitoringService instance.
	 * @param {{ locationMonitoringRepository: LocationMonitoringRepository; pingService: PingService; logger: Logger; pingLogger: PingLogger }} params - The constructor parameters.
	 * @param {LocationMonitoringRepository} params.locationMonitoringRepository - The repository for location monitoring data.
	 * @param {PingService} params.pingService - The service used to perform network pings.
	 * @param {Logger} params.logger - The logger instance for general logging.
	 * @param {PingLogger} params.pingLogger - The logger instance specifically for ping results.
	 */
	constructor({
		locationMonitoringRepository,
		logger,
		pingLogger,
		pingService
	}: {
		locationMonitoringRepository: LocationMonitoringRepository
		pingService: PingService
		logger: Logger
		pingLogger: PingLogger
	}) {
		super(locationMonitoringRepository, pingService, logger, pingLogger)
		this.locationMonitoringRepository = locationMonitoringRepository
		this.pingService = pingService
		this.logger = logger
		this.pingLogger = pingLogger
	}

	/**
	 * Configuration for location monitoring, loaded from application config.
	 */ protected monitoringConfig: MonitoringServiceConfig = {
		concurrencyLimit: config.monitoring.location.locationMonitoringConcurrencyLimit,
		startDayOfWeek: config.monitoring.location.locationMonitoringStartDayOfWeek,
		endDayOfWeek: config.monitoring.location.locationMonitoringEndDayOfWeek,
		startHour: config.monitoring.location.locationMonitoringStartHour,
		endHour: config.monitoring.location.locationMonitoringEndHour,
		idleTimeMs: config.monitoring.location.locationMonitoringIdleTimeMs,
		disableTimeChecks: config.monitoring.location.isLocationMonitoringDisableTimeChecks
	}

	/**
	 * Returns the name of the monitoring service.
	 * @returns {string} The monitoring name, which is 'Location'.
	 */ protected getMonitoringName(): string {
		return 'Location'
	}

	/**
	 * Retrieves the IP address from a LocationMonitoringDto.
	 * Converts the subnet to a host IP if available.
	 * @param {LocationMonitoringDto} item - The location monitoring DTO.
	 * @returns {Promise<string | null | undefined>} The IP address or null/undefined if not available.
	 */ protected async getIpAddress(item: LocationMonitoringDto): Promise<string | null | undefined> {
		const subnet = item?.location?.subnet
		return await convertSubnetToHostIp(subnet)
	}

	/**
	 * Retrieves the expected hostname. Not applicable for locations.
	 * @returns {Promise<string | null | undefined>} Always returns undefined.
	 */ protected async getExpectedHostname(): Promise<string | null | undefined> {
		// Hostname is not applicable for locations
		return undefined
	}

	/**
	 * Retrieves the monitoring ID from a LocationMonitoringDto.
	 * @param {LocationMonitoringDto} item - The location monitoring DTO.
	 * @returns {Primitives<MonitoringId>} The monitoring ID.
	 */ protected getMonitoringId(item: LocationMonitoringDto): Primitives<MonitoringId> {
		return item.id
	}

	/**
	 * Creates a LocationMonitoring entity from a DTO.
	 * @param {LocationMonitoringDto} item - The location monitoring DTO.
	 * @returns {LocationMonitoring} A new LocationMonitoring entity.
	 */ protected createMonitoringEntity(item: LocationMonitoringDto): LocationMonitoring {
		return LocationMonitoring.fromPrimitives(item)
	}

	/**
	 * Converts a LocationMonitoring entity to its primitive payload representation.
	 * @param {LocationMonitoring} item - The location monitoring entity.
	 * @returns {LocationMonitoringPrimitives} The primitive payload.
	 */ protected createMonitoringPayload(item: LocationMonitoring): LocationMonitoringPrimitives {
		return item.toPrimitive()
	}

	/**
	 * Validates the ping result. No hostname validation for locations.
	 * @returns {boolean} Always returns true.
	 */ protected validatePingResult(): boolean {
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
	 */ protected updateMonitoringEntityStatus(
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

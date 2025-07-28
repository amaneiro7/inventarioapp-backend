import { Monitoring } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring'
import { MonitoringId } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { LocationId } from '../../../Location/domain/LocationId'
import { MonitoringStatus } from '../../../../Shared/domain/Monitoring/domain/value-object//MonitoringStatus'
import { MonitoringLastScan } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastScan'
import { MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastSuccess'
import { MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastFailed'
import {
	type LocationMonitoringDto,
	type LocationMonitoringParams,
	type LocationMonitoringPrimitives
} from './LocationMonitoring.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

/**
 * Represents a Location Monitoring domain entity.
 * Extends the base Monitoring entity with location-specific properties.
 */
export class LocationMonitoring extends Monitoring {
	/**
	 * Constructs a LocationMonitoring instance.
	 * @param {MonitoringId} id - The unique identifier for the monitoring entry.
	 * @param {LocationId} locationId - The ID of the location being monitored.
	 * @param {MonitoringStatus} status - The current monitoring status.
	 * @param {MonitoringLastScan} lastScan - The timestamp of the last scan.
	 * @param {MonitoringLastSuccess} lastSuccess - The timestamp of the last successful scan.
	 * @param {MonitoringLastFailed} lastFailed - The timestamp of the last failed scan.
	 */
	constructor(
		id: MonitoringId,
		private readonly locationId: LocationId,
		status: MonitoringStatus,
		lastScan: MonitoringLastScan,
		lastSuccess: MonitoringLastSuccess,
		lastFailed: MonitoringLastFailed
	) {
		super(id, status, lastScan, lastSuccess, lastFailed)
	}

	/**
	 * Creates a new LocationMonitoring instance with a randomly generated ID.
	 * @param {LocationMonitoringParams} params - The parameters for creating the monitoring entry.
	 * @returns {LocationMonitoring} A new LocationMonitoring instance.
	 */
	static create(params: LocationMonitoringParams): LocationMonitoring {
		const id = MonitoringId.random().value
		return new LocationMonitoring(
			new MonitoringId(id),
			new LocationId(params.locationId),
			new MonitoringStatus(params.status),
			new MonitoringLastScan(params.lastScan),
			new MonitoringLastSuccess(params.lastSuccess),
			new MonitoringLastFailed(params.lastFailed)
		)
	}

	/**
	 * Creates a LocationMonitoring instance from primitive data.
	 * @param {LocationMonitoringDto} primitives - The primitive data for the monitoring entry.
	 * @returns {LocationMonitoring} A new LocationMonitoring instance.
	 */
	static fromPrimitives(primitives: LocationMonitoringDto): LocationMonitoring {
		return new LocationMonitoring(
			new MonitoringId(primitives.id),
			new LocationId(primitives.locationId),
			new MonitoringStatus(primitives.status),
			new MonitoringLastScan(primitives.lastScan),
			new MonitoringLastSuccess(primitives.lastSuccess),
			new MonitoringLastFailed(primitives.lastFailed)
		)
	}

	/**
	 * Converts the LocationMonitoring instance to its primitive representation.
	 * @returns {LocationMonitoringPrimitives} The primitive representation of the monitoring entry.
	 */
	toPrimitive(): LocationMonitoringPrimitives {
		return {
			id: this.idValue,
			locationId: this.locationValue,
			status: this.statusValue,
			lastScan: this.lastScanValue,
			lastSuccess: this.lastSuccessValue,
			lastFailed: this.lastFailedValue
		}
	}

	/**
	 * Gets the primitive value of the location ID.
	 * @returns {Primitives<LocationId>} The location ID value.
	 */
	get locationValue(): Primitives<LocationId> {
		return this.locationId.value
	}
}

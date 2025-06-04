import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { LocationId } from '../../../Location/domain/LocationId'
import { LocationMonitoringId } from '../valueObject/LocationMonitoringId'
import { LocationMonitoringLastFailed } from '../valueObject/LocationMonitoringLastFailed'
import { LocationMonitoringLastScan } from '../valueObject/LocationMonitoringLastScan'
import { LocationMonitoringLastSuccess } from '../valueObject/LocationMonitoringLastSuccess'
import { LocationMonitoringStatus } from '../valueObject/LocationMonitoringStatus'
import {
	type LocationMonitoringDto,
	type LocationMonitoringParams,
	type LocationMonitoringPrimitives
} from './LocationMonitoring.dto'

export class LocationMonitoring {
	constructor(
		private readonly id: LocationMonitoringId,
		private readonly locationId: LocationId,
		private status: LocationMonitoringStatus,
		private lastScan: LocationMonitoringLastScan,
		private lastSuccess: LocationMonitoringLastSuccess,
		private lastFailed: LocationMonitoringLastFailed
	) {}

	static create(params: LocationMonitoringParams): LocationMonitoring {
		const id = LocationMonitoringId.random().value
		return new LocationMonitoring(
			new LocationMonitoringId(id),
			new LocationId(params.locationId),
			new LocationMonitoringStatus(params.status),
			new LocationMonitoringLastScan(params.lastScan),
			new LocationMonitoringLastSuccess(params.lastSuccess),
			new LocationMonitoringLastFailed(params.lastFailed)
		)
	}
	static fromPrimitives(primitives: LocationMonitoringDto): LocationMonitoring {
		return new LocationMonitoring(
			new LocationMonitoringId(primitives.id),
			new LocationId(primitives.locationId),
			new LocationMonitoringStatus(primitives.status),
			new LocationMonitoringLastScan(primitives.lastScan),
			new LocationMonitoringLastSuccess(primitives.lastSuccess),
			new LocationMonitoringLastFailed(primitives.lastFailed)
		)
	}

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

	get idValue(): Primitives<LocationMonitoringId> {
		return this.id.value
	}
	get locationValue(): Primitives<LocationId> {
		return this.locationId.value
	}
	get statusValue(): Primitives<LocationMonitoringStatus> {
		return this.status.value
	}
	get lastScanValue(): Primitives<LocationMonitoringLastScan> {
		return this.lastScan.value
	}
	get lastSuccessValue(): Primitives<LocationMonitoringLastSuccess> {
		return this.lastSuccess.value
	}
	get lastFailedValue(): Primitives<LocationMonitoringLastFailed> {
		return this.lastFailed.value
	}

	updateStatus(newStatus: Primitives<LocationMonitoringStatus>): void {
		this.status = new LocationMonitoringStatus(newStatus)
	}
	updateLastSuccess(newLastSuccess: Primitives<LocationMonitoringLastSuccess>): void {
		this.lastSuccess = new LocationMonitoringLastSuccess(newLastSuccess)
	}
	updateLastScan(newLastScan: Primitives<LocationMonitoringLastScan>): void {
		this.lastScan = new LocationMonitoringLastScan(newLastScan)
	}
	updateLastFailed(newLastFailed: Primitives<LocationMonitoringLastFailed>): void {
		this.lastFailed = new LocationMonitoringLastFailed(newLastFailed)
	}
}

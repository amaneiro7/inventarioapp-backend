import { Monitoring } from '../../../../Shared/domain/Monitoring/Monitoring'
import { MonitoringId } from '../../../../Shared/domain/Monitoring/MonitoringId'
import { LocationId } from '../../../Location/domain/LocationId'
import { MonitoringStatus } from '../../../../Shared/domain/Monitoring/MonitoringStatus'
import { MonitoringLastScan } from '../../../../Shared/domain/Monitoring/MonitoringLastScan'
import { MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/MonitoringLastSuccess'
import { MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/MonitoringLastFailed'
import {
	type LocationMonitoringDto,
	type LocationMonitoringParams,
	type LocationMonitoringPrimitives
} from './LocationMonitoring.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class LocationMonitoring extends Monitoring {
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

	get locationValue(): Primitives<LocationId> {
		return this.locationId.value
	}
}

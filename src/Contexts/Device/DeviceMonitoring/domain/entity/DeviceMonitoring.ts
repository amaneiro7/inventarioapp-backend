import { Monitoring } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring'
import { MonitoringId } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringId'
import { DeviceId } from '../../../Device/domain/DeviceId'
import { MonitoringStatus } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { MonitoringLastSuccess } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastSuccess'
import { MonitoringLastFailed } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastFailed'
import { MonitoringLastScan } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringLastScan'

import {
	type DeviceMonitoringDto,
	type DeviceMonitoringParams,
	type DeviceMonitoringPrimitives
} from './DeviceMonitoring.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

export class DeviceMonitoring extends Monitoring {
	constructor(
		id: MonitoringId,
		private readonly deviceId: DeviceId,
		status: MonitoringStatus,
		lastScan: MonitoringLastScan,
		lastSuccess: MonitoringLastSuccess,
		lastFailed: MonitoringLastFailed
	) {
		super(id, status, lastScan, lastSuccess, lastFailed)
	}

	static create(params: DeviceMonitoringParams): DeviceMonitoring {
		const id = MonitoringId.random().value
		return new DeviceMonitoring(
			new MonitoringId(id),
			new DeviceId(params.deviceId),
			new MonitoringStatus(params.status),
			new MonitoringLastScan(params.lastScan),
			new MonitoringLastSuccess(params.lastSuccess),
			new MonitoringLastFailed(params.lastFailed)
		)
	}
	static fromPrimitives(primitives: DeviceMonitoringDto): DeviceMonitoring {
		return new DeviceMonitoring(
			new MonitoringId(primitives.id),
			new DeviceId(primitives.deviceId),
			new MonitoringStatus(primitives.status),
			new MonitoringLastScan(primitives.lastScan),
			new MonitoringLastSuccess(primitives.lastSuccess),
			new MonitoringLastFailed(primitives.lastFailed)
		)
	}

	toPrimitive(): DeviceMonitoringPrimitives {
		return {
			id: this.idValue,
			deviceId: this.deviceValue,
			status: this.statusValue,
			lastScan: this.lastScanValue,
			lastSuccess: this.lastSuccessValue,
			lastFailed: this.lastFailedValue
		}
	}

	get deviceValue(): Primitives<DeviceId> {
		return this.deviceId.value
	}
}

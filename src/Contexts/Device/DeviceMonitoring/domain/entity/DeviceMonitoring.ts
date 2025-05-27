import { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { DeviceId } from '../../../Device/domain/DeviceId'
import { DeviceMonitoringId } from '../valueObject/DeviceMonitoringId'
import { DeviceMonitoringLastFailed } from '../valueObject/DeviceMonitoringLastFailed'
import { DeviceMonitoringLastScan } from '../valueObject/DeviceMonitoringLastScan'
import { DeviceMonitoringLastSuccess } from '../valueObject/DeviceMonitoringLastSuccess'
import { DeviceMonitoringStatus } from '../valueObject/DeviceMonitoringStatus'
import {
	type DeviceMonitoringDto,
	type DeviceMonitoringParams,
	type DeviceMonitoringPrimitives
} from './DeviceMonitoring.dto'

export class DeviceMonitoring {
	constructor(
		private readonly id: DeviceMonitoringId,
		private readonly deviceId: DeviceId,
		private status: DeviceMonitoringStatus,
		private lastScan: DeviceMonitoringLastScan,
		private lastSuccess: DeviceMonitoringLastSuccess,
		private lastFailed: DeviceMonitoringLastFailed
	) {}

	static create(params: DeviceMonitoringParams): DeviceMonitoring {
		const id = DeviceMonitoringId.random().value
		return new DeviceMonitoring(
			new DeviceMonitoringId(id),
			new DeviceId(params.deviceId),
			new DeviceMonitoringStatus(params.status),
			new DeviceMonitoringLastScan(params.lastScan),
			new DeviceMonitoringLastSuccess(params.lastSuccess),
			new DeviceMonitoringLastFailed(params.lastFailed)
		)
	}
	static fromPrimitives(primitives: DeviceMonitoringDto): DeviceMonitoring {
		return new DeviceMonitoring(
			new DeviceMonitoringId(primitives.id),
			new DeviceId(primitives.deviceId),
			new DeviceMonitoringStatus(primitives.status),
			new DeviceMonitoringLastScan(primitives.lastScan),
			new DeviceMonitoringLastSuccess(primitives.lastSuccess),
			new DeviceMonitoringLastFailed(primitives.lastFailed)
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

	get idValue(): Primitives<DeviceMonitoringId> {
		return this.id.value
	}
	get deviceValue(): Primitives<DeviceId> {
		return this.deviceId.value
	}
	get statusValue(): Primitives<DeviceMonitoringStatus> {
		return this.status.value
	}
	get lastScanValue(): Primitives<DeviceMonitoringLastScan> {
		return this.lastScan.value
	}
	get lastSuccessValue(): Primitives<DeviceMonitoringLastSuccess> {
		return this.lastSuccess.value
	}
	get lastFailedValue(): Primitives<DeviceMonitoringLastFailed> {
		return this.lastFailed.value
	}

	updateStatus(newStatus: Primitives<DeviceMonitoringStatus>): void {
		this.status = new DeviceMonitoringStatus(newStatus)
	}
	updateLastSuccess(newLastSuccess: Primitives<DeviceMonitoringLastSuccess>): void {
		this.lastSuccess = new DeviceMonitoringLastSuccess(newLastSuccess)
	}
	updateLastScan(newLastScan: Primitives<DeviceMonitoringLastScan>): void {
		this.lastScan = new DeviceMonitoringLastScan(newLastScan)
	}
	updateLastFailed(newLastFailed: Primitives<DeviceMonitoringLastFailed>): void {
		this.lastFailed = new DeviceMonitoringLastFailed(newLastFailed)
	}
}

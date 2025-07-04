import { type MonitoringPrimitives } from './Monitoring.dto'
import { type MonitoringStatus } from './MonitoringStatus'
import { type MonitoringLastScan } from './MonitoringLastScan'
import { type MonitoringLastSuccess } from './MonitoringLastSuccess'
import { type MonitoringLastFailed } from './MonitoringLastFailed'
import { type Primitives } from '../value-object/Primitives'
import { type MonitoringId } from './MonitoringId'

export abstract class Monitoring {
	constructor(
		protected readonly id: MonitoringId,
		protected status: MonitoringStatus,
		protected lastScan: MonitoringLastScan,
		protected lastSuccess: MonitoringLastSuccess,
		protected lastFailed: MonitoringLastFailed
	) {}

	toPrimitive(): MonitoringPrimitives {
		return {
			id: this.idValue,
			status: this.statusValue,
			lastScan: this.lastScanValue,
			lastSuccess: this.lastSuccessValue,
			lastFailed: this.lastFailedValue
		}
	}

	get idValue(): Primitives<MonitoringId> {
		return this.id.value
	}

	get statusValue(): Primitives<MonitoringStatus> {
		return this.status.value
	}

	get lastScanValue(): Primitives<MonitoringLastScan> {
		return this.lastScan.value
	}

	get lastSuccessValue(): Primitives<MonitoringLastSuccess> {
		return this.lastSuccess.value
	}

	get lastFailedValue(): Primitives<MonitoringLastFailed> {
		return this.lastFailed.value
	}

	updateStatus(newStatus: Primitives<MonitoringStatus>): void {
		this.status = new (this.status.constructor as new (value: Primitives<MonitoringStatus>) => MonitoringStatus)(
			newStatus
		)
	}

	updateLastSuccess(newLastSuccess: Primitives<MonitoringLastScan>): void {
		this.lastSuccess = new (this.lastSuccess.constructor as new (
			value: Primitives<MonitoringLastScan>
		) => MonitoringLastScan)(newLastSuccess)
	}

	updateLastScan(newLastScan: Primitives<MonitoringLastSuccess>): void {
		this.lastScan = new (this.lastScan.constructor as new (
			value: Primitives<MonitoringLastSuccess>
		) => MonitoringLastSuccess)(newLastScan)
	}

	updateLastFailed(newLastFailed: Primitives<MonitoringLastFailed>): void {
		this.lastFailed = new (this.lastFailed.constructor as new (
			value: Primitives<MonitoringLastFailed>
		) => MonitoringLastFailed)(newLastFailed)
	}
}

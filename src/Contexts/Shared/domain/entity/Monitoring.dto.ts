import { type MonitoringLastFailed } from '../value-object/MonitoringLastFailed'
import { type MonitoringLastScan } from '../value-object/MonitoringLastScan'
import { type MonitoringLastSuccess } from '../value-object/MonitoringLastSuccess'
import { type MonitoringStatus } from '../value-object/MonitoringStatus'
import { type Primitives } from '../value-object/Primitives'

export interface MonitoringPrimitives {
	id: Primitives<any>
	status: Primitives<MonitoringStatus>
	lastScan: Primitives<MonitoringLastScan>
	lastSuccess: Primitives<MonitoringLastSuccess>
	lastFailed: Primitives<MonitoringLastFailed>
}

export interface MonitoringParams {
	status: Primitives<MonitoringStatus>
	lastScan: Primitives<MonitoringLastScan>
	lastSuccess: Primitives<MonitoringLastSuccess>
	lastFailed: Primitives<MonitoringLastFailed>
}

import { type MonitoringId } from './MonitoringId'
import { type MonitoringLastFailed } from './MonitoringLastFailed'
import { type MonitoringLastScan } from './MonitoringLastScan'
import { type MonitoringLastSuccess } from './MonitoringLastSuccess'
import { type MonitoringStatus } from './MonitoringStatus'
import { type Primitives } from '../value-object/Primitives'

export interface MonitoringPrimitives {
	id: Primitives<MonitoringId>
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

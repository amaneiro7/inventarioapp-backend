import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoring } from './DeviceMonitoring'
import { type DeviceDto } from '../../../Device/domain/Device.dto'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type ComputerName } from '../../../../Features/Computer/domain/ComputerName'
import { type MonitoringPrimitives } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring.dto'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

export type DeviceMonitoringType = MonitoringPrimitives & {
	deviceId: Primitives<DeviceMonitoring['deviceId']>
}

export type DeviceMonitoringPrimitives = DeviceMonitoringType

export type DeviceMonitoringParams = Omit<DeviceMonitoringType, 'id'>

export type DeviceMonitoringDto = DeviceMonitoringType & {
	device: DeviceDto
}

export type DeviceMonitoringMapped = DeviceMonitoringType & {
	ipAddress?: Primitives<IPAddress>
	computerName?: Primitives<ComputerName>
	location: DeviceDto['location']
	employee: DeviceDto['employee']
}
export interface DashboardData {
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
	total: number
}
export interface DashboardByStateData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	byState: StateData[]
}

// Represents the structure of the aggregated data for a single state.
export interface StateData {
	stateName: string
	total: number
	onlineCount: number
	offlineCount: number
}

export type DashboardByLocationData = AdmRegionData[]

export interface LocationData {
	name: string
	total: number
	onlineCount: number
	offlineCount: number
}

export interface SiteData {
	name: string
	locations: LocationData[]
	total: number
	onlineCount: number
	offlineCount: number
}

export interface AdmRegionData {
	name: string
	sites: SiteData[]
}

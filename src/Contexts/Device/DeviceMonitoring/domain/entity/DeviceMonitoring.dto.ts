import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoring } from './DeviceMonitoring'
import { type DeviceDto } from '../../../Device/domain/Device.dto'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type ComputerName } from '../../../../Features/Computer/domain/ComputerName'
import { MonitoringPrimitives } from '../../../../Shared/domain/Monitoring/Monitoring.dto'

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
	onlineCount: number
	offlineCount: number
	notAvailableCount: number
	totalDevices: number
}
export interface DashboardByStateData extends DashboardData {
	byState: Record<string, DashboardData>
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

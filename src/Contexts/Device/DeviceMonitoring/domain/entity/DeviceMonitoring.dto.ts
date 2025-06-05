import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoring } from './DeviceMonitoring'
import { type DeviceDto } from '../../../Device/domain/Device.dto'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type ComputerName } from '../../../../Features/Computer/domain/ComputerName'

export type DeviceMonitoringType = {
	id: Primitives<DeviceMonitoring['id']>
	deviceId: Primitives<DeviceMonitoring['deviceId']>
	status: Primitives<DeviceMonitoring['status']>
	lastScan: Primitives<DeviceMonitoring['lastScan']>
	lastSuccess: Primitives<DeviceMonitoring['lastSuccess']>
	lastFailed: Primitives<DeviceMonitoring['lastFailed']>
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

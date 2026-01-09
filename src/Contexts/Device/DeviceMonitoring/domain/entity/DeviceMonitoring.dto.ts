import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DeviceMonitoring } from './DeviceMonitoring'
import { type DeviceDto } from '../../../Device/domain/dto/Device.dto'
import { type DeviceIPAddress } from '../../../Device/domain/valueObject/DeviceIPAddress'
import { type ComputerName } from '../../../Device/domain/valueObject/ComputerName'
import { type MonitoringPrimitives } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring.dto'
import { type MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * @description Represents the primitive type of a DeviceMonitoring entity.
 */
export type DeviceMonitoringType = MonitoringPrimitives & {
	deviceId: Primitives<DeviceMonitoring['deviceId']>
}

export type DeviceMonitoringPrimitives = DeviceMonitoringType

/**
 * @description Represents the parameters required to create a new DeviceMonitoring entity.
 */
export type DeviceMonitoringParams = Omit<DeviceMonitoringType, 'id'>

/**
 * @description Data Transfer Object for a DeviceMonitoring entity, including the full device data.
 */
export type DeviceMonitoringDto = DeviceMonitoringType & {
	device: DeviceDto
}

/**
 * @description A mapped version of the DeviceMonitoring DTO for client-side display.
 */
export type DeviceMonitoringMapped = DeviceMonitoringType & {
	ipAddress?: Primitives<DeviceIPAddress>
	computerName?: Primitives<ComputerName>
	location: DeviceDto['location']
	employee: DeviceDto['employee']
}

/**
 * @description Defines the structure for the main monitoring dashboard summary.
 */
export interface DashboardData {
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
	total: number
}

/**
 * @description Defines the structure for monitoring data aggregated by state.
 */
export interface DashboardByStateData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	byState: StateData[]
}

/**
 * @description Represents the structure of aggregated data for a single state.
 */
export interface StateData {
	stateName: string
	total: number
	onlineCount: number
	offlineCount: number
}

/**
 * @description Defines the structure for monitoring data aggregated by administrative region.
 */
export type DashboardByLocationData = AdmRegionData[]

/**
 * @description Represents the structure of aggregated data for a single location.
 */
export interface LocationData {
	name: string
	total: number
	onlineCount: number
	offlineCount: number
}

/**
 * @description Represents the structure of aggregated data for a single site.
 */
export interface SiteData {
	name: string
	locations: LocationData[]
	total: number
	onlineCount: number
	offlineCount: number
}

/**
 * @description Represents the structure of aggregated data for a single administrative region.
 */
export interface AdmRegionData {
	name: string
	sites: SiteData[]
}

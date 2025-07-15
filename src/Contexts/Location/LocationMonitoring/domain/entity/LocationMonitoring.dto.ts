import { type MonitoringPrimitives } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoring } from './LocationMonitoring'
import { type LocationDto } from '../../../Location/domain/Location.dto'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type LocationName } from '../../../Location/domain/LocationName'
import { type SiteDto } from '../../../Site/domain/Site.dto'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

export type LocationMonitoringType = MonitoringPrimitives & {
	locationId: Primitives<LocationMonitoring['locationId']>
}

export type LocationMonitoringPrimitives = LocationMonitoringType

export type LocationMonitoringParams = Omit<LocationMonitoringType, 'id'>

export type LocationMonitoringDto = LocationMonitoringType & {
	location: LocationDto
}

export type LocationMonitoringMapped = LocationMonitoringType & {
	subnet?: Primitives<IPAddress>
	name?: Primitives<LocationName>
	site: SiteDto
}
export interface DashboardData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
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

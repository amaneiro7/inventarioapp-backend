import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoring } from './LocationMonitoring'
import { type LocationDto } from '../../../Location/domain/Location.dto'
import { type IPAddress } from '../../../../Features/Computer/domain/IPAddress'
import { type LocationName } from '../../../Location/domain/LocationName'
import { type SiteDto } from '../../../Site/domain/Site.dto'

export type LocationMonitoringType = {
	id: Primitives<LocationMonitoring['id']>
	locationId: Primitives<LocationMonitoring['locationId']>
	status: Primitives<LocationMonitoring['status']>
	lastScan: Primitives<LocationMonitoring['lastScan']>
	lastSuccess: Primitives<LocationMonitoring['lastSuccess']>
	lastFailed: Primitives<LocationMonitoring['lastFailed']>
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
	onlineCount: number
	offlineCount: number
	notAvailableCount: number
	totalLocations: number
}
export interface DashboardByStateData extends DashboardData {
	byState: Record<string, DashboardData>
}
export interface DashboardByLocationData extends DashboardData {
	byLocation: Record<string, DashboardData>
}

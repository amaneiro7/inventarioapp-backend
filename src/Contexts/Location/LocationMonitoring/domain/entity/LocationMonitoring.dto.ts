import { type MonitoringPrimitives } from '../../../../Shared/domain/Monitoring/domain/entity/Monitoring.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type LocationMonitoring } from './LocationMonitoring'
import { type LocationDto } from '../../../Location/domain/entity/Location.dto'
import { type DeviceIPAddress } from '../../../../Device/Device/domain/valueObject/DeviceIPAddress'
import { type LocationName } from '../../../Location/domain/valueObject/LocationName'
import { type SiteDto } from '../../../Site/domain/entity/Site.dto'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'

/**
 * Represents the base type for Location Monitoring, extending MonitoringPrimitives.
 */
export type LocationMonitoringType = MonitoringPrimitives & {
	locationId: Primitives<LocationMonitoring['locationId']>
}

/**
 * Represents the primitive type of Location Monitoring, suitable for data transfer.
 */
export type LocationMonitoringPrimitives = LocationMonitoringType

/**
 * Represents the parameters required to create a new Location Monitoring entry, excluding the ID.
 */
export type LocationMonitoringParams = Omit<LocationMonitoringType, 'id'>

/**
 * Represents the Data Transfer Object (DTO) for Location Monitoring, including associated Location details.
 */
export type LocationMonitoringDto = LocationMonitoringType & {
	location: LocationDto
}

/**
 * Represents a mapped version of Location Monitoring data, including denormalized location details for display.
 */
export type LocationMonitoringMapped = LocationMonitoringType & {
	subnet?: Primitives<DeviceIPAddress>
	name?: Primitives<LocationName>
	site: SiteDto
}

/**
 * Represents the aggregated dashboard data for location monitoring.
 */
export interface DashboardData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
}

/**
 * Represents the structure of aggregated data for a single state in the dashboard.
 */
export interface StateData {
	stateName: string
	total: number
	onlineCount: number
	offlineCount: number
}

/**
 * Represents the dashboard data aggregated by state, extending the base DashboardData.
 */
export interface DashboardByStateData extends DashboardData {
	byState: StateData[]
}

/**
 * Represents the dashboard data aggregated by location, structured as an array of administrative region data.
 */
export type DashboardByLocationData = AdmRegionData[]

/**
 * Represents aggregated data for a single location within the dashboard.
 */
export interface LocationData {
	name: string
	total: number
	onlineCount: number
	offlineCount: number
}

/**
 * Represents aggregated data for a single site within the dashboard, including its locations.
 */
export interface SiteData {
	name: string
	locations: LocationData[]
	total: number
	onlineCount: number
	offlineCount: number
}

/**
 * Represents aggregated data for a single administrative region within the dashboard, including its sites.
 */
export interface AdmRegionData {
	name: string
	sites: SiteData[]
}

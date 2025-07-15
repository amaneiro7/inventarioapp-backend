import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceMonitoringDashboardByLocationAssociation } from './DeviceMonitoringDashboardByLocationAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

import { type CacheService } from '../../../../Shared/domain/CacheService'
import {
	type LocationData,
	type SiteData,
	type DashboardByLocationData,
	type AdmRegionData
} from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByLocationRepository } from '../../domain/repository/DeviceMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// --- Type definitions for clarity and type safety ---

// Represents the structure of each record returned by the database query.
interface RawDeviceMonitoringData {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	locationName: string
	admRegionName: string
	siteName: string
	vpeName: string
	count: string | number // The count can be a string from some DB drivers.
}

// Internal representation for a location while processing.
interface ProcessingLocationData extends Omit<LocationData, 'vpeName'> {
	vpeName: Set<string> // Use a Set to efficiently store unique vpeName values.
}

// Internal representation for a site while processing.
interface ProcessingSiteData extends Omit<SiteData, 'locations'> {
	locations: Map<string, ProcessingLocationData>
}

// Internal representation for an administrative region while processing.
interface ProcessingAdmRegionData extends Omit<AdmRegionData, 'sites'> {
	sites: Map<string, ProcessingSiteData>
}

export class SequelizeDeviceMonitoringDashboardByLocationRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardByLocationRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboardByLocation'
	constructor(private readonly cache: CacheService) {
		super()
	}

	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const baseOptions = this.convert(criteria)
		const findOptions = DeviceMonitoringDashboardByLocationAssociation.buildDashboardFindOptions(
			criteria,
			baseOptions
		)

		return await this.cache.getCachedData<DashboardByLocationData>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			criteria,
			fetchFunction: async () => {
				try {
					const rawDevices = (await DeviceMonitoringModel.findAll(
						findOptions
					)) as unknown as RawDeviceMonitoringData[]
					return this.processRawDataWithReduce(rawDevices)
				} catch (error) {
					console.error('Error fetching or processing device monitoring data:', error)
					throw new Error('Failed to retrieve device monitoring dashboard data.')
				}
			}
		})
	}

	/**
	 * Processes raw monitoring data into a hierarchical and sorted structure using a single reduce function.
	 * @param rawData - Array of raw data objects from the database.
	 * @returns Transformed and sorted DashboardByLocationData.
	 */
	private processRawDataWithReduce(rawData: RawDeviceMonitoringData[]): DashboardByLocationData {
		// The accumulator for the reduce function is a Map of administrative regions.
		const admRegionMap = rawData.reduce((acc, item) => {
			const { statusName, locationName, admRegionName, siteName, vpeName, count } = item
			const countNumber = Number(count)

			// --- Administrative Region Level ---
			let admRegion = acc.get(admRegionName)
			if (!admRegion) {
				admRegion = {
					name: admRegionName,
					sites: new Map<string, ProcessingSiteData>()
				}
				acc.set(admRegionName, admRegion)
			}

			// --- Site Level ---
			let site = admRegion.sites.get(siteName)
			if (!site) {
				site = {
					name: siteName,
					locations: new Map<string, ProcessingLocationData>(),
					total: 0,
					onlineCount: 0,
					offlineCount: 0
				}
				admRegion.sites.set(siteName, site)
			}

			// --- Location Level ---
			let location = site.locations.get(locationName)
			if (!location) {
				location = {
					name: locationName,
					total: 0,
					onlineCount: 0,
					offlineCount: 0,
					vpeName: new Set<string>()
				}
				site.locations.set(locationName, location)
			}

			// --- Update Counts and Data ---
			site.total += countNumber
			location.total += countNumber
			location.vpeName.add(vpeName) // Add vpeName to the Set for uniqueness.

			if (statusName === MonitoringStatuses.ONLINE) {
				site.onlineCount += countNumber
				location.onlineCount += countNumber
			} else if (statusName === MonitoringStatuses.OFFLINE) {
				site.offlineCount += countNumber
				location.offlineCount += countNumber
			}

			return acc
		}, new Map<string, ProcessingAdmRegionData>())

		// --- Convert Maps to Arrays for Final DTO Structure ---
		// The data is already sorted by the database query, so no need to sort here.
		return Array.from(admRegionMap.values()).map(admRegion => ({
			name: admRegion.name,
			sites: Array.from(admRegion.sites.values()).map(site => ({
				name: site.name,
				total: site.total,
				onlineCount: site.onlineCount,
				offlineCount: site.offlineCount,
				locations: Array.from(site.locations.values()).map(location => ({
					name: location.name,
					total: location.total,
					onlineCount: location.onlineCount,
					offlineCount: location.offlineCount,
					// Convert the Set to an Array for the final DTO.
					vpeName: Array.from(location.vpeName)
				}))
			}))
		}))
	}
}

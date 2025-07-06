import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { LocationMonitoringDashboardByLocationAssociation } from './LocationMonitoringDashboardByLocationAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

import { type CacheService } from '../../../../Shared/domain/CacheService'
import {
	type LocationData,
	type SiteData,
	type DashboardByLocationData
} from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByLocationRepository } from '../../domain/repository/LocationMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// Define the structure of the raw data returned from LocationMonitoringModel.findAll
// This helps with type safety when destructuring 'device'
interface RawLocationMonitoringData {
	statusName: MonitoringStatuses
	locationName: string
	admRegionName: string
	siteName: string
	count: string | number // Assuming count could be a string from DB
}

export class SequelizeLocationMonitoringDashboardByLocationRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringDashboardByLocationRepository
{
	private readonly cacheKey: string = 'locationMonitoringDashboardByLocation'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * Retrieves and processes location monitoring dashboard data,
	 * leveraging caching for improved performance.
	 * @param criteria - Criteria for filtering the data.
	 * @returns A promise that resolves to DashboardByLocationData.
	 * @throws {Error} If data fetching or processing fails.
	 */
	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const baseOptions = this.convert(criteria)
		const findOptions = LocationMonitoringDashboardByLocationAssociation.buildDashboardFindOptions(
			criteria,
			baseOptions
		)
		return await this.cache.getCachedData<DashboardByLocationData>({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			criteria,
			fetchFunction: async () => {
				try {
					const rawDevices = await LocationMonitoringModel.findAll(findOptions)
					const transformedData = this.processRawData(rawDevices as unknown as RawLocationMonitoringData[])
					return transformedData
				} catch (error) {
					console.error('Error fetching or processing location monitoring data:', error)
					// Re-throw or throw a more specific error for upstream handling
					throw new Error('Failed to retrieve location monitoring dashboard data.')
				}
			}
		})
	}

	/**
	 * Processes raw monitoring data into a hierarchical structure (AdmRegion -> Site -> Location).
	 * @param rawData - Array of raw data objects from the database.
	 * @returns Transformed DashboardByLocationData.
	 */
	private processRawData(rawData: RawLocationMonitoringData[]): DashboardByLocationData {
		const admRegionMap = new Map() // Use specific types for maps

		rawData.forEach(item => {
			const { statusName, locationName, admRegionName, siteName, count } = item
			const countNumber = Number(count) // Ensure count is a number

			// Initialize Administrative Region
			if (!admRegionMap.has(admRegionName)) {
				admRegionMap.set(admRegionName, {
					name: admRegionName,
					sites: new Map<string, SiteData>() // Use `sites` for plural, Map for internal use
				})
			}
			const currentAdmRegion = admRegionMap.get(admRegionName)! // Assert non-null after check

			// Initialize Site within Administrative Region
			if (!currentAdmRegion.sites.has(siteName)) {
				currentAdmRegion.sites.set(siteName, {
					name: siteName,
					locations: new Map<string, LocationData>(), // Use `locations` for plural, Map for internal use
					total: 0,
					onlineCount: 0,
					offlineCount: 0
				})
			}
			const currentSite = currentAdmRegion.sites.get(siteName)! // Assert non-null

			// Update Site counts
			currentSite.total += countNumber
			if (statusName === MonitoringStatuses.ONLINE) {
				currentSite.onlineCount += countNumber
			} else if (statusName === MonitoringStatuses.OFFLINE) {
				currentSite.offlineCount += countNumber
			}
			// Consider handling other statuses or logging unknown ones

			// Initialize and Update Location within Site
			if (!currentSite.locations.has(locationName)) {
				currentSite.locations.set(locationName, {
					name: locationName,
					total: 0,
					onlineCount: 0,
					offlineCount: 0
				})
			}
			const currentLocation = currentSite.locations.get(locationName)! // Assert non-null

			// Update Location counts
			currentLocation.total += countNumber
			if (statusName === MonitoringStatuses.ONLINE) {
				currentLocation.onlineCount += countNumber
			} else if (statusName === MonitoringStatuses.OFFLINE) {
				currentLocation.offlineCount += countNumber
			}
			// Ensure consistency in spelling: `offlineCount`
			// Original code had `site.oflineCount` which had a typo, corrected to `site.offlineCount`.
			// The `location.oflineCount` also had this typo, corrected.
		})

		// Convert Maps to Arrays for final output DTO structure
		const result: DashboardByLocationData = Array.from(admRegionMap.values()).map((admRegion: any) => ({
			...admRegion,
			sites: Array.from(admRegion.sites.values()).map((site: any) => ({
				...site,
				locations: Array.from(site.locations.values())
			}))
		}))

		return result
	}
}

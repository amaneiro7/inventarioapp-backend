import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { LocationMonitoringDashboardByLocationAssociation } from './LocationMonitoringDashboardByLocationAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

import { type CacheService } from '../../../../Shared/domain/CacheService'
import {
	type LocationData,
	type SiteData,
	type DashboardByLocationData,
	type AdmRegionData
} from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByLocationRepository } from '../../domain/repository/LocationMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// --- Type definitions for clarity and type safety ---

// Represents the structure of each record returned by the database query.
interface RawLocationMonitoringData {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	locationName: string
	admRegionName: string
	siteName: string
	count: string | number
}

// Internal representation for a location while processing.
type ProcessingLocationData = LocationData

// Internal representation for a site while processing.
interface ProcessingSiteData extends Omit<SiteData, 'locations'> {
	locations: Map<string, ProcessingLocationData>
}

// Internal representation for an administrative region while processing.
interface ProcessingAdmRegionData extends Omit<AdmRegionData, 'sites'> {
	sites: Map<string, ProcessingSiteData>
}

export class SequelizeLocationMonitoringDashboardByLocationRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringDashboardByLocationRepository
{
	private readonly cacheKey: string = 'locationMonitoringDashboardByLocation'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const baseOptions = this.convert(criteria)
		const findOptions = LocationMonitoringDashboardByLocationAssociation.buildDashboardFindOptions(
			criteria,
			baseOptions
		)

		return await this.cache.getCachedData<DashboardByLocationData>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				try {
					const rawData = (await LocationMonitoringModel.findAll(
						findOptions
					)) as unknown as RawLocationMonitoringData[]
					return this.processRawDataWithReduce(rawData)
				} catch (error) {
					console.error('Error fetching or processing location monitoring data:', error)
					throw new Error('Failed to retrieve location monitoring dashboard data.')
				}
			}
		})
	}

	/**
	 * Processes raw monitoring data into a hierarchical and sorted structure using a single reduce function.
	 * @param rawData - Array of raw data objects from the database.
	 * @returns Transformed and sorted DashboardByLocationData.
	 */
	private processRawDataWithReduce(rawData: RawLocationMonitoringData[]): DashboardByLocationData {
		const admRegionMap = rawData.reduce((acc, item) => {
			const { statusName, locationName, admRegionName, siteName, count } = item
			const countNumber = Number(count)

			// --- Administrative Region Level ---
			let admRegion = acc.get(admRegionName)
			if (!admRegion) {
				admRegion = { name: admRegionName, sites: new Map<string, ProcessingSiteData>() }
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
				location = { name: locationName, total: 0, onlineCount: 0, offlineCount: 0 }
				site.locations.set(locationName, location)
			}

			// --- Update Counts ---
			site.total += countNumber
			location.total += countNumber

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
		return Array.from(admRegionMap.values()).map(admRegion => ({
			name: admRegion.name,
			sites: Array.from(admRegion.sites.values()).map(site => ({
				...site,
				locations: Array.from(site.locations.values())
			}))
		}))
	}
}

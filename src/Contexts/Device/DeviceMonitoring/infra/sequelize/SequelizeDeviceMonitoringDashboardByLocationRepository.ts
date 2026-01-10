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

// Type definitions for clarity and type safety
interface RawDeviceMonitoringData {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	locationName: string
	admRegionName: string
	siteName: string
	vpeName: string
	count: string | number
}

interface ProcessingLocationData extends Omit<LocationData, 'vpeName'> {
	vpeName: Set<string>
}

interface ProcessingSiteData extends Omit<SiteData, 'locations'> {
	locations: Map<string, ProcessingLocationData>
}

interface ProcessingAdmRegionData extends Omit<AdmRegionData, 'sites'> {
	sites: Map<string, ProcessingSiteData>
}

/**
 * @description Sequelize implementation of the DeviceMonitoringDashboardByLocationRepository.
 */
export class SequelizeDeviceMonitoringDashboardByLocationRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardByLocationRepository
{
	private readonly cacheKey = 'deviceMonitoring'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const baseOptions = this.convert(criteria)
		const findOptions = DeviceMonitoringDashboardByLocationAssociation.buildDashboardFindOptions(
			criteria,
			baseOptions
		)

		return this.cache.getCachedData<DashboardByLocationData>({
			cacheKey: `${this.cacheKey}:lists:dashboardByLocation:${criteria.hash()}`,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const rawDevices = (await DeviceMonitoringModel.findAll(
					findOptions
				)) as unknown as RawDeviceMonitoringData[]
				return this.processRawDataWithReduce(rawDevices)
			}
		})
	}

	/**
	 * @description Processes raw monitoring data into a hierarchical structure using a single reduce function.
	 * @param {RawDeviceMonitoringData[]} rawData Array of raw data objects from the database.
	 * @returns {DashboardByLocationData} Transformed dashboard data.
	 */
	private processRawDataWithReduce(rawData: RawDeviceMonitoringData[]): DashboardByLocationData {
		const admRegionMap = rawData.reduce((acc, item) => {
			const { statusName, locationName, admRegionName, siteName, vpeName, count } = item
			const countNumber = Number(count)

			let admRegion = acc.get(admRegionName)
			if (!admRegion) {
				admRegion = { name: admRegionName, sites: new Map<string, ProcessingSiteData>() }
				acc.set(admRegionName, admRegion)
			}

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

			let location = site.locations.get(locationName)
			if (!location) {
				location = { name: locationName, total: 0, onlineCount: 0, offlineCount: 0, vpeName: new Set<string>() }
				site.locations.set(locationName, location)
			}

			site.total += countNumber
			location.total += countNumber
			location.vpeName.add(vpeName)

			if (statusName === MonitoringStatuses.ONLINE) {
				site.onlineCount += countNumber
				location.onlineCount += countNumber
			} else if (statusName === MonitoringStatuses.OFFLINE) {
				site.offlineCount += countNumber
				location.offlineCount += countNumber
			}

			return acc
		}, new Map<string, ProcessingAdmRegionData>())

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
					vpeName: Array.from(location.vpeName)
				}))
			}))
		}))
	}
}

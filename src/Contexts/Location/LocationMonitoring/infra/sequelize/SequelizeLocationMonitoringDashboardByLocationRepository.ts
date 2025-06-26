import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationMonitoringStatuses } from '../../domain/valueObject/LocationMonitoringStatus'

import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardByLocationData } from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByLocationRepository } from '../../domain/repository/LocationMonitoringDashboardByLocationRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { LocationMonitoringDashboardByLocationAssociation } from './LocationMonitoringDashboardByLocationAssociation'

export class SequelizeLocationMonitoringDashboardByLocationRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringDashboardByLocationRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboardByLocation'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async run(criteria: Criteria): Promise<DashboardByLocationData> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringDashboardByLocationAssociation.buildDashboardFindOptions(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			criteria,
			fetchFunction: async () => {
				const devices = await LocationMonitoringModel.findAll(opt)

				// let total = 0
				// const dashboardData: Record<string, any> = {
				// 	[LocationMonitoringStatuses.ONLINE]: 0,
				// 	[LocationMonitoringStatuses.OFFLINE]: 0
				// }

				// const dashboardByLocationData: Array<{
				// 	locationName: string
				// 	total: number
				// 	onlineCount: number
				// 	offlineCount: number
				// }> = []

				// // Temporary map to build up Location data efficiently
				// const tempLocationMap: Record<
				// 	string,
				// 	{
				// 		total: number
				// 		onlineCount: number
				// 		offlineCount: number
				// 	}
				// > = {}
				const locationBySiteMap = new Map()
				devices.forEach((device: any) => {
					const { statusName, locationName, admRegionName, siteName, count } = device
					const countNumber = Number(count)

					if (!locationBySiteMap.has(admRegionName)) {
						locationBySiteMap.set(admRegionName, {
							name: admRegionName,
							site: new Map()
						})
					}

					const locationBySite = locationBySiteMap.get(admRegionName)

					if (!locationBySite.site.has(siteName)) {
						locationBySite.site.set(siteName, {
							name: siteName,
							location: new Map(),
							total: 0,
							onlineCount: 0,
							offlineCount: 0
						})
					}

					const site = locationBySite.site.get(siteName)
					site.total += countNumber
					if (statusName === LocationMonitoringStatuses.ONLINE) {
						site.onlineCount += countNumber
					} else if (statusName === LocationMonitoringStatuses.OFFLINE) {
						site.oflineCount += countNumber
					}

					if (!site.location.has(locationName)) {
						site.location.set(locationName, {
							name: locationName,
							location: new Map(),
							total: 0,
							onlineCount: 0,
							offlineCount: 0
						})
					} else {
						const location = site.location.get(locationName)
						location.total += countNumber
						if (statusName === LocationMonitoringStatuses.ONLINE) {
							location.onlineCount += countNumber
						} else if (statusName === LocationMonitoringStatuses.OFFLINE) {
							location.oflineCount += countNumber
						}
					}

					const transformedData = Array.from(locationBySiteMap.values()).map((admRegion: any) => ({
						...admRegion,
						site: Array.from(admRegion.site.values()).map((site: any) => ({
							...site,
							location: Array.from(site.location.values())
						}))
					}))
					return transformedData

					// // Aggregate total and status counts for the overall dashboard
					// total += countNumber
					// dashboardData[statusName] = (dashboardData[statusName] || 0) + countNumber

					// // Initialize Location data if it doesn't exist
					// if (!tempLocationMap[locationName]) {
					// 	tempLocationMap[locationName] = {
					// 		total: 0,
					// 		onlineCount: 0,
					// 		offlineCount: 0
					// 	}
					// }

					// // Sum by Location
					// tempLocationMap[locationName].total += countNumber
					// if (statusName === LocationMonitoringStatuses.ONLINE) {
					// 	tempLocationMap[locationName].onlineCount += countNumber
					// } else if (statusName === LocationMonitoringStatuses.OFFLINE) {
					// 	tempLocationMap[locationName].offlineCount += countNumber
					// }
				})

				// for (const locationName in tempLocationMap) {
				// 	if (Object.prototype.hasOwnProperty.call(tempLocationMap, locationName)) {
				// 		dashboardByLocationData.push({
				// 			locationName,
				// 			...tempLocationMap[locationName]
				// 		})
				// 	}
				// }

				// return {
				// 	total,
				// 	...dashboardData,
				// 	byLocation: dashboardByLocationData.sort((a, b) => a.locationName.localeCompare(b.locationName))
				// }
			}
		})
	}
}

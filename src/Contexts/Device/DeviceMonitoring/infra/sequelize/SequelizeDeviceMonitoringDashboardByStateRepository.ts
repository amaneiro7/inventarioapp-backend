import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceMonitoringDashboardByStateAssociation } from './DeviceMonitoringDashboardByStateAssociation'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardByStateData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../../domain/repository/DeviceMonitoringDashboardByStateRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SequelizeDeviceMonitoringDashboardByStateRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardByStateRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboardBySTate'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async run(criteria: Criteria): Promise<DashboardByStateData> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringDashboardByStateAssociation.buildDashboardFindOptions(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = await DeviceMonitoringModel.findAll(opt)

				let total = 0
				const dashboardData: Record<string, any> = {
					[MonitoringStatuses.ONLINE]: 0,
					[MonitoringStatuses.OFFLINE]: 0
				}

				const dashboardByStateData: Array<{
					stateName: string
					total: number
					onlineCount: number
					offlineCount: number
				}> = []

				// Temporary map to build up state data efficiently
				const tempStateMap: Record<
					string,
					{
						total: number
						onlineCount: number
						offlineCount: number
					}
				> = {}

				devices.forEach((device: any) => {
					const { statusName, stateName, count } = device
					const countNumber = Number(count)

					// Aggregate total and status counts for the overall dashboard
					total += countNumber
					dashboardData[statusName] = (dashboardData[statusName] || 0) + countNumber

					// Initialize state data if it doesn't exist
					if (!tempStateMap[stateName]) {
						tempStateMap[stateName] = {
							total: 0,
							onlineCount: 0,
							offlineCount: 0
						}
					}

					// Sum by state
					tempStateMap[stateName].total += countNumber
					if (statusName === MonitoringStatuses.ONLINE) {
						tempStateMap[stateName].onlineCount += countNumber
					} else if (statusName === MonitoringStatuses.OFFLINE) {
						tempStateMap[stateName].offlineCount += countNumber
					}
				})

				for (const stateName in tempStateMap) {
					if (Object.prototype.hasOwnProperty.call(tempStateMap, stateName)) {
						dashboardByStateData.push({
							stateName,
							...tempStateMap[stateName]
						})
					}
				}

				return {
					total,
					...dashboardData,
					byState: dashboardByStateData.sort((a, b) => a.stateName.localeCompare(b.stateName))
				}
			}
		})
	}
}

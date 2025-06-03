import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringStatuses } from '../../domain/valueObject/DeviceMonitoringStatus'

import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardByStateData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../../domain/repository/DeviceMonitoringDashboardByStateRepository'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { StatusList } from '../../../Status/domain/StatusList'
import { Op } from 'sequelize'

export class SequelizeDeviceMonitoringDashboardByStateRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardByStateRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboardBySTate'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async run(): Promise<DashboardByStateData> {
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = await DeviceMonitoringModel.findAll({
					attributes: [
						[sequelize.col('status'), 'statusName'],
						[sequelize.col('device.location.site.city.state.name'), 'stateName'],
						[sequelize.fn('COUNT', sequelize.col('*')), 'count']
					],
					include: [
						{
							association: 'device', // 0
							where: {
								statusId: StatusList.INUSE
							},
							required: true,
							include: [
								{
									association: 'computer', // 0 - 0
									where: {
										ipAddress: { [Op.ne]: null }
									},
									required: true,
									attributes: []
								},
								{
									association: 'location', // 0 - 1
									required: true,
									attributes: [],
									include: [
										{
											association: 'typeOfSite', // 0 - 1 - 0
											attributes: []
										},
										{
											association: 'site', // 0 - 1 - 1
											required: true,
											attributes: [],
											include: [
												{
													association: 'city', // 0 - 1 - 1 - 0
													required: true,
													attributes: [],
													include: [
														{
															association: 'state', // 0 - 1 - 1 - 1
															required: true,
															attributes: [],
															include: [
																{
																	association: 'region', // 0 - 1 - 1 - 1 - 0
																	required: true,
																	attributes: [],
																	include: [
																		{
																			association: 'administrativeRegion', // 0 - 1 - 1 - 1 - 0 - 0
																			required: true,
																			attributes: []
																		}
																	]
																}
															]
														}
													]
												}
											]
										}
									]
								}
							]
						}
					],
					group: ['status', 'device.id', 'device.location.site.city.state.name'],
					raw: true
				})

				let total = 0
				const dashboardData: Record<string, any> = {
					[DeviceMonitoringStatuses.ONLINE]: 0,
					[DeviceMonitoringStatuses.OFFLINE]: 0
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
					if (statusName === DeviceMonitoringStatuses.ONLINE) {
						tempStateMap[stateName].onlineCount += countNumber
					} else if (statusName === DeviceMonitoringStatuses.OFFLINE) {
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

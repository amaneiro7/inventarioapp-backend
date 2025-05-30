import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringDashboardAssociation } from './DeviceMonitoringDashboardAssociation'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardRepository } from '../../domain/repository/DeviceMonitoringDashboardRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SequelizeDeviceMonitoringDashboardRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboard'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async run(criteria: Criteria): Promise<DashboardData> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringDashboardAssociation.buildDashboardFindOptions(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = await DeviceMonitoringModel.findAll(opt)

				let total = 0
				const dashboardData: Record<string, any> = {
					overall: {}
				}

				devices.forEach((device: any) => {
					const { statusName, count } = device

					const countNumber = Number(count)

					// Sumar al total
					total += countNumber

					// Agregar a la sección "overall"
					dashboardData.overall[statusName] = (dashboardData.overall[statusName] || 0) + countNumber
				})

				return {
					total,
					...dashboardData
				}
			}
		})
	}
}

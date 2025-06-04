import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationMonitoringDashboardAssociation } from './LocationMonitoringDashboardAssociation'
import { LocationMonitoringStatuses } from '../../domain/valueObject/LocationMonitoringStatus'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardData } from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardRepository } from '../../domain/repository/LocationMonitoringDashboardRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

export class SequelizeLocationMonitoringDashboardRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringDashboardRepository
{
	private readonly cacheKey: string = 'locationMonitoringDashboard'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async run(criteria: Criteria): Promise<DashboardData> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringDashboardAssociation.buildDashboardFindOptions(criteria, options)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const locations = await LocationMonitoringModel.findAll(opt)

				let total = 0
				const dashboardData: Record<string, any> = {
					[LocationMonitoringStatuses.ONLINE]: 0,
					[LocationMonitoringStatuses.OFFLINE]: 0
				}

				locations.forEach((device: any) => {
					const { statusName, count } = device

					const countNumber = Number(count)

					// Sumar al total
					total += countNumber

					dashboardData[statusName] = (dashboardData[statusName] || 0) + countNumber
				})

				return {
					total,
					...dashboardData
				}
			}
		})
	}
}

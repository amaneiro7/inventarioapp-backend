import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringDashboardAssociation } from './DeviceMonitoringDashboardAssociation'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardRepository } from '../../domain/repository/DeviceMonitoringDashboardRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// Represents the structure of each record returned by the database query.
interface DeviceCountByStatus {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	count: string | number
}

export class SequelizeDeviceMonitoringDashboardRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardRepository
{
	private readonly cacheKey: string = 'deviceMonitoringDashboard'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async run(criteria: Criteria): Promise<DashboardData> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringDashboardAssociation.buildDashboardFindOptions(criteria, options)

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = (await DeviceMonitoringModel.findAll(opt)) as unknown as DeviceCountByStatus[]

				// Initialize the dashboard data with all possible statuses from MonitoringStatuses set to 0.
				// This ensures a consistent object shape regardless of the query results.
				const initialState: DashboardData = {
					total: 0,
					[MonitoringStatuses.ONLINE]: 0,
					[MonitoringStatuses.OFFLINE]: 0,
					[MonitoringStatuses.NOTAVAILABLE]: 0,
					[MonitoringStatuses.HOSTNAME_MISMATCH]: 0
				}

				// Use reduce for a more concise and efficient aggregation.
				return devices.reduce((acc, device) => {
					const { statusName, count } = device
					const countNumber = Number(count)

					// Sum to total
					acc.total += countNumber

					// Increment the count for the specific status, if it's a recognized status.
					if (Object.prototype.hasOwnProperty.call(acc, statusName)) {
						acc[statusName] = (acc[statusName] ?? 0) + countNumber
					}

					return acc
				}, initialState)
			}
		})
	}
}

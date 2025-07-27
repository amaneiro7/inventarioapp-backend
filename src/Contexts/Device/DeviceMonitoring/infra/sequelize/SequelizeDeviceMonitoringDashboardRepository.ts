import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { DeviceMonitoringDashboardAssociation } from './DeviceMonitoringDashboardAssociation'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardRepository } from '../../domain/repository/DeviceMonitoringDashboardRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

interface DeviceCountByStatus {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	count: string | number
}

/**
 * @description Sequelize implementation of the DeviceMonitoringDashboardRepository.
 */
export class SequelizeDeviceMonitoringDashboardRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardRepository
{
	private readonly cacheKey = 'deviceMonitoringDashboard'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async run(criteria: Criteria): Promise<DashboardData> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringDashboardAssociation.buildDashboardFindOptions(criteria, options)

		return this.cache.getCachedData<DashboardData>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = (await DeviceMonitoringModel.findAll(opt)) as unknown as DeviceCountByStatus[]
				return this.aggregateDeviceCounts(devices)
			}
		})
	}

	/**
	 * @description Aggregates device counts by status.
	 * @param {DeviceCountByStatus[]} devices The raw device count data.
	 * @returns {DashboardData} The aggregated dashboard data.
	 */
	private aggregateDeviceCounts(devices: DeviceCountByStatus[]): DashboardData {
		const initialState: DashboardData = {
			total: 0,
			[MonitoringStatuses.ONLINE]: 0,
			[MonitoringStatuses.OFFLINE]: 0,
			[MonitoringStatuses.NOTAVAILABLE]: 0,
			[MonitoringStatuses.HOSTNAME_MISMATCH]: 0
		}

		return devices.reduce((acc, device) => {
			const { statusName, count } = device
			const countNumber = Number(count)

			acc.total += countNumber
			if (Object.prototype.hasOwnProperty.call(acc, statusName)) {
				acc[statusName] = (acc[statusName] ?? 0) + countNumber
			}

			return acc
		}, initialState)
	}
}

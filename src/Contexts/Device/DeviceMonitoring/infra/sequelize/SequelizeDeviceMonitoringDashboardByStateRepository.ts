import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DeviceMonitoringModel } from './DeviceMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { DeviceMonitoringDashboardByStateAssociation } from './DeviceMonitoringDashboardByStateAssociation'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type StateData, type DashboardByStateData } from '../../domain/entity/DeviceMonitoring.dto'
import { type DeviceMonitoringDashboardByStateRepository } from '../../domain/repository/DeviceMonitoringDashboardByStateRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// Type definitions for clarity
interface DeviceCountByState {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	stateName: string
	count: string | number
}

interface AggregatedData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
	byStateMap: Map<string, StateData>
}

/**
 * @description Sequelize implementation of the DeviceMonitoringDashboardByStateRepository.
 */
export class SequelizeDeviceMonitoringDashboardByStateRepository
	extends SequelizeCriteriaConverter
	implements DeviceMonitoringDashboardByStateRepository
{
	private readonly cacheKey = 'deviceMonitoringDashboardByState'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async run(criteria: Criteria): Promise<DashboardByStateData> {
		const options = this.convert(criteria)
		const opt = DeviceMonitoringDashboardByStateAssociation.buildDashboardFindOptions(criteria, options)

		return this.cache.getCachedData<DashboardByStateData>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const devices = (await DeviceMonitoringModel.findAll(opt)) as unknown as DeviceCountByState[]
				return this.processAndAggregateData(devices)
			}
		})
	}

	/**
	 * @description Processes and aggregates raw device count data into the final dashboard structure.
	 * @param {DeviceCountByState[]} devices The raw data from the database.
	 * @returns {DashboardByStateData} The processed and aggregated data.
	 */
	private processAndAggregateData(devices: DeviceCountByState[]): DashboardByStateData {
		const initialState: AggregatedData = {
			total: 0,
			[MonitoringStatuses.ONLINE]: 0,
			[MonitoringStatuses.OFFLINE]: 0,
			[MonitoringStatuses.NOTAVAILABLE]: 0,
			[MonitoringStatuses.HOSTNAME_MISMATCH]: 0,
			byStateMap: new Map<string, StateData>()
		}

		const aggregatedData = devices.reduce((acc, device) => {
			const { statusName, stateName, count } = device
			const countNumber = Number(count)

			acc.total += countNumber
			acc[statusName] = (acc[statusName] ?? 0) + countNumber

			let stateData = acc.byStateMap.get(stateName)
			if (!stateData) {
				stateData = { stateName, total: 0, onlineCount: 0, offlineCount: 0 }
				acc.byStateMap.set(stateName, stateData)
			}

			stateData.total += countNumber
			if (statusName === MonitoringStatuses.ONLINE) {
				stateData.onlineCount += countNumber
			} else if (statusName === MonitoringStatuses.OFFLINE) {
				stateData.offlineCount += countNumber
			}

			return acc
		}, initialState)

		const byStateArray = Array.from(aggregatedData.byStateMap.values()).sort((a, b) =>
			a.stateName.localeCompare(b.stateName)
		)

		return {
			total: aggregatedData.total,
			[MonitoringStatuses.ONLINE]: aggregatedData[MonitoringStatuses.ONLINE],
			[MonitoringStatuses.OFFLINE]: aggregatedData[MonitoringStatuses.OFFLINE],
			byState: byStateArray
		}
	}
}

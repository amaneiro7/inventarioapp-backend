import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { LocationMonitoringDashboardByStateAssociation } from './LocationMonitoringDashboardByStateAssociation'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type StateData, type DashboardByStateData } from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardByStateRepository } from '../../domain/repository/LocationMonitoringDashboardByStateRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// --- Type definitions for clarity and type safety ---

// Represents the structure of each record returned by the database query.
interface LocationCountByState {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	stateName: string
	count: string | number
}

// Represents the accumulator's structure during the reduce operation.
interface AggregatedData {
	total: number
	[MonitoringStatuses.ONLINE]: number
	[MonitoringStatuses.OFFLINE]: number
	[MonitoringStatuses.HOSTNAME_MISMATCH]: number
	[MonitoringStatuses.NOTAVAILABLE]: number
	byStateMap: Map<string, StateData>
}

export class SequelizeLocationMonitoringDashboardByStateRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringDashboardByStateRepository
{
	private readonly cacheKey: string = 'locationMonitoringDashboardByState' // Corrected cache key
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async run(criteria: Criteria): Promise<DashboardByStateData> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringDashboardByStateAssociation.buildDashboardFindOptions(criteria, options)

		return await this.cache.getCachedData({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const locations = (await LocationMonitoringModel.findAll(opt)) as unknown as LocationCountByState[]

				// Initialize the accumulator for the reduce operation.
				const initialState: AggregatedData = {
					total: 0,
					[MonitoringStatuses.ONLINE]: 0,
					[MonitoringStatuses.OFFLINE]: 0,
					[MonitoringStatuses.HOSTNAME_MISMATCH]: 0,
					[MonitoringStatuses.NOTAVAILABLE]: 0,
					byStateMap: new Map<string, StateData>()
				}

				// Use reduce for a more concise and efficient aggregation.
				const aggregatedData = locations.reduce((acc, location) => {
					const { statusName, stateName, count } = location
					const countNumber = Number(count)

					// Aggregate total and overall status counts.
					acc.total += countNumber
					if (statusName === MonitoringStatuses.ONLINE || statusName === MonitoringStatuses.OFFLINE) {
						acc[statusName] += countNumber
					}

					// Get or initialize state data from the map.
					let stateData = acc.byStateMap.get(stateName)
					if (!stateData) {
						stateData = { stateName, total: 0, onlineCount: 0, offlineCount: 0 }
						acc.byStateMap.set(stateName, stateData)
					}

					// Update state-specific counts.
					stateData.total += countNumber
					if (statusName === MonitoringStatuses.ONLINE) {
						stateData.onlineCount += countNumber
					} else if (statusName === MonitoringStatuses.OFFLINE) {
						stateData.offlineCount += countNumber
					}

					return acc
				}, initialState)

				// Convert the map to a sorted array for the final DTO.
				const byStateArray = Array.from(aggregatedData.byStateMap.values()).sort((a, b) =>
					a.stateName.localeCompare(b.stateName)
				)

				return {
					total: aggregatedData.total,
					[MonitoringStatuses.ONLINE]: aggregatedData[MonitoringStatuses.ONLINE],
					[MonitoringStatuses.OFFLINE]: aggregatedData[MonitoringStatuses.OFFLINE],
					[MonitoringStatuses.HOSTNAME_MISMATCH]: aggregatedData[MonitoringStatuses.HOSTNAME_MISMATCH],
					[MonitoringStatuses.NOTAVAILABLE]: aggregatedData[MonitoringStatuses.NOTAVAILABLE],
					byState: byStateArray
				}
			}
		})
	}
}

import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { LocationMonitoringModel } from './LocationMonitoringSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { LocationMonitoringDashboardAssociation } from './LocationMonitoringDashboardAssociation'
import { MonitoringStatuses } from '../../../../Shared/domain/Monitoring/domain/value-object/MonitoringStatus'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type DashboardData } from '../../domain/entity/LocationMonitoring.dto'
import { type LocationMonitoringDashboardRepository } from '../../domain/repository/LocationMonitoringDashboardRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'

// Represents the structure of each record returned by the database query.
interface LocationCountByStatus {
	statusName: (typeof MonitoringStatuses)[keyof typeof MonitoringStatuses]
	count: string | number
}

/**
 * @class SequelizeLocationMonitoringDashboardRepository
 * @extends SequelizeCriteriaConverter
 * @implements {LocationMonitoringDashboardRepository}
 * @description Concrete implementation of the LocationMonitoringDashboardRepository using Sequelize.
 * Handles data retrieval and aggregation for overall location monitoring dashboard data, including caching mechanisms.
 */
export class SequelizeLocationMonitoringDashboardRepository
	extends SequelizeCriteriaConverter
	implements LocationMonitoringDashboardRepository
{
	// Usamos la misma base key que el repositorio principal para aprovechar su invalidación
	private readonly cacheKey: string = 'locationMonitoring'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * Searches and retrieves aggregated overall location monitoring dashboard data.
	 * @param {Criteria} criteria - The criteria for filtering the dashboard data.
	 * @returns {Promise<DashboardData>} A promise that resolves to the aggregated overall dashboard data.
	 */
	async search(criteria: Criteria): Promise<DashboardData> {
		const options = this.convert(criteria)
		const opt = LocationMonitoringDashboardAssociation.buildDashboardFindOptions(criteria, options)

		return await this.cache.getCachedData({
			// IMPORTANTE: Usamos el namespace ':lists:' y luego ':dashboard'.
			// Cuando SequelizeLocationMonitoringRepository invalide 'locationMonitoring:lists:*', esto también se borrará.
			cacheKey: `${this.cacheKey}:lists:dashboard:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const locations = (await LocationMonitoringModel.findAll(opt)) as unknown as LocationCountByStatus[]

				// Initialize the dashboard data with all possible statuses from MonitoringStatuses set to 0.
				const initialState: DashboardData = {
					total: 0,
					[MonitoringStatuses.ONLINE]: 0,
					[MonitoringStatuses.OFFLINE]: 0,
					[MonitoringStatuses.NOTAVAILABLE]: 0,
					[MonitoringStatuses.HOSTNAME_MISMATCH]: 0 // Assuming this status is also possible
				}

				// Use reduce for a more concise and efficient aggregation.
				return locations.reduce((acc, location) => {
					const { statusName, count } = location
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

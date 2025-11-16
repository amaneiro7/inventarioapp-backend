import { type StatusDashboardRepository } from '../domain/StatusDashboardRepository'
import { type AggregatedDashboardData } from '../infra/sequelize/sequelizeStatusRepository'

/**
 * @class StatusDashboard
 * @description Application service to orchestrate the fetching of status dashboard data.
 */
export class StatusDashboard {
	private readonly statusDashboardRepository: StatusDashboardRepository
	constructor({ statusDashboardRepository }: { statusDashboardRepository: StatusDashboardRepository }) {
		this.statusDashboardRepository = statusDashboardRepository
	}

	/**
	 * @method run
	 * @description Executes the data-fetching operation for the status dashboard.
	 * @returns {Promise<{ total: number; status: AggregatedDashboardData }>} A promise that resolves to the dashboard data.
	 */
	async run(): Promise<{ total: number; status: AggregatedDashboardData }> {
		return await this.statusDashboardRepository.run()
	}
}

import { TotalChangeLastThreMonthsByCategoryRepository } from '../domain/repository/TotalChangeLastThreMonthsByCategoryRepository'
import { type HistoryDashboardDto } from '../domain/entity/HistoryDashboardDto'

/**
 * @description Service to generate dashboard data related to history.
 */
export class HistoryDashboard {
	private readonly totalChangeLastThreMonthsByCategoryRepository: TotalChangeLastThreMonthsByCategoryRepository
	constructor({
		totalChangeLastThreMonthsByCategoryRepository
	}: {
		totalChangeLastThreMonthsByCategoryRepository: TotalChangeLastThreMonthsByCategoryRepository
	}) {
		this.totalChangeLastThreMonthsByCategoryRepository = totalChangeLastThreMonthsByCategoryRepository
	}

	/**
	 * @description Generates a summary of changes by category for the last three months.
	 * @returns {Promise<HistoryDashboardDto>} The dashboard data.
	 */
	async run(): Promise<HistoryDashboardDto> {
		const lastThreeMonths = await this.totalChangeLastThreMonthsByCategoryRepository.run({ months: 2 })
		return {
			lastThreeMonths
		}
	}
}

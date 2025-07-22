import { TotalChangeLastThreMonthsByCategoryRepository } from '../domain/TotalChangeLastThreMonthsByCategoryRepository';
import { type HistoryDashboardDto } from './HistoryDashboardDto';

/**
 * @description Service to generate dashboard data related to history.
 */
export class HistoryDashboard {
	constructor(
		private readonly totalChangeLastThreMonthsByCategoryRepository: TotalChangeLastThreMonthsByCategoryRepository
	) {}

	/**
	 * @description Generates a summary of changes by category for the last three months.
	 * @returns {Promise<HistoryDashboardDto>} The dashboard data.
	 */
	async run(): Promise<HistoryDashboardDto> {
		const lastThreeMonths = await this.totalChangeLastThreMonthsByCategoryRepository.run({ months: 2 });
		return {
			lastThreeMonths
		};
	}
}
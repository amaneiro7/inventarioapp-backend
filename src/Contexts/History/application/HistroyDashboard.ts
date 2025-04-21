import { TotalChangeLastThreMonthsByCategoryRepository } from '../domain/TotalChangeLastThreMonthsByCategoryRepository'

export class HistoryDashboard {
	constructor(
		private readonly totalChangeLastThreMonthsByCategoryRepository: TotalChangeLastThreMonthsByCategoryRepository
	) {}

	async run(): Promise<{}> {
		const [lastThreeMonths] = await Promise.all([
			this.totalChangeLastThreMonthsByCategoryRepository.run({ months: 2 }) // para extraer los ultimos 3 meses
		])
		return {
			lastThreeMonths
		}
	}
}

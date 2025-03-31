import { type ComputerDashboardRepository } from '../domain/ComputerDashboardRepository'

export class ComputerDashboard {
	constructor(private readonly computerDashboardRepository: ComputerDashboardRepository) {}

	async run(): Promise<{}> {
		const [total, status, category, brand, region] = await Promise.all([
			this.computerDashboardRepository.countTotal(),
			this.computerDashboardRepository.countByStatus(),
			this.computerDashboardRepository.countByCategory(),
			this.computerDashboardRepository.countByBrand(),
			this.computerDashboardRepository.countByRegion()
		])
		return {
			total,
			status,
			category,
			brand,
			region
		}
	}
}

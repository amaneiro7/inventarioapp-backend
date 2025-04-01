import { type ComputerDashboardRepository } from '../domain/ComputerDashboardRepository'

export class ComputerDashboard {
	constructor(private readonly computerDashboardRepository: ComputerDashboardRepository) {}

	async run(): Promise<{}> {
		const [total, status, category, brand, region, activeEmployees, totalAgencies, hardDrive] = await Promise.all([
			this.computerDashboardRepository.countTotal(),
			this.computerDashboardRepository.countByStatus(),
			this.computerDashboardRepository.countByCategory(),
			this.computerDashboardRepository.countByBrand(),
			this.computerDashboardRepository.countByRegion(),
			this.computerDashboardRepository.countActiveEmployees(),
			this.computerDashboardRepository.countTotalAgencies(),
			this.computerDashboardRepository.countTotalHDD()
		])
		return {
			total,
			activeEmployees,
			totalAgencies,
			status,
			category,
			brand,
			region,
			hardDrive
		}
	}
}

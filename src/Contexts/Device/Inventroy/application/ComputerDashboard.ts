import { type ComputerDashboardRepository } from '../domain/ComputerDashboardRepository'
import { ComputerMemoryRamModulesRepository } from '../domain/ComputerMemoryRamModulesRepository'
import { type ComputerMemoryRamRepository } from '../domain/ComputerMemoryRamRepositoyr'
import { type CountOSByRegionRepository } from '../domain/CountOSByRegionRepository'

export class ComputerDashboard {
	constructor(
		private readonly computerDashboardRepository: ComputerDashboardRepository,
		private readonly countOSByRegionRepository: CountOSByRegionRepository,
		private readonly computerMemoryRamRepository: ComputerMemoryRamRepository,
		private readonly computerMemoryRamModulesRepository: ComputerMemoryRamModulesRepository
	) {}

	async run(): Promise<{}> {
		const [
			total,
			status,
			category,
			brand,
			region,
			activeEmployees,
			totalAgencies,
			hardDrive,
			operatingSystem,
			memoryRamCapacity,
			modulosMemoryRam,
			operatingSystemByRegion
		] = await Promise.all([
			this.computerDashboardRepository.countTotal(),
			this.computerDashboardRepository.countByStatus(),
			this.computerDashboardRepository.countByCategory(),
			this.computerDashboardRepository.countByBrand(),
			this.computerDashboardRepository.countByRegion(),
			this.computerDashboardRepository.countActiveEmployees(),
			this.computerDashboardRepository.countTotalAgencies(),
			this.computerDashboardRepository.countTotalHDD(),
			this.computerDashboardRepository.countTotalOperatingSystem(),
			this.computerMemoryRamRepository.run(),
			this.computerMemoryRamModulesRepository.run(),
			this.countOSByRegionRepository.run()
		])
		return {
			total,
			activeEmployees,
			totalAgencies,
			status,
			category,
			brand,
			region,
			hardDrive,
			operatingSystem,
			memoryRamCapacity,
			modulosMemoryRam,
			operatingSystemByRegion
		}
	}
}

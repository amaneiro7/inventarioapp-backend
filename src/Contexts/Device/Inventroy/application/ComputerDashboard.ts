import { type ComputerDashboardRepository } from '../domain/ComputerDashboardRepository'
import { ComputerMemoryRamModulesRepository } from '../domain/ComputerMemoryRamModulesRepository'
import { type ComputerMemoryRamRepository } from '../domain/ComputerMemoryRamRepositoyr'
import { type CountOSByRegionRepository } from '../domain/CountOSByRegionRepository'
import { type TotalActiveUsersRepository } from '../domain/TotalActiveUsersRepository'
import { type TotalAgenciesRepository } from '../domain/TotalAgenciesRepository'
import { type TotalComputerRepository } from '../domain/TotalComputerRepository'

export class ComputerDashboard {
	constructor(
		private readonly computerDashboardRepository: ComputerDashboardRepository,
		private readonly countOSByRegionRepository: CountOSByRegionRepository,
		private readonly computerMemoryRamRepository: ComputerMemoryRamRepository,
		private readonly computerMemoryRamModulesRepository: ComputerMemoryRamModulesRepository,
		private readonly totalComputerRepository: TotalComputerRepository,
		private readonly totalActiveUsersRepository: TotalActiveUsersRepository,
		private readonly totalAgenciesRepository: TotalAgenciesRepository
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
			this.totalComputerRepository.run(),
			this.computerDashboardRepository.countByStatus(),
			this.computerDashboardRepository.countByCategory(),
			this.computerDashboardRepository.countByBrand(),
			this.computerDashboardRepository.countByRegion(),
			this.totalActiveUsersRepository.run(),
			this.totalAgenciesRepository.run(),
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

import { type ComputerDashboardRepository } from '../domain/ComputerDashboardRepository'
import { type ComputerMemoryRamModulesRepository } from '../domain/ComputerMemoryRamModulesRepository'
import { type ComputerMemoryRamRepository } from '../domain/ComputerMemoryRamRepositoyr'
import { type CountByCategoryRepository } from '../domain/CountByCategoryRepository'
import { type CountByRegionRepository } from '../domain/CountByRegionRepository'
import { type CountOSByRegionRepository } from '../domain/CountOSByRegionRepository'
import { type CountTotalOperatingSystemRepository } from '../domain/CountTotalOperatingSystemRepository'
import { type TotalActiveUsersRepository } from '../domain/TotalActiveUsersRepository'
import { type TotalAgenciesRepository } from '../domain/TotalAgenciesRepository'
import { type TotalComputerRepository } from '../domain/TotalComputerRepository'

/**
 * @class ComputerDashboard
 * @description Application service to orchestrate the fetching of all data required for the computer-specific dashboard.
 * It gathers data from multiple repositories and aggregates it into a single response.
 */
export class ComputerDashboard {
	private readonly computerDashboardRepository: ComputerDashboardRepository
	private readonly countOSByRegionRepository: CountOSByRegionRepository
	private readonly computerMemoryRamRepository: ComputerMemoryRamRepository
	private readonly computerMemoryRamModulesRepository: ComputerMemoryRamModulesRepository
	private readonly totalComputerRepository: TotalComputerRepository
	private readonly totalActiveUsersRepository: TotalActiveUsersRepository
	private readonly totalAgenciesRepository: TotalAgenciesRepository
	private readonly countByCategoryRepository: CountByCategoryRepository
	private readonly countTotalOperatingSystemRepository: CountTotalOperatingSystemRepository
	private readonly countByRegionRepository: CountByRegionRepository
	constructor({
		computerDashboardRepository,
		countOSByRegionRepository,
		computerMemoryRamRepository,
		computerMemoryRamModulesRepository,
		totalComputerRepository,
		totalActiveUsersRepository,
		totalAgenciesRepository,
		countByCategoryRepository,
		countTotalOperatingSystemRepository,
		countByRegionRepository
	}: {
		computerDashboardRepository: ComputerDashboardRepository
		countOSByRegionRepository: CountOSByRegionRepository
		computerMemoryRamRepository: ComputerMemoryRamRepository
		computerMemoryRamModulesRepository: ComputerMemoryRamModulesRepository
		totalComputerRepository: TotalComputerRepository
		totalActiveUsersRepository: TotalActiveUsersRepository
		totalAgenciesRepository: TotalAgenciesRepository
		countByCategoryRepository: CountByCategoryRepository
		countTotalOperatingSystemRepository: CountTotalOperatingSystemRepository
		countByRegionRepository: CountByRegionRepository
	}) {
		this.computerDashboardRepository = computerDashboardRepository
		this.countOSByRegionRepository = countOSByRegionRepository
		this.computerMemoryRamRepository = computerMemoryRamRepository
		this.computerMemoryRamModulesRepository = computerMemoryRamModulesRepository
		this.totalComputerRepository = totalComputerRepository
		this.totalActiveUsersRepository = totalActiveUsersRepository
		this.totalAgenciesRepository = totalAgenciesRepository
		this.countByCategoryRepository = countByCategoryRepository
		this.countTotalOperatingSystemRepository = countTotalOperatingSystemRepository
		this.countByRegionRepository = countByRegionRepository
	}

	/**
	 * @method run
	 * @description Executes all the necessary data-fetching operations in parallel and returns the combined result.
	 * @returns {Promise<object>} A promise that resolves to the complete dashboard data object.
	 */
	async run(): Promise<object> {
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
			this.countByCategoryRepository.run(),
			this.computerDashboardRepository.countByBrand(),
			this.countByRegionRepository.run(),
			this.totalActiveUsersRepository.run(),
			this.totalAgenciesRepository.run(),
			this.computerDashboardRepository.countTotalHDD(),
			this.countTotalOperatingSystemRepository.run(),
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

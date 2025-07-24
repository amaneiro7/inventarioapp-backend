import { type TotalActiveUsersRepository } from '../domain/TotalActiveUsersRepository'
import { type TotalAdministrativeSitesRepository } from '../domain/TotalAdministrativeSitesRepository'
import { type TotalAgenciesRepository } from '../domain/TotalAgenciesRepository'
import { type TotalComputerRepository } from '../domain/TotalComputerRepository'
import { type TotalCountByCategoryRepository } from '../domain/TotalCountByCategoryRepository'
import { type TotalFinantialPrintersRepository } from '../domain/TotalFinantialPrintersRepository'
import { type TotalPrintersRepository } from '../domain/TotalPrintersRepository'
import { type TotalScreensRepository } from '../domain/TotalScreensRepository'

export class GeneralDashboard {
	private readonly totalComputerRepository: TotalComputerRepository
	private readonly totalScreensRepository: TotalScreensRepository
	private readonly totalPrintersRepository: TotalPrintersRepository
	private readonly totalFinantialPrintersRepository: TotalFinantialPrintersRepository
	private readonly totalActiveUsersRepository: TotalActiveUsersRepository
	private readonly totalAgenciesRepository: TotalAgenciesRepository
	private readonly totalAdministrativeSitesRepository: TotalAdministrativeSitesRepository
	private readonly totalCountByCategoryRepository: TotalCountByCategoryRepository
	constructor({
		totalComputerRepository,
		totalScreensRepository,
		totalPrintersRepository,
		totalFinantialPrintersRepository,
		totalActiveUsersRepository,
		totalAgenciesRepository,
		totalAdministrativeSitesRepository,
		totalCountByCategoryRepository
	}: {
		totalComputerRepository: TotalComputerRepository
		totalScreensRepository: TotalScreensRepository
		totalPrintersRepository: TotalPrintersRepository
		totalFinantialPrintersRepository: TotalFinantialPrintersRepository
		totalActiveUsersRepository: TotalActiveUsersRepository
		totalAgenciesRepository: TotalAgenciesRepository
		totalAdministrativeSitesRepository: TotalAdministrativeSitesRepository
		totalCountByCategoryRepository: TotalCountByCategoryRepository
	}) {
		this.totalComputerRepository = totalComputerRepository
		this.totalScreensRepository = totalScreensRepository
		this.totalPrintersRepository = totalPrintersRepository
		this.totalFinantialPrintersRepository = totalFinantialPrintersRepository
		this.totalActiveUsersRepository = totalActiveUsersRepository
		this.totalAgenciesRepository = totalAgenciesRepository
		this.totalAdministrativeSitesRepository = totalAdministrativeSitesRepository
		this.totalCountByCategoryRepository = totalCountByCategoryRepository
	}

	async run(): Promise<{}> {
		const [
			totalByCategory,
			totalComputer,
			totalScreens,
			totalPrinters,
			totalFinantialPrinters,
			totalActiveUsers,
			totalAgencies,
			totalAdministrativeSites
		] = await Promise.all([
			this.totalCountByCategoryRepository.run(),
			this.totalComputerRepository.run(),
			this.totalScreensRepository.run(),
			this.totalPrintersRepository.run(),
			this.totalFinantialPrintersRepository.run(),
			this.totalActiveUsersRepository.run(),
			this.totalAgenciesRepository.run(),
			this.totalAdministrativeSitesRepository.run()
		])
		return {
			totalByCategory,
			totalComputer,
			totalScreens,
			totalPrinters,
			totalFinantialPrinters,
			totalActiveUsers,
			totalAgencies,
			totalAdministrativeSites
		}
	}
}

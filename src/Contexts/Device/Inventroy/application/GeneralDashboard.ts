import { type TotalActiveUsersRepository } from '../domain/TotalActiveUsersRepository'
import { type TotalAdministrativeSitesRepository } from '../domain/TotalAdministrativeSitesRepository'
import { type TotalAgenciesRepository } from '../domain/TotalAgenciesRepository'
import { type TotalComputerRepository } from '../domain/TotalComputerRepository'
import { type TotalCountByCategoryRepository } from '../domain/TotalCountByCategoryRepository'
import { type TotalFinantialPrintersRepository } from '../domain/TotalFinantialPrintersRepository'
import { type TotalPrintersRepository } from '../domain/TotalPrintersRepository'
import { type TotalScreensRepository } from '../domain/TotalScreensRepository'

export class GeneralDashboard {
	constructor(
		private readonly totalComputerRepository: TotalComputerRepository,
		private readonly totalScreensRepository: TotalScreensRepository,
		private readonly totalPrintersRepository: TotalPrintersRepository,
		private readonly totalFinantialPrintersRepository: TotalFinantialPrintersRepository,
		private readonly totalActiveUsersRepository: TotalActiveUsersRepository,
		private readonly totalAgenciesRepository: TotalAgenciesRepository,
		private readonly totalAdministrativeSitesRepository: TotalAdministrativeSitesRepository,
		private readonly totalCountByCategoryRepository: TotalCountByCategoryRepository
	) {}

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

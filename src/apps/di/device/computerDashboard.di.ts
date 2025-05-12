import { type AwilixContainer, asClass } from 'awilix'

import { SequelizeComputerDashboardRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeDashboardRepository'
import { ComputerDashboardGetController } from '../../controllers/device/device-computer-dashboard.controller'
import { SequelizeCountOSByRegionRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountOSByRegionRepository'
import { SequelizeComputerMemoryRamRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeComputerMemoryRamRepository'
import { SequelizeComputerMemoryRamModulesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeComputerMemoryRamModulesRepository'
import { SequelizeTotalComputerRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalComputerRepository'
import { SequelizeTotalScreensRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalScreensRepository'
import { SequelizeTotalPrintersRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalPrintersRepository'
import { SequelizeTotalFinantialPrintersRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalFinantialPrintersRepository'
import { SequelizeTotalActiveUsersRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalActiveUsersRepository'
import { SequelizeTotalAgenciesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalAgenciesRepository'
import { SequelizeTotalAdministrativeSitesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalAdministativeSitesRepository'
import { GeneralDashboard } from '../../../Contexts/Device/Inventroy/application/GeneralDashboard'
import { GeneralDashboardGetController } from '../../controllers/dashboard/general-dashboard.controller'
import { ComputerDashboard } from '../../../Contexts/Device/Inventroy/application/ComputerDashboard'
import { SequelizeTotalCountByCategoryRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeTotalCountByCategoryRepository'
import { SequelizeCountByCategoryRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountByCategoryRepository'
import { SequelizeCountByRegionRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountByRegionRepository'
import { SequelizeCountTotalOperatingSystemRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountTotalOperatingSystemRepository'

export enum ComputerDashboardDependencies {
	Repository = 'computerDashboardRepository',
	ComputerDashboard = 'computerDashboard',
	GeneralDashboard = 'generalDashboard',
	ComputerDashboardGetController = 'computerDashboardGetController',
	GeneralDashboardGetController = 'generalDashboardGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		computerDashboardRepository: asClass(SequelizeComputerDashboardRepository).singleton(),
		countOSByRegionRepository: asClass(SequelizeCountOSByRegionRepository).singleton(),
		computerMemoryRamRepository: asClass(SequelizeComputerMemoryRamRepository).singleton(),

		computerMemoryRamModulesRepository: asClass(SequelizeComputerMemoryRamModulesRepository).singleton(),

		totalComputerRepository: asClass(SequelizeTotalComputerRepository).singleton(),
		totalScreensRepository: asClass(SequelizeTotalScreensRepository).singleton(),
		totalPrintersRepository: asClass(SequelizeTotalPrintersRepository).singleton(),
		totalFinantialPrintersRepository: asClass(SequelizeTotalFinantialPrintersRepository).singleton(),
		totalActiveUsersRepository: asClass(SequelizeTotalActiveUsersRepository).singleton(),
		totalAgenciesRepository: asClass(SequelizeTotalAgenciesRepository).singleton(),
		totalAdministrativeSitesRepository: asClass(SequelizeTotalAdministrativeSitesRepository).singleton(),
		totalCountByCategoryRepository: asClass(SequelizeTotalCountByCategoryRepository).singleton(),
		countByCategoryRepository: asClass(SequelizeCountByCategoryRepository).singleton(),
		countByRegionRepository: asClass(SequelizeCountByRegionRepository).singleton(),
		countTotalOperatingSystemRepository: asClass(SequelizeCountTotalOperatingSystemRepository).singleton(),

		computerDashboard: asClass(ComputerDashboard),
		generalDashboard: asClass(GeneralDashboard),

		computerDashboardGetController: asClass(ComputerDashboardGetController),
		generalDashboardGetController: asClass(GeneralDashboardGetController)
	})
}

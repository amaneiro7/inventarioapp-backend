import { type AwilixContainer, asClass } from 'awilix'
import { ComputerDashboard } from '../../../Contexts/Device/Inventroy/application/ComputerDashboard'
import { SequelizeComputerDashboardRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeDashboardRepository'
import { ComputerDashboardGetController } from '../../controllers/device/device-computer-dashboard.controller'
import { SequelizeCountOSByRegionRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeCountOSByRegionRepository'
import { SequelizeComputerMemoryRamRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeComputerMemoryRamRepository'
import { SequelizeComputerMemoryRamModulesRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeComputerMemoryRamModulesRepository'

export enum ComputerDashboardDependencies {
	Repository = 'computerDashboardRepository',
	ComputerDashboard = 'computerDashboard',
	ComputerDashboardGetController = 'computerDashboardGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		computerDashboardRepository: asClass(SequelizeComputerDashboardRepository).singleton(),
		countOSByRegionRepository: asClass(SequelizeCountOSByRegionRepository).singleton(),
		computerMemoryRamRepository: asClass(SequelizeComputerMemoryRamRepository).singleton(),
		computerMemoryRamModulesRepository: asClass(SequelizeComputerMemoryRamModulesRepository).singleton(),
		computerDashboard: asClass(ComputerDashboard),
		computerDashboardGetController: asClass(ComputerDashboardGetController)
	})
}

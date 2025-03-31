import { type AwilixContainer, asClass } from 'awilix'
import { ComputerDashboard } from '../../../Contexts/Device/Inventroy/application/ComputerDashboard'
import { SequelizeComputerDashboardRepository } from '../../../Contexts/Device/Inventroy/infra/sequelize/sequelizeDashboardRepository'
import { ComputerDashboardGetController } from '../../controllers/device/device-computer-dashboard.controller'

export enum ComputerDashboardDependencies {
	Repository = 'computerDashboardRepository',
	ComputerDashboard = 'computerDashboard',
	ComputerDashboardGetController = 'computerDashboardGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		computerDashboardRepository: asClass(SequelizeComputerDashboardRepository).singleton(),
		computerDashboard: asClass(ComputerDashboard),
		computerDashboardGetController: asClass(ComputerDashboardGetController)
	})
}

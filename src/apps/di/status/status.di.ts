import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeStatusRepository } from '../../../Contexts/Device/Status/infrastructure/sequelize/SequelizeStatusRepository'
import { StatusFinderAll } from '../../../Contexts/Device/Status/application/StatusFinderAll'
import { StatusGetAllController } from '../../controllers/status/status.get-all.controller'
import { StatusDashboardGetController } from '../../controllers/status/status-dashboard.controller'
import { StatusDashboard } from '../../../Contexts/Device/Inventory/application/StatusDashboard'
import { SequelizeStatusDashboardRepository } from '../../../Contexts/Device/Inventory/infra/sequelize/sequelizeStatusRepository'

export enum StatusDependencies {
	Repository = 'statusRepository',
	FinderAll = 'statusFinderAll',
	GetAllController = 'statusGetAllController',
	StatusDashboard = 'statusDashboard',
	StatusDashboardGetController = 'statusDashboardGetController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		statusRepository: asClass(SequelizeStatusRepository).singleton(),
		statusFinderAll: asClass(StatusFinderAll),
		statusGetAllController: asClass(StatusGetAllController),
		statusDashboardRepository: asClass(SequelizeStatusDashboardRepository).singleton(),
		statusDashboard: asClass(StatusDashboard),
		statusDashboardGetController: asClass(StatusDashboardGetController)
	})
}

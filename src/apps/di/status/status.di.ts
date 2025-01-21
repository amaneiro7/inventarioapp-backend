import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeStatusRepository } from '../../../Contexts/Device/Status/infrastructure/sequelize/SequelizeStatusRepository'
import { StatusFinderAll } from '../../../Contexts/Device/Status/application/StatusFinder'
import { StatusGetAllController } from '../../controllers/status/status.get-all.controller'

export enum StatusDependencies {
	Repository = 'statusRepository',
	FinderAll = 'statusFinderAll',
	GetAllController = 'statusGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		statusRepository: asClass(SequelizeStatusRepository).singleton(),
		statusFinderAll: asClass(StatusFinderAll),
		statusGetAllController: asClass(StatusGetAllController)
	})
}

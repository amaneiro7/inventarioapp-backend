import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeLocationStatusRepository } from '../../../Contexts/Location/LocationStatus/infrastrcuture/sequelize/SequelizeLocationStatusRepository'
import { LocationStatusFinderAll } from '../../../Contexts/Location/LocationStatus/application/LocationStatusFinderAll'
import { LocationStatusGetAllController } from '../../controllers/location/location-status.get-all.controller'

export enum LocationStatusDependencies {
	Repository = 'locationStatusRepository',
	FinderAll = 'locationStatusFinderAll',
	GetAllController = 'locationStatusGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		locationStatusRepository: asClass(SequelizeLocationStatusRepository).singleton(),
		locationStatusFinderAll: asClass(LocationStatusFinderAll),
		locationStatusGetAllController: asClass(LocationStatusGetAllController)
	})
}

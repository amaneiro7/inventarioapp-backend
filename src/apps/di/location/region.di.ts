import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeRegionRepository } from '../../../Contexts/Location/Region/infrastrcuture/sequelize/SequelizeCityRepository'
import { RegionFinderAll } from '../../../Contexts/Location/Region/application/RegionFinderAll'
import { RegionGetAllController } from '../../controllers/location/region.get-all.controller'

export enum RegionDependencies {
	Repository = 'regionRepository',
	FinderAll = 'regionFinderAll',
	GetAllController = 'regionGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		regionRepository: asClass(SequelizeRegionRepository).singleton(),
		regionFinderAll: asClass(RegionFinderAll),
		regionGetAllController: asClass(RegionGetAllController)
	})
}

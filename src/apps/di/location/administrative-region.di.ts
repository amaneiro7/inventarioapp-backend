import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeAdministrativeRegionRepository } from '../../../Contexts/Location/AdministrativeRegion/infrastructure/sequelize/SequelizeAdministrativeRepository'
import { AdministrativeRegionFinderAll } from '../../../Contexts/Location/AdministrativeRegion/application/AdministrativeRegionFinderAll'
import { AdministrativeRegionGetAllController } from '../../controllers/location/administrative-region.get-all.controller'

export enum AdministrativeRegionDependencies {
	Repository = 'administrativeRegionRepository',
	FinderAll = 'administrativeRegionFinderAll',
	GetAllController = 'administrativeRegionGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		administrativeRegionRepository: asClass(SequelizeAdministrativeRegionRepository).singleton(),
		administrativeRegionFinderAll: asClass(AdministrativeRegionFinderAll),
		administrativeRegionGetAllController: asClass(AdministrativeRegionGetAllController)
	})
}

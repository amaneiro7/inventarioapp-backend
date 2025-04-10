import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeRegionRepository } from '../../../Contexts/Location/Region/infrastrcuture/sequelize/SequelizeRegionRepository'
import { RegionFinderAll } from '../../../Contexts/Location/Region/application/RegionFinderAll'
import { RegionGetAllController } from '../../controllers/location/region.get-all.controller'
import { RegionUpdater } from '../../../Contexts/Location/Region/application/RegionUpdater'
import { RegionPatchController } from '../../controllers/location/region.patch.controller'
import { RegionFinder } from '../../../Contexts/Location/Region/application/RegionFinder'
import { RegionGetController } from '../../controllers/location/region.get.controller'

export enum RegionDependencies {
	Repository = 'regionRepository',
	FinderAll = 'regionFinderAll',
	Finder = 'regionFinder',
	Updater = 'regionUpdater',

	GetController = 'regionGetController',
	GetAllController = 'regionGetAllController',
	PatchController = 'regionPatchController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		regionRepository: asClass(SequelizeRegionRepository).singleton(),
		regionFinder: asClass(RegionFinder),
		regionFinderAll: asClass(RegionFinderAll),
		regionUpdater: asClass(RegionUpdater),
		regionGetController: asClass(RegionGetController),
		regionGetAllController: asClass(RegionGetAllController),
		regionPatchController: asClass(RegionPatchController)
	})
}

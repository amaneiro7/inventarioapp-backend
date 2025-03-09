import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeCityRepository } from '../../../Contexts/Location/City/infrastructure/sequelize/SequelizeCityRepository'
import { CityFinderAll } from '../../../Contexts/Location/City/application/CityFinderAll'
import { CityGetAllController } from '../../controllers/location/city.get-all.controller'
import { CityCreator } from '../../../Contexts/Location/City/application/CityCreator'
import { CityFinder } from '../../../Contexts/Location/City/application/CityFinder'
import { CityUpdater } from '../../../Contexts/Location/City/application/CityUpdater'
import { CityGetController } from '../../controllers/location/city.get.controller'
import { CityPostController } from '../../controllers/location/city.post.controller'
import { CityPatchController } from '../../controllers/location/city.patch.controller'

export enum CityDependencies {
	Repository = 'cityRepository',
	Creator = 'cityCreator',
	Finder = 'cityFinder',
	FinderAll = 'cityFinderAll',
	Updater = 'cityUpdater',
	GetController = 'cityGetController',
	GetAllController = 'cityGetAllController',
	PostController = 'cityPostController',
	PatchController = 'cityPatchController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		cityRepository: asClass(SequelizeCityRepository).singleton(),
		cityCreator: asClass(CityCreator),
		cityFinder: asClass(CityFinder),
		cityFinderAll: asClass(CityFinderAll),
		cityUpdater: asClass(CityUpdater),
		cityGetController: asClass(CityGetController),
		cityGetAllController: asClass(CityGetAllController),
		cityPostController: asClass(CityPostController),
		cityPatchController: asClass(CityPatchController)
	})
}

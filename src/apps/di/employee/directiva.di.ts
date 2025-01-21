import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeDirectivaRepository } from '../../../Contexts/employee/Directiva/infrastructure/sequelize/sequelizeDirectivaRepository'
import { DirectivaUpdater } from '../../../Contexts/employee/Directiva/application/DirectivaUpdater'
import { DirectivaCreator } from '../../../Contexts/employee/Directiva/application/DirectivaCreator'
import { DirectivaFinder } from '../../../Contexts/employee/Directiva/application/DirectivaFinder'
import { DirectivaFinderAll } from '../../../Contexts/employee/Directiva/application/DirectivaFinderAll'
import { DirectivaGetAllController } from '../../controllers/employee/directiva.get-all.controller'
import { DirectivaGetController } from '../../controllers/employee/directiva.get.controller'
import { DirectivaPostController } from '../../controllers/employee/directiva.post.controller'
import { DirectivaPatchController } from '../../controllers/employee/directiva.patch.controller'

export enum DirectivaDependencies {
	Repository = 'directivaRepository',
	FinderAll = 'directivaFinderAll',
	Finder = 'directivaFinder',
	Creator = 'directivaCreator',
	Updater = 'directivaUpdater',
	GetAllController = 'directivaGetAllController',
	GetController = 'directivaGetController',
	PostController = 'directivaPostController',
	PatchController = 'directivaPatchController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		directivaRepository: asClass(SequelizeDirectivaRepository).singleton(),
		directivaFinderAll: asClass(DirectivaFinderAll),
		directivaFinder: asClass(DirectivaFinder),
		directivaCreator: asClass(DirectivaCreator),
		directivaUpdater: asClass(DirectivaUpdater),
		directivaGetAllController: asClass(DirectivaGetAllController),
		directivaGetController: asClass(DirectivaGetController),
		directivaPostController: asClass(DirectivaPostController),
		directivaPatchController: asClass(DirectivaPatchController)
	})
}

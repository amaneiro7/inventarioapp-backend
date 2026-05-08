import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeUnidadRepository } from '../../../Contexts/employee/Unidad/infrastructure/sequelize/sequelizeUnidadRepository'
import { UnidadUpdater } from '../../../Contexts/employee/Unidad/application/UnidadUpdater'
import { UnidadCreator } from '../../../Contexts/employee/Unidad/application/UnidadCreator'
import { UnidadFinder } from '../../../Contexts/employee/Unidad/application/UnidadFInder'
import { UnidadFinderAll } from '../../../Contexts/employee/Unidad/application/UnidadFinderAll'
import { UnidadGetAllController } from '../../controllers/employee/unidad.get-all.controller'
import { UnidadGetController } from '../../controllers/employee/unidad.get.controller'
import { UnidadPostController } from '../../controllers/employee/unidad.post.controller'
import { UnidadPatchController } from '../../controllers/employee/unidad.patch.controller'

export enum UnidadDependencies {
	Repository = 'unidadRepository',
	FinderAll = 'unidadFinderAll',
	Finder = 'unidadFinder',
	Creator = 'unidadCreator',
	Updater = 'unidadUpdater',
	GetAllController = 'unidadGetAllController',
	GetController = 'unidadGetController',
	PostController = 'unidadPostController',
	PatchController = 'unidadPatchController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		unidadRepository: asClass(SequelizeUnidadRepository).singleton(),
		unidadFinderAll: asClass(UnidadFinderAll),
		unidadFinder: asClass(UnidadFinder),
		unidadCreator: asClass(UnidadCreator),
		unidadUpdater: asClass(UnidadUpdater),
		unidadGetAllController: asClass(UnidadGetAllController),
		unidadGetController: asClass(UnidadGetController),
		unidadPostController: asClass(UnidadPostController),
		unidadPatchController: asClass(UnidadPatchController)
	})
}

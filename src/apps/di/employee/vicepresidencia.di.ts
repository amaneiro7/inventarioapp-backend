import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeVicepresidenciaRepository } from '../../../Contexts/employee/Vicepresidencia/infrastructure/sequelize/SequelizeVicepresidenciaRepository'
import { VicepresidenciaFinderAll } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaFinderAll'
import { VicepresidenciaFinder } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaFinder'
import { VicepresidenciaCreator } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaCreator'
import { VicepresidenciaUpdater } from '../../../Contexts/employee/Vicepresidencia/application/VicepresidenciaUpdater'
import { VicepresidenciaGetAllController } from '../../controllers/employee/vicepresidencia.get-all.controller'
import { VicepresidenciaGetController } from '../../controllers/employee/vicepresidencia.get.controller'
import { VicepresidenciaPostController } from '../../controllers/employee/vicepresidencia.post.controller'
import { VicepresidenciaPatchController } from '../../controllers/employee/vicepresidencia.patch.controller'

export enum VicepresidenciaDependencies {
	Repository = 'vicepresidenciaRepository',
	FinderAll = 'vicepresidenciaFinderAll',
	Finder = 'vicepresidenciaFinder',
	Creator = 'vicepresidenciaCreator',
	Updater = 'vicepresidenciaUpdater',
	GetAllController = 'vicepresidenciaGetAllController',
	GetController = 'vicepresidenciaGetController',
	PostController = 'vicepresidenciaPostController',
	PatchController = 'vicepresidenciaPatchController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		vicepresidenciaRepository: asClass(SequelizeVicepresidenciaRepository).singleton(),
		vicepresidenciaFinderAll: asClass(VicepresidenciaFinderAll),
		vicepresidenciaFinder: asClass(VicepresidenciaFinder),
		vicepresidenciaCreator: asClass(VicepresidenciaCreator),
		vicepresidenciaUpdater: asClass(VicepresidenciaUpdater),
		vicepresidenciaGetAllController: asClass(VicepresidenciaGetAllController),
		vicepresidenciaGetController: asClass(VicepresidenciaGetController),
		vicepresidenciaPostController: asClass(VicepresidenciaPostController),
		vicepresidenciaPatchController: asClass(VicepresidenciaPatchController)
	})
}

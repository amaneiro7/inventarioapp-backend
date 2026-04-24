import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeISPLinkRepository } from '../../../Contexts/Location/ISPLinks/infrastructure/sequelize/SequelizeISPLinkRepository'
import { ISPLinkCreator } from '../../../Contexts/Location/ISPLinks/application/ISPLinkCreator'
import { ISPLinkFinder } from '../../../Contexts/Location/ISPLinks/application/ISPLinkFinder'
import { ISPLinkFinderAll } from '../../../Contexts/Location/ISPLinks/application/ISPLinkFinderAll'
import { ISPLinkUpdater } from '../../../Contexts/Location/ISPLinks/application/ISPLinkUpdater'
import { ISPLinkGetController } from '../../controllers/location/isp-link.get.controller'
import { ISPLinkGetAllController } from '../../controllers/location/isp-link.get-all.controller'
import { ISPLinkPostController } from '../../controllers/location/isp-link.post.controller'
import { ISPLinkPatchController } from '../../controllers/location/isp-link.patch.controller'

export enum ISPLinkDependencies {
	Repository = 'ispLinkRepository',
	Creator = 'ispLinkCreator',
	Finder = 'ispLinkFinder',
	FinderAll = 'ispLinkFinderAll',
	Updater = 'ispLinkUpdater',
	GetController = 'ispLinkGetController',
	GetAllController = 'ispLinkGetAllController',
	PostController = 'ispLinkPostController',
	PatchController = 'ispLinkPatchController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[ISPLinkDependencies.Repository]: asClass(SequelizeISPLinkRepository).singleton(),
		[ISPLinkDependencies.Creator]: asClass(ISPLinkCreator),
		[ISPLinkDependencies.Finder]: asClass(ISPLinkFinder),
		[ISPLinkDependencies.FinderAll]: asClass(ISPLinkFinderAll),
		[ISPLinkDependencies.Updater]: asClass(ISPLinkUpdater),
		[ISPLinkDependencies.GetController]: asClass(ISPLinkGetController),
		[ISPLinkDependencies.GetAllController]: asClass(ISPLinkGetAllController),
		[ISPLinkDependencies.PostController]: asClass(ISPLinkPostController),
		[ISPLinkDependencies.PatchController]: asClass(ISPLinkPatchController)
	})
}

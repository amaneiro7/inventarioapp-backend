import { type AwilixContainer, asClass } from 'awilix'
import { PermissionFinder } from '../../../Contexts/AccessControl/Permission/application/PermissionFinder'
import { PermissionsFinderAll } from '../../../Contexts/AccessControl/Permission/application/PermissionsFinderAll'
import { PermissionCreator } from '../../../Contexts/AccessControl/Permission/application/PermissionCreator'
import { PermissionRemover } from '../../../Contexts/AccessControl/Permission/application/PermissionRemover'
import { SequelizePermissionRepository } from '../../../Contexts/AccessControl/Permission/infrastructure/sequelize/SequelizePermissionRepository'
import { PermissionGetController } from '../../controllers/access-control/permission.get.controller'
import { PermissionGetAllController } from '../../controllers/access-control/permission.get-all.controller'
import { PermissionPostController } from '../../controllers/access-control/permission.post.controller'
import { PermissionDeleteController } from '../../controllers/access-control/permission.delete.controller'

export enum PermissionDependencies {
	Repository = 'permissionRepository',
	Finder = 'permissionFinder',
	FinderAll = 'permissionFinderAll',
	Creator = 'permissionCreator',
	Remover = 'permissionRemover',
	GetController = 'permissionGetController',
	GetAllController = 'permissionGetAllController',
	PostController = 'permissionPostController',
	DeleteController = 'permissionDeleteController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[PermissionDependencies.Repository]: asClass(SequelizePermissionRepository).singleton(),
		[PermissionDependencies.Finder]: asClass(PermissionFinder),
		[PermissionDependencies.FinderAll]: asClass(PermissionsFinderAll),
		[PermissionDependencies.Creator]: asClass(PermissionCreator),
		[PermissionDependencies.Remover]: asClass(PermissionRemover),
		[PermissionDependencies.GetController]: asClass(PermissionGetController),
		[PermissionDependencies.GetAllController]: asClass(PermissionGetAllController),
		[PermissionDependencies.PostController]: asClass(PermissionPostController),
		[PermissionDependencies.DeleteController]: asClass(PermissionDeleteController)
	})
}

import { type AwilixContainer, asClass } from 'awilix'
import { PermissionGroupFinder } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupFinder'
import { PermissionGroupFinderAll } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupFinderAll'
import { PermissionGroupCreator } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupCreator'
import { PermissionGroupRemover } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupRemover'
import { PermissionGroupUpdater } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupUpdater'
import { SequelizePermissionGroupRepository } from '../../../Contexts/AccessControl/PermissionGroup/infrastructure/sequelize/SequelizePermissionGroupRepository'
import { PermissionGroupGetController } from '../../controllers/access-control/permission-group.get.controller'
import { PermissionGroupGetAllController } from '../../controllers/access-control/permission-group.get-all.controller'
import { PermissionGroupPostController } from '../../controllers/access-control/permission-group.post.controller'
import { PermissionGroupPatchController } from '../../controllers/access-control/permission-group.patch.controller'
import { PermissionGroupDeleteController } from '../../controllers/access-control/permission-group.delete.controller'

export enum PermissionGroupDependencies {
	Repository = 'permissionGroupRepository',
	Finder = 'permissionGroupFinder',
	FinderAll = 'permissionGroupFinderAll',
	Creator = 'permissionGroupCreator',
	Updater = 'permissionGroupUpdater',
	Remover = 'permissionGroupRemover',
	GetController = 'permissionGroupGetController',
	GetAllController = 'permissionGroupGetAllController',
	PostController = 'permissionGroupPostController',
	PatchController = 'permissionGroupPatchController',
	DeleteController = 'permissionGroupDeleteController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[PermissionGroupDependencies.Repository]: asClass(SequelizePermissionGroupRepository).singleton(),
		[PermissionGroupDependencies.Finder]: asClass(PermissionGroupFinder),
		[PermissionGroupDependencies.FinderAll]: asClass(PermissionGroupFinderAll),
		[PermissionGroupDependencies.Creator]: asClass(PermissionGroupCreator),
		[PermissionGroupDependencies.Updater]: asClass(PermissionGroupUpdater),
		[PermissionGroupDependencies.Remover]: asClass(PermissionGroupRemover),
		[PermissionGroupDependencies.GetController]: asClass(PermissionGroupGetController),
		[PermissionGroupDependencies.GetAllController]: asClass(PermissionGroupGetAllController),
		[PermissionGroupDependencies.PostController]: asClass(PermissionGroupPostController),
		[PermissionGroupDependencies.PatchController]: asClass(PermissionGroupPatchController),
		[PermissionGroupDependencies.DeleteController]: asClass(PermissionGroupDeleteController)
	})
}

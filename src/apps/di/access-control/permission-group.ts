import { type AwilixContainer, asClass } from 'awilix'
import { PermissionGroupFinder } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupFinder'
import { PermissionGroupFinderAll } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupFinderAll'
import { PermissionGroupCreator } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupCreator'
import { PermissionGroupRemover } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupRemover'
import { PermissionGroupUpdater } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupUpdater'
import { SequelizePermissionGroupRepository } from '../../../Contexts/AccessControl/PermissionGroup/infrastructure/sequelize/SequelizePermissionGroupRepository'

export enum PermissionGroupDependencies {
	Repository = 'permissionGroupRepository',
	Finder = 'permissionFinder',
	FinderAll = 'permissionFinderAll',
	Creator = 'permissionCreator',
	Updater = 'permissionUpdater',
	Remover = 'permissionRemover',
	GetController = 'permissionGetController',
	GetAllController = 'permissionGetAllController',
	PostController = 'permissionPostController',
	PatchController = 'permissionPatchController',
	DeleteController = 'permissionDeleteController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[PermissionGroupDependencies.Repository]: asClass(SequelizePermissionGroupRepository).singleton(),
		[PermissionGroupDependencies.Finder]: asClass(PermissionGroupFinder),
		[PermissionGroupDependencies.FinderAll]: asClass(PermissionGroupFinderAll),
		[PermissionGroupDependencies.Creator]: asClass(PermissionGroupCreator),
		[PermissionGroupDependencies.Updater]: asClass(PermissionGroupUpdater),
		[PermissionGroupDependencies.Remover]: asClass(PermissionGroupRemover)
		// [PermissionGroupDependencies.GetController]: asClass(PermissionGroupGetController),
		// [PermissionGroupDependencies.GetAllController]: asClass(PermissionGroupGetAllController),
		// [PermissionGroupDependencies.PostController]: asClass(PermissionGroupPostController),
		// [PermissionGroupDependencies.PatchController]: asClass(PermissionGroupPatchController),
		// [PermissionGroupDependencies.DeleteController]: asClass(PermissionGroupDeleteController),
		// [PermissionGroupDependencies.GetByCriteriaController]: asClass(PermissionGroupSearchByCriteriaController)
	})
}

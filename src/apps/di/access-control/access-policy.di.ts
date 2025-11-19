import { type AwilixContainer, asClass } from 'awilix'
import { SequelizeAccessPolicyRepository } from '../../../Contexts/AccessControl/AccessPolicy/infrastructure/sequelize/SequelizeAccessPolicyRepository'
import { AccessPolicyFinder } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyFInder'
import { AccessPolicyFinderAll } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyFinderAll'
import { AccessPolicyCreator } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyCreator'
import { AccessPolicyUpdater } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyUpdater'
import { AccessPolicyRemover } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyRemover'
import { AccessPolicyResolver } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyResolver'
import { AccessPolicyGetController } from '../../controllers/access-control/access-policy.get.controller'
import { AccessPolicyGetAllController } from '../../controllers/access-control/access-policy.get-all.controller'
import { AccessPolicyPostController } from '../../controllers/access-control/access-policy.post.controller'
import { AccessPolicyPatchController } from '../../controllers/access-control/access-policy.patch.controller'
import { AccessPolicyDeleteController } from '../../controllers/access-control/access-policy.delete.controller'
import { GetUserPermissions } from '../../../Contexts/AccessControl/AccessPolicy/application/GetUserPermissions'

export enum AccessPolicyDependencies {
	Repository = 'accessPolicyRepository',
	Finder = 'accessPolicyFinder',
	FinderAll = 'accessPolicyFinderAll',
	Creator = 'accessPolicyCreator',
	Updater = 'accessPolicyUpdater',
	Resolver = 'accessPolicyResolver',
	Remover = 'accessPolicyRemover',
	GetUserPermissions = 'getUserPermissions',
	GetController = 'accessPolicyGetController',
	GetAllController = 'accessPolicyGetAllController',
	PostController = 'accessPolicyPostController',
	PatchController = 'accessPolicyPatchController',
	DeleteController = 'accessPolicyDeleteController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[AccessPolicyDependencies.Repository]: asClass(SequelizeAccessPolicyRepository).singleton(),
		[AccessPolicyDependencies.Finder]: asClass(AccessPolicyFinder),
		[AccessPolicyDependencies.FinderAll]: asClass(AccessPolicyFinderAll),
		[AccessPolicyDependencies.Creator]: asClass(AccessPolicyCreator),
		[AccessPolicyDependencies.Updater]: asClass(AccessPolicyUpdater),
		[AccessPolicyDependencies.Remover]: asClass(AccessPolicyRemover),
		[AccessPolicyDependencies.Resolver]: asClass(AccessPolicyResolver),
		[AccessPolicyDependencies.GetUserPermissions]: asClass(GetUserPermissions),
		[AccessPolicyDependencies.GetController]: asClass(AccessPolicyGetController),
		[AccessPolicyDependencies.GetAllController]: asClass(AccessPolicyGetAllController),
		[AccessPolicyDependencies.PostController]: asClass(AccessPolicyPostController),
		[AccessPolicyDependencies.PatchController]: asClass(AccessPolicyPatchController),
		[AccessPolicyDependencies.DeleteController]: asClass(AccessPolicyDeleteController)
	})
}

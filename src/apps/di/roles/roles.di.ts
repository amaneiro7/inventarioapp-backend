import { asClass, type AwilixContainer } from 'awilix'
import { SequelizeRolesRepository } from '../../../Contexts/User/Role/infrastructure/sequelize/SequelizeRolesRepository'
import { RoleFinderAll } from '../../../Contexts/User/Role/application/RoleFinderAll'
import { RoleGetAllController } from '../../controllers/roles/role.get-all.controller'

export enum RoleDependencies {
	Repository = 'roleRepository',
	FinderAll = 'roleFinderAll',
	GetAllController = 'roleGetAllController'
}

export const register = (container: AwilixContainer) => {
	container.register({
		roleRepository: asClass(SequelizeRolesRepository).singleton(),
		roleFinderAll: asClass(RoleFinderAll),
		roleGetAllController: asClass(RoleGetAllController)
	})
}

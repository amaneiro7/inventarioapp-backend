import { type Router } from 'express'
import { type RoleGetAllController } from '../../controllers/roles/role.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { RoleDependencies } from '../../di/roles/roles.di'

export const register = async (router: Router) => {
	const getAllController: RoleGetAllController = container.resolve(RoleDependencies.GetAllController)

	router.get('/roles/', authenticate, getAllController.run.bind(getAllController))
}

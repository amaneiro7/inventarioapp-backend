import { type Router } from 'express'
import { type RoleGetAllController } from '../../controllers/roles/role.get-all.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { RoleDependencies } from '../../di/roles/roles.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: RoleGetAllController = container.resolve(RoleDependencies.GetAllController)

	/**
	 * @swagger
	 * /roles:
	 *   get:
	 *     tags:
	 *       - Roles
	 *     summary: Obtener todos los roles
	 *     description: Devuelve una lista de todos los roles de usuario disponibles.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de roles obtenida con éxito.
	 */
	router.get('/roles/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))
}

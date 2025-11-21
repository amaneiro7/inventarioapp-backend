import { type Router } from 'express'
import { type StateGetAllController } from '../../controllers/location/state.get-all.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { StateDependencies } from '../../di/location/state.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getAllController: StateGetAllController = container.resolve(StateDependencies.GetAllController)

	/**
	 * @swagger
	 * /states:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Estados
	 *     summary: Obtener todos los estados
	 *     description: Devuelve una lista de todos los estados geográficos.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de estados obtenida con éxito.
	 */
	router.get(
		'/states/',
		...protectedRoute,
		hasPermission(PERMISSIONS.STATES.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}

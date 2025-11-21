import { type Router } from 'express'
import { type OperatingSystemGetAllController } from '../../controllers/operating-system/operating-system.get-all.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { OperatingSystemDependencies } from '../../di/operating-system/operating-system.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getAllController: OperatingSystemGetAllController = container.resolve(
		OperatingSystemDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /operatingsystems:
	 *   get:
	 *     tags:
	 *       - Sistemas Operativos
	 *     summary: Obtener todos los sistemas operativos
	 *     description: Devuelve una lista de todos los sistemas operativos disponibles.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de sistemas operativos obtenida con éxito.
	 */
	router.get(
		'/operatingsystems/',
		...protectedRoute,
		hasPermission(PERMISSIONS.OPERATING_SYSTEM.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}

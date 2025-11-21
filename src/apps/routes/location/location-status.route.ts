import { type Router } from 'express'
import { type LocationStatusGetAllController } from '../../controllers/location/location-status.get-all.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { LocationStatusDependencies } from '../../di/location/operational-status.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getAllController: LocationStatusGetAllController = container.resolve(
		LocationStatusDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /operationalstatus:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Estados Operacionales
	 *     summary: Obtener todos los estados operacionales de ubicación
	 *     description: Devuelve una lista de todos los estados operacionales de ubicación disponibles.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de estados operacionales obtenida con éxito.
	 */
	router.get(
		'/operationalstatus/',
		...protectedRoute,
		hasPermission(PERMISSIONS.LOCATION_STATUS.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}

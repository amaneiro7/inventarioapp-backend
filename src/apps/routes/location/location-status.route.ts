import { type Router } from 'express'
import { type LocationStatusGetAllController } from '../../controllers/location/location-status.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { LocationStatusDependencies } from '../../di/location/operational-status.di'

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
	router.get('/operationalstatus/', authenticate, getAllController.run.bind(getAllController))
}

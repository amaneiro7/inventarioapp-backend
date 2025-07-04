import { type Router } from 'express'
import { type OperatingSystemGetAllController } from '../../controllers/operating-system/operating-system.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { OperatingSystemDependencies } from '../../di/operating-system/operating-system.di'

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
	router.get('/operatingsystems/', authenticate, getAllController.run.bind(getAllController))
}

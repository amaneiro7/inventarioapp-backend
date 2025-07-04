import { type Router } from 'express'
import { type HardDriveCapacityGetAllController } from '../../controllers/hard-drive/hard-drive-capacity.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { HardDriveCapacityDependencies } from '../../di/hard-drive/hard-drive-capacity.di'

export const register = async (router: Router) => {
	const getAllController: HardDriveCapacityGetAllController = container.resolve(
		HardDriveCapacityDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /harddrivecapacities:
	 *   get:
	 *     tags:
	 *       - Discos Duros - Capacidades
	 *     summary: Obtener todas las capacidades de discos duros
	 *     description: Devuelve una lista de todas las capacidades de discos duros disponibles.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de capacidades obtenida con éxito.
	 */
	router.get('/harddrivecapacities/', authenticate, getAllController.run.bind(getAllController))
}

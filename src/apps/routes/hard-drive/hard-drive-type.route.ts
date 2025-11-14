import { type Router } from 'express'
import { type HardDriveTypeGetAllController } from '../../controllers/hard-drive/hard--drive-type.get-all.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { HardDriveTypeDependencies } from '../../di/hard-drive/hard-drive-type.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: HardDriveTypeGetAllController = container.resolve(
		HardDriveTypeDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /harddrivetypes:
	 *   get:
	 *     tags:
	 *       - Discos Duros - Tipos
	 *     summary: Obtener todos los tipos de discos duros
	 *     description: Devuelve una lista de todos los tipos de discos duros disponibles (HDD, SSD, etc.).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de tipos obtenida con éxito.
	 */
	router.get(
		'/harddrivetypes/',
		...protectedRoute,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}

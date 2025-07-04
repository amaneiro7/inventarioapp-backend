import { type Router } from 'express'
import { type OperatingSystemArqGetAllController } from '../../controllers/operating-system/operating-system-arq.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { OperatingSystemArqDependencies } from '../../di/operating-system/operating-system-arq.di'

export const register = async (router: Router) => {
	const getAllController: OperatingSystemArqGetAllController = container.resolve(
		OperatingSystemArqDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /operatingsystemarqs:
	 *   get:
	 *     tags:
	 *       - Sistemas Operativos - Arquitecturas
	 *     summary: Obtener todas las arquitecturas de sistemas operativos
	 *     description: Devuelve una lista de todas las arquitecturas de sistemas operativos disponibles (ej. x64, x86).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de arquitecturas obtenida con éxito.
	 */
	router.get('/operatingsystemarqs/', authenticate, getAllController.run.bind(getAllController))
}

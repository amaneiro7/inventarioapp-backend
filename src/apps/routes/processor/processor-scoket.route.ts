import { type Router } from 'express'
import { type ProcessorSocketGetAllController } from '../../controllers/processor/processor-socket.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { ProcessorSocketDependencies } from '../../di/processor/processor-socket.di'

export const register = async (router: Router) => {
	const getAllController: ProcessorSocketGetAllController = container.resolve(
		ProcessorSocketDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /processorsockets:
	 *   get:
	 *     tags:
	 *       - Procesadores - Sockets
	 *     summary: Obtener todos los sockets de procesador
	 *     description: Devuelve una lista de todos los tipos de sockets de procesador disponibles (ej. LGA1151, AM4).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de sockets obtenida con éxito.
	 */
	router.get('/processorsockets/', authenticate, getAllController.run.bind(getAllController))
}

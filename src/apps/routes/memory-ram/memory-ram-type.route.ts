import { type Router } from 'express'
import { type MemoryRamTypeGetAllController } from '../../controllers/memory-ram/memoryRam.get-all.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { MemoryRamTypeDependencies } from '../../di/memory-ram/memory-ram-type.di'

export const register = async (router: Router) => {
	const getAllController: MemoryRamTypeGetAllController = container.resolve(
		MemoryRamTypeDependencies.GetAllController
	)

	/**
	 * @swagger
	 * /memoryramtypes:
	 *   get:
	 *     tags:
	 *       - Memoria RAM - Tipos
	 *     summary: Obtener todos los tipos de memoria RAM
	 *     description: Devuelve una lista de todos los tipos de memoria RAM disponibles (ej. DDR3, DDR4).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de tipos de memoria RAM obtenida con éxito.
	 */
	router.get('/memoryramtypes/', authenticate, getAllController.run.bind(getAllController))
}

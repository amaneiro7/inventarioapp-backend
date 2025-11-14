import { type Router } from 'express'
import { type InputTypeGetAllController } from '../../controllers/input-type/input-type.get-all.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { InputTypeDependencies } from '../../di/input-type/input-type.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: InputTypeGetAllController = container.resolve(InputTypeDependencies.GetAllController)

	/**
	 * @swagger
	 * /inputtypes:
	 *   get:
	 *     tags:
	 *       - Tipos de Entrada
	 *     summary: Obtener todos los tipos de entrada
	 *     description: Devuelve una lista de todos los tipos de entrada disponibles (ej. USB, PS/2).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de tipos de entrada obtenida con éxito.
	 */
	router.get(
		'/inputtypes/',
		...protectedRoute,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)
}

import { type Router } from 'express'
import { type CategoryGetAllController } from '../../controllers/category/category.get-all.controller'
import { type CategoryGetController } from '../../controllers/category/category.get.controller'
import { container } from '../../di/container'
import { CategoryDependencies } from '../../di/category/category.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getController: CategoryGetController = container.resolve(CategoryDependencies.GetController)
	const getAllController: CategoryGetAllController = container.resolve(CategoryDependencies.GetAllController)

	/**
	 * @swagger
	 * /categories:
	 *   get:
	 *     tags:
	 *       - Categorías
	 *     summary: Obtener todas las categorías
	 *     description: Devuelve una lista de todas las categorías de dispositivos.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de categorías obtenida con éxito.
	 */
	router.get(
		'/categories/',
		...protectedRoute,
		hasPermission(PERMISSIONS.CATEGORIES.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /categories/{id}:
	 *   get:
	 *     tags:
	 *       - Categorías
	 *     summary: Obtener una categoría por ID
	 *     description: Devuelve los detalles de una categoría específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la categoría.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la categoría.
	 *       '404':
	 *         description: Categoría no encontrada.
	 */
	router.get(
		'/categories/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.CATEGORIES.READ),
		getController.run.bind(getController)
	)
}

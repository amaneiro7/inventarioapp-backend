import { type Router } from 'express'
import { type MainCategoryGetAllController } from '../../controllers/main-category/main-category.get-all.controller'
import { type MainCategoryGetController } from '../../controllers/main-category/main-category.get.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { MainCategoryDependencies } from '../../di/main-category/main-category.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: MainCategoryGetController = container.resolve(MainCategoryDependencies.GetController)
	const getAllController: MainCategoryGetAllController = container.resolve(MainCategoryDependencies.GetAllController)

	/**
	 * @swagger
	 * /maincategories:
	 *   get:
	 *     tags:
	 *       - Categorías Principales
	 *     summary: Obtener todas las categorías principales
	 *     description: Devuelve una lista de todas las categorías principales de dispositivos.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de categorías principales obtenida con éxito.
	 */
	router.get(
		'/maincategories/',
		...protectedRoute,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /maincategories/{id}:
	 *   get:
	 *     tags:
	 *       - Categorías Principales
	 *     summary: Obtener una categoría principal por ID
	 *     description: Devuelve los detalles de una categoría principal específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la categoría principal.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la categoría principal.
	 *       '404':
	 *         description: Categoría principal no encontrada.
	 */
	router.get('/maincategories/:id', ...protectedRoute, getController.run.bind(getController))
}

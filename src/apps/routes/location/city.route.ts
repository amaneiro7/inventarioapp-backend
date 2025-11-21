import { type Router } from 'express'
import { type CityGetAllController } from '../../controllers/location/city.get-all.controller'
import { type CityPostController } from '../../controllers/location/city.post.controller'
import { type CityPatchController } from '../../controllers/location/city.patch.controller'
import { type CityGetController } from '../../controllers/location/city.get.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { CityDependencies } from '../../di/location/city.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getController: CityGetController = container.resolve(CityDependencies.GetController)
	const getAllController: CityGetAllController = container.resolve(CityDependencies.GetAllController)
	const postController: CityPostController = container.resolve(CityDependencies.PostController)
	const patchController: CityPatchController = container.resolve(CityDependencies.PatchController)

	/**
	 * @swagger
	 * /cities:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Ciudades
	 *     summary: Obtener todas las ciudades
	 *     description: Devuelve una lista de todas las ciudades.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de ciudades obtenida con éxito.
	 */
	router.get(
		'/cities/',
		...protectedRoute,
		hasPermission(PERMISSIONS.CITIES.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /cities/{id}:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Ciudades
	 *     summary: Obtener una ciudad por ID
	 *     description: Devuelve los detalles de una ciudad específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la ciudad.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la ciudad.
	 *       '404':
	 *         description: Ciudad no encontrada.
	 */
	router.get(
		'/cities/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.CITIES.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /cities:
	 *   post:
	 *     tags:
	 *       - Ubicaciones - Ciudades
	 *     summary: Crear una nueva ciudad
	 *     description: Añade una nueva ciudad al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/City'
	 *     responses:
	 *       '201':
	 *         description: Ciudad creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/cities/',
		...protectedRoute,
		hasPermission(PERMISSIONS.CITIES.CREATE),
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /cities/{id}:
	 *   patch:
	 *     tags:
	 *       - Ubicaciones - Ciudades
	 *     summary: Actualizar una ciudad existente
	 *     description: Actualiza el nombre de una ciudad específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la ciudad a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/City'
	 *     responses:
	 *       '200':
	 *         description: Ciudad actualizada con éxito.
	 *       '404':
	 *         description: Ciudad no encontrada.
	 */
	router.patch(
		'/cities/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.CITIES.UPDATE),
		patchController.run.bind(patchController)
	)
}

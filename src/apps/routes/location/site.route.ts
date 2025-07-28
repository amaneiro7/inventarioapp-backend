import { validateReqSchema } from '../index'
import { postSiteSchema, patchSiteSchema } from './site.validator'
import { type Router } from 'express'
import { type SiteGetAllController } from '../../controllers/location/site.get-all.controller'
import { type SitePostController } from '../../controllers/location/site.post.controller'
import { type SitePatchController } from '../../controllers/location/site.patch.controller'
import { type SiteGetController } from '../../controllers/location/site.get.controller'

import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { SiteDependencies } from '../../di/location/site.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: SiteGetAllController = container.resolve(SiteDependencies.GetAllController)
	const getController: SiteGetController = container.resolve(SiteDependencies.GetController)
	const postController: SitePostController = container.resolve(SiteDependencies.PostController)
	const patchController: SitePatchController = container.resolve(SiteDependencies.PatchController)

	/**
	 * @swagger
	 * /sites:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Sitios
	 *     summary: Obtener todos los sitios
	 *     description: Devuelve una lista de todos los sitios (ej. agencias, oficinas).
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de sitios obtenida con éxito.

	 */
	router.get('/sites/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /sites/{id}:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - Sitios
	 *     summary: Obtener un sitio por ID
	 *     description: Devuelve los detalles de un sitio específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del sitio.
	 *     responses:
	 *       '200':
	 *         description: Detalles del sitio.
	 *       '404':
	 *         description: Sitio no encontrado.
	 */
	router.get('/sites/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /sites:
	 *   post:
	 *     tags:
	 *       - Ubicaciones - Sitios
	 *     summary: Crear un nuevo sitio
	 *     description: Añade un nuevo sitio al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nombre del sitio.
	 *                 example: "Agencia Principal"
	 *               cityId:
	 *                 type: string
	 *                 description: ID de la ciudad a la que pertenece el sitio.
	 *                 example: "uuid-de-ciudad"
	 *               typeOfSiteId:
	 *                 type: string
	 *                 description: ID del tipo de sitio.
	 *                 example: "uuid-de-tipo-de-sitio"
	 *     responses:
	 *       '201':
	 *         description: Sitio creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/sites/', authenticate, postSiteSchema, validateReqSchema, postController.run.bind(postController))

	/**
	 * @swagger
	 * /sites/{id}:
	 *   patch:
	 *     tags:
	 *       - Ubicaciones - Sitios
	 *     summary: Actualizar un sitio existente
	 *     description: Actualiza el nombre de un sitio específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del sitio a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre del sitio.
	 *                 example: "Agencia Central"
	 *     responses:
	 *       '200':
	 *         description: Sitio actualizado con éxito.
	 *       '404':
	 *         description: Sitio no encontrado.
	 */
	router.patch(
		'/sites/:id',
		authenticate,
		patchSiteSchema,
		validateReqSchema,
		patchController.run.bind(patchController)
	)
}

import { type Router } from 'express'
import { type ISPLinkGetAllController } from '../../controllers/location/isp-link.get-all.controller'
import { type ISPLinkPostController } from '../../controllers/location/isp-link.post.controller'
import { type ISPLinkPatchController } from '../../controllers/location/isp-link.patch.controller'
import { type ISPLinkGetController } from '../../controllers/location/isp-link.get.controller'

import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { ISPLinkDependencies } from '../../di/location/isp-link.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getController: ISPLinkGetController = container.resolve(ISPLinkDependencies.GetController)
	const getAllController: ISPLinkGetAllController = container.resolve(ISPLinkDependencies.GetAllController)
	const postController: ISPLinkPostController = container.resolve(ISPLinkDependencies.PostController)
	const patchController: ISPLinkPatchController = container.resolve(ISPLinkDependencies.PatchController)

	/**
	 * @swagger
	 * /isp-links:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - ISP Links
	 *     summary: Obtener todos los ISP Links
	 *     description: Devuelve una lista de todos los ISP Links.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de ISP Links obtenida con éxito.
	 */
	router.get(
		'/isp-links/',
		...protectedRoute,
		hasPermission(PERMISSIONS.ISP_LINKS.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /isp-links/{id}:
	 *   get:
	 *     tags:
	 *       - Ubicaciones - ISP Links
	 *     summary: Obtener un ISP Link por ID
	 *     description: Devuelve los detalles de un ISP Link específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del ISP Link.
	 *     responses:
	 *       '200':
	 *         description: Detalles del ISP Link.
	 *       '404':
	 *         description: ISP Link no encontrado.
	 */
	router.get(
		'/isp-links/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.ISP_LINKS.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /isp-links:
	 *   post:
	 *     tags:
	 *       - Ubicaciones - ISP Links
	 *     summary: Crear un nuevo ISP Link
	 *     description: Añade un nuevo ISP Link al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ISPLink'
	 *     responses:
	 *       '201':
	 *         description: ISP Link creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/isp-links/',
		...protectedRoute,
		hasPermission(PERMISSIONS.ISP_LINKS.CREATE),
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /isp-links/{id}:
	 *   patch:
	 *     tags:
	 *       - Ubicaciones - ISP Links
	 *     summary: Actualizar un ISP Link existente
	 *     description: Actualiza el nombre de un ISP Link específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del ISP Link a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/ISPLink'
	 *     responses:
	 *       '200':
	 *         description: ISP Link actualizado con éxito.
	 *       '404':
	 *         description: ISP Link no encontrado.
	 */
	router.patch(
		'/isp-links/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.ISP_LINKS.UPDATE),
		patchController.run.bind(patchController)
	)
}

import { type Router } from 'express'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { ShipmentDependencies } from '../../di/shipment/shipment.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { type ShipmentGetController } from '../../controllers/shipments/shipment.get.controller'
import { type ShipmentGetAllController } from '../../controllers/shipments/shipment.get-all.controller'
import { type ShipmentPostController } from '../../controllers/shipments/shipment.post.controller'
import { type ShipmentPatchController } from '../../controllers/shipments/shipment.patch.controller'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

export const register = async (router: Router) => {
	const getController: ShipmentGetController = container.resolve(ShipmentDependencies.GetController)
	const getAllController: ShipmentGetAllController = container.resolve(ShipmentDependencies.GetAllController)
	const postController: ShipmentPostController = container.resolve(ShipmentDependencies.PostController)
	const patchController: ShipmentPatchController = container.resolve(ShipmentDependencies.PatchController)

	/**
	 * @swagger
	 * /shipments:
	 *   get:
	 *     tags:
	 *       - Shipments
	 *     summary: Obtener todos los envíos
	 *     description: Devuelve una lista paginada de envíos, con soporte para filtros y ordenamiento.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de envíos obtenida con éxito.
	 */
	router.get(
		'/shipments/',
		...protectedRoute,
		hasPermission(PERMISSIONS.SHIPMENTS.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /shipments/{id}:
	 *   get:
	 *     tags:
	 *       - Shipments
	 *     summary: Obtener un envío por ID
	 *     description: Devuelve los detalles de un envío específico, incluyendo los dispositivos asociados.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del envío.
	 *     responses:
	 *       '200':
	 *         description: Detalles del envío.
	 *       '404':
	 *         description: Envío no encontrado.
	 */
	router.get(
		'/shipments/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.SHIPMENTS.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /shipments:
	 *   post:
	 *     tags:
	 *       - Shipments
	 *     summary: Crear un nuevo envío
	 *     description: Añade un nuevo envío al sistema con sus dispositivos asociados.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Shipment'
	 *     responses:
	 *       '201':
	 *         description: Envío creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/shipments/',
		...protectedRoute,
		hasPermission(PERMISSIONS.SHIPMENTS.CREATE),
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /shipments/{id}:
	 *   patch:
	 *     tags:
	 *       - Shipments
	 *     summary: Actualizar un envío existente
	 *     description: Actualiza los datos de un envío específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del envío a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Shipment'
	 *     responses:
	 *       '200':
	 *         description: Envío actualizado con éxito.
	 *       '404':
	 *         description: Envío no encontrado.
	 */
	router.patch(
		'/shipments/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.SHIPMENTS.UPDATE),
		patchController.run.bind(patchController)
	)
}

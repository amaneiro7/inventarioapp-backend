import { type Router } from 'express'
import { type UnidadGetAllController } from '../../controllers/employee/unidad.get-all.controller'
import { type UnidadPostController } from '../../controllers/employee/unidad.post.controller'
import { type UnidadPatchController } from '../../controllers/employee/unidad.patch.controller'
import { type UnidadGetController } from '../../controllers/employee/unidad.get.controller'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { UnidadDependencies } from '../../di/employee/unidad.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'
import { hasPermission } from '../../Middleware/authorization'

export const register = async (router: Router) => {
	const getAllController: UnidadGetAllController = container.resolve(UnidadDependencies.GetAllController)
	const getController: UnidadGetController = container.resolve(UnidadDependencies.GetController)
	const postController: UnidadPostController = container.resolve(UnidadDependencies.PostController)
	const patchController: UnidadPatchController = container.resolve(UnidadDependencies.PatchController)

	/**
	 * @swagger
	 * /unidades:
	 *   get:
	 *     tags:
	 *       - Empleados - Unidades
	 *     summary: Obtener todas las unidades
	 *     description: Devuelve una lista de todas las unidades.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de unidades obtenida con éxito.
	 */
	router.get(
		'/unidades/',
		...protectedRoute,
		hasPermission(PERMISSIONS.UNIDADES.READ_LIST),
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /unidades/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Unidades
	 *     summary: Obtener una unidad por ID
	 *     description: Devuelve los detalles de una unidad específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la unidad.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la unidad.
	 *       '404':
	 *         description: Unidad no encontrada.
	 */
	router.get(
		'/unidades/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.UNIDADES.READ),
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /unidades:
	 *   post:
	 *     tags:
	 *       - Empleados - Unidades
	 *     summary: Crear una nueva unidad
	 *     description: Añade una nueva unidad al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Unidad'
	 *     responses:
	 *       '201':
	 *         description: Unidad creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/unidades/',
		...protectedRoute,
		hasPermission(PERMISSIONS.UNIDADES.CREATE),
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /unidades/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Unidades
	 *     summary: Actualizar una unidad existente
	 *     description: Actualiza los detalles de una unidad específica (nombre, jerarquía, cargos, etc).
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la unidad a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Unidad'
	 *     responses:
	 *       '200':
	 *         description: Unidad actualizada con éxito.
	 *       '404':
	 *         description: Unidad no encontrada.
	 */
	router.patch(
		'/unidades/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.UNIDADES.UPDATE),
		patchController.run.bind(patchController)
	)
}

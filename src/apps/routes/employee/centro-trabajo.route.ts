import { type Router } from 'express'
import { type CentroTrabajoGetAllController } from '../../controllers/employee/centro-trabajo.get-all.controller'
import { type CentroTrabajoPostController } from '../../controllers/employee/centro-trabajo.post.controller'
import { type CentroTrabajoPatchController } from '../../controllers/employee/centro-trabajo.patch.controller'
import { type CentroTrabajoGetController } from '../../controllers/employee/centro-trabajo.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CentroTrabajoDependencies } from '../../di/employee/centro-trabajo.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: CentroTrabajoGetAllController = container.resolve(
		CentroTrabajoDependencies.GetAllController
	)
	const getController: CentroTrabajoGetController = container.resolve(CentroTrabajoDependencies.GetController)
	const postController: CentroTrabajoPostController = container.resolve(CentroTrabajoDependencies.PostController)
	const patchController: CentroTrabajoPatchController = container.resolve(CentroTrabajoDependencies.PatchController)

	/**
	 * @swagger
	 * /centrotrabajos:
	 *   get:
	 *     tags:
	 *       - Empleados - Centros de Trabajo
	 *     summary: Obtener todos los centros de trabajo
	 *     description: Devuelve una lista de todos los centros de trabajo.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de centros de trabajo obtenida con éxito.
	 */
	router.get(
		'/centrotrabajos/',
		authenticate,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /centrotrabajos/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Centros de Trabajo
	 *     summary: Obtener un centro de trabajo por ID
	 *     description: Devuelve los detalles de un centro de trabajo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del centro de trabajo.
	 *     responses:
	 *       '200':
	 *         description: Detalles del centro de trabajo.
	 *       '404':
	 *         description: Centro de trabajo no encontrado.
	 */
	router.get('/centrotrabajos/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /centrotrabajos:
	 *   post:
	 *     tags:
	 *       - Empleados - Centros de Trabajo
	 *     summary: Crear un nuevo centro de trabajo
	 *     description: Añade un nuevo centro de trabajo al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/GenericName'
	 *     responses:
	 *       '201':
	 *         description: Centro de trabajo creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/centrotrabajos/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /centrotrabajos/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Centros de Trabajo
	 *     summary: Actualizar un centro de trabajo existente
	 *     description: Actualiza el nombre de un centro de trabajo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del centro de trabajo a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/GenericName'
	 *     responses:
	 *       '200':
	 *         description: Centro de trabajo actualizado con éxito.
	 *       '404':
	 *         description: Centro de trabajo no encontrado.
	 */
	router.patch('/centrotrabajos/:id', authenticate, patchController.run.bind(patchController))
}

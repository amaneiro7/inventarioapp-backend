import { type Router } from 'express'
import { type CentroCostoGetAllController } from '../../controllers/employee/centro-costo.get-all.controller'
import { type CentroCostoPostController } from '../../controllers/employee/centro-costo.post.controller'
import { type CentroCostoPatchController } from '../../controllers/employee/centro-costo.patch.controller'
import { type CentroCostoGetController } from '../../controllers/employee/centro-costo.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CentroCostoDependencies } from '../../di/employee/centro-costo.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: CentroCostoGetAllController = container.resolve(CentroCostoDependencies.GetAllController)
	const getController: CentroCostoGetController = container.resolve(CentroCostoDependencies.GetController)
	const postController: CentroCostoPostController = container.resolve(CentroCostoDependencies.PostController)
	const patchController: CentroCostoPatchController = container.resolve(CentroCostoDependencies.PatchController)

	/**
	 * @swagger
	 * /centrocostos:
	 *   get:
	 *     tags:
	 *       - Empleados - Centros de Costo
	 *     summary: Obtener todos los centros de costo
	 *     description: Devuelve una lista de todos los centros de costo.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de centros de costo obtenida con éxito.
	 */
	router.get('/centrocostos/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /centrocostos/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Centros de Costo
	 *     summary: Obtener un centro de costo por ID
	 *     description: Devuelve los detalles de un centro de costo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del centro de costo.
	 *     responses:
	 *       '200':
	 *         description: Detalles del centro de costo.
	 *       '404':
	 *         description: Centro de costo no encontrado.
	 */
	router.get('/centrocostos/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /centrocostos:
	 *   post:
	 *     tags:
	 *       - Empleados - Centros de Costo
	 *     summary: Crear un nuevo centro de costo
	 *     description: Añade un nuevo centro de costo al sistema.
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
	 *                 description: Nombre del centro de costo.
	 *                 example: "Tecnología"
	 *     responses:
	 *       '201':
	 *         description: Centro de costo creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/centrocostos/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /centrocostos/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Centros de Costo
	 *     summary: Actualizar un centro de costo existente
	 *     description: Actualiza el nombre de un centro de costo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del centro de costo a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre del centro de costo.
	 *                 example: "Tecnología e Innovación"
	 *     responses:
	 *       '200':
	 *         description: Centro de costo actualizado con éxito.
	 *       '404':
	 *         description: Centro de costo no encontrado.
	 */
	router.patch('/centrocostos/:id', authenticate, patchController.run.bind(patchController))
}

import { validateReqSchema } from '../index'
import { postCargoSchema, patchCargoSchema } from './cargo.validator'
import { type Router } from 'express'
import { type CargoGetAllController } from '../../controllers/employee/cargo.get-all.controller'
import { type CargoPostController } from '../../controllers/employee/cargo.post.controller'
import { type CargoPatchController } from '../../controllers/employee/cargo.patch.controller'
import { type CargoGetController } from '../../controllers/employee/cargo.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { CargoDependencies } from '../../di/employee/cargo.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: CargoGetAllController = container.resolve(CargoDependencies.GetAllController)
	const getController: CargoGetController = container.resolve(CargoDependencies.GetController)
	const postController: CargoPostController = container.resolve(CargoDependencies.PostController)
	const patchController: CargoPatchController = container.resolve(CargoDependencies.PatchController)

	/**
	 * @swagger
	 * /cargos:
	 *   get:
	 *     tags:
	 *       - Empleados - Cargos
	 *     summary: Obtener todos los cargos
	 *     description: Devuelve una lista de todos los cargos de empleados.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de cargos obtenida con éxito.
	 */
	router.get('/cargos/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /cargos/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Cargos
	 *     summary: Obtener un cargo por ID
	 *     description: Devuelve los detalles de un cargo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del cargo.
	 *     responses:
	 *       '200':
	 *         description: Detalles del cargo.
	 *       '404':
	 *         description: Cargo no encontrado.
	 */
	router.get('/cargos/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /cargos:
	 *   post:
	 *     tags:
	 *       - Empleados - Cargos
	 *     summary: Crear un nuevo cargo
	 *     description: Añade un nuevo cargo al sistema.
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
	 *                 description: Nombre del cargo.
	 *                 example: "Analista de Sistemas"
	 *     responses:
	 *       '201':
	 *         description: Cargo creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/cargos/', authenticate, postCargoSchema, validateReqSchema, postController.run.bind(postController))

	/**
	 * @swagger
	 * /cargos/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Cargos
	 *     summary: Actualizar un cargo existente
	 *     description: Actualiza el nombre de un cargo específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del cargo a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre del cargo.
	 *                 example: "Analista Senior de Sistemas"
	 *     responses:
	 *       '200':
	 *         description: Cargo actualizado con éxito.
	 *       '404':
	 *         description: Cargo no encontrado.
	 */
	router.patch(
		'/cargos/:id',
		authenticate,
		patchCargoSchema,
		validateReqSchema,
		patchController.run.bind(patchController)
	)
}

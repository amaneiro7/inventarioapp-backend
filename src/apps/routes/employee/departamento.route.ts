import { type Router } from 'express'
import { type DepartamentoGetAllController } from '../../controllers/employee/departamento.get-all.controller'
import { type DepartamentoPostController } from '../../controllers/employee/departamento.post.controller'
import { type DepartamentoPatchController } from '../../controllers/employee/departamento.patch.controller'
import { type DepartamentoGetController } from '../../controllers/employee/departamento.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { DepartamentoDependencies } from '../../di/employee/departamento.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: DepartamentoGetAllController = container.resolve(DepartamentoDependencies.GetAllController)
	const getController: DepartamentoGetController = container.resolve(DepartamentoDependencies.GetController)
	const postController: DepartamentoPostController = container.resolve(DepartamentoDependencies.PostController)
	const patchController: DepartamentoPatchController = container.resolve(DepartamentoDependencies.PatchController)

	/**
	 * @swagger
	 * /departamentos:
	 *   get:
	 *     tags:
	 *       - Empleados - Departamentos
	 *     summary: Obtener todos los departamentos
	 *     description: Devuelve una lista de todos los departamentos.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de departamentos obtenida con éxito.
	 */
	router.get(
		'/departamentos/',
		authenticate,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /departamentos/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Departamentos
	 *     summary: Obtener un departamento por ID
	 *     description: Devuelve los detalles de un departamento específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del departamento.
	 *     responses:
	 *       '200':
	 *         description: Detalles del departamento.
	 *       '404':
	 *         description: Departamento no encontrado.
	 */
	router.get('/departamentos/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /departamentos:
	 *   post:
	 *     tags:
	 *       - Empleados - Departamentos
	 *     summary: Crear un nuevo departamento
	 *     description: Añade un nuevo departamento al sistema.
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
	 *                 description: Nombre del departamento.
	 *                 example: "Recursos Humanos"
	 *     responses:
	 *       '201':
	 *         description: Departamento creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/departamentos/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /departamentos/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Departamentos
	 *     summary: Actualizar un departamento existente
	 *     description: Actualiza el nombre de un departamento específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del departamento a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre del departamento.
	 *                 example: "Gestión Humana"
	 *     responses:
	 *       '200':
	 *         description: Departamento actualizado con éxito.
	 *       '404':
	 *         description: Departamento no encontrado.
	 */
	router.patch('/departamentos/:id', authenticate, patchController.run.bind(patchController))
}

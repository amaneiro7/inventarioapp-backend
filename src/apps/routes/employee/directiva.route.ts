import { type Router } from 'express'
import { type DirectivaGetAllController } from '../../controllers/employee/directiva.get-all.controller'
import { type DirectivaPostController } from '../../controllers/employee/directiva.post.controller'
import { type DirectivaPatchController } from '../../controllers/employee/directiva.patch.controller'
import { type DirectivaGetController } from '../../controllers/employee/directiva.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { DirectivaDependencies } from '../../di/employee/directiva.di'

export const register = async (router: Router) => {
	const getAllController: DirectivaGetAllController = container.resolve(DirectivaDependencies.GetAllController)
	const getController: DirectivaGetController = container.resolve(DirectivaDependencies.GetController)
	const postController: DirectivaPostController = container.resolve(DirectivaDependencies.PostController)
	const patchController: DirectivaPatchController = container.resolve(DirectivaDependencies.PatchController)

	/**
	 * @swagger
	 * /directivas:
	 *   get:
	 *     tags:
	 *       - Empleados - Directivas
	 *     summary: Obtener todas las directivas
	 *     description: Devuelve una lista de todas las directivas.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de directivas obtenida con éxito.
	 */
	router.get('/directivas/', authenticate, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /directivas/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Directivas
	 *     summary: Obtener una directiva por ID
	 *     description: Devuelve los detalles de una directiva específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la directiva.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la directiva.
	 *       '404':
	 *         description: Directiva no encontrada.
	 */
	router.get('/directivas/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /directivas:
	 *   post:
	 *     tags:
	 *       - Empleados - Directivas
	 *     summary: Crear una nueva directiva
	 *     description: Añade una nueva directiva al sistema.
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
	 *                 description: Nombre de la directiva.
	 *                 example: "Junta Directiva"
	 *     responses:
	 *       '201':
	 *         description: Directiva creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/directivas/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /directivas/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Directivas
	 *     summary: Actualizar una directiva existente
	 *     description: Actualiza el nombre de una directiva específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la directiva a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre de la directiva.
	 *                 example: "Comité Ejecutivo"
	 *     responses:
	 *       '200':
	 *         description: Directiva actualizada con éxito.
	 *       '404':
	 *         description: Directiva no encontrada.
	 */
	router.patch('/directivas/:id', authenticate, patchController.run.bind(patchController))
}

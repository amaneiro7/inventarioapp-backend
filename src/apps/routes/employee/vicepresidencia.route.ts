import { type Router } from 'express'
import { type VicepresidenciaGetAllController } from '../../controllers/employee/vicepresidencia.get-all.controller'
import { type VicepresidenciaPostController } from '../../controllers/employee/vicepresidencia.post.controller'
import { type VicepresidenciaPatchController } from '../../controllers/employee/vicepresidencia.patch.controller'
import { type VicepresidenciaGetController } from '../../controllers/employee/vicepresidencia.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { VicepresidenciaDependencies } from '../../di/employee/vicepresidencia.di'

export const register = async (router: Router) => {
	const getAllController: VicepresidenciaGetAllController = container.resolve(
		VicepresidenciaDependencies.GetAllController
	)
	const getController: VicepresidenciaGetController = container.resolve(VicepresidenciaDependencies.GetController)
	const postController: VicepresidenciaPostController = container.resolve(VicepresidenciaDependencies.PostController)
	const patchController: VicepresidenciaPatchController = container.resolve(
		VicepresidenciaDependencies.PatchController
	)

	/**
	 * @swagger
	 * /vicepresidencias:
	 *   get:
	 *     tags:
	 *       - Empleados - Vicepresidencias
	 *     summary: Obtener todas las vicepresidencias
	 *     description: Devuelve una lista de todas las vicepresidencias.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista obtenida con éxito.
	 */
	router.get('/vicepresidencias/', authenticate, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /vicepresidencias/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Vicepresidencias
	 *     summary: Obtener una vicepresidencia por ID
	 *     description: Devuelve los detalles de una vicepresidencia específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la vicepresidencia.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la vicepresidencia.
	 *       '404':
	 *         description: Vicepresidencia no encontrada.
	 */
	router.get('/vicepresidencias/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /vicepresidencias:
	 *   post:
	 *     tags:
	 *       - Empleados - Vicepresidencias
	 *     summary: Crear una nueva vicepresidencia
	 *     description: Añade una nueva vicepresidencia al sistema.
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
	 *                 description: Nombre de la vicepresidencia.
	 *     responses:
	 *       '201':
	 *         description: Vicepresidencia creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/vicepresidencias/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /vicepresidencias/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Vicepresidencias
	 *     summary: Actualizar una vicepresidencia
	 *     description: Actualiza el nombre de una vicepresidencia específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre.
	 *     responses:
	 *       '200':
	 *         description: Actualizada con éxito.
	 *       '404':
	 *         description: No encontrada.
	 */
	router.patch('/vicepresidencias/:id', authenticate, patchController.run.bind(patchController))
}

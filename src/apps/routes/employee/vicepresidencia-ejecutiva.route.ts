import { type Router } from 'express'
import { type VicepresidenciaEjecutivaGetAllController } from '../../controllers/employee/vicepresidencia-ejecutiva.get-all.controller'
import { type VicepresidenciaEjecutivaPostController } from '../../controllers/employee/vicepresidencia-ejecutiva.post.controller'
import { type VicepresidenciaEjecutivaPatchController } from '../../controllers/employee/vicepresidencia-ejecutiva.patch.controller'
import { type VicepresidenciaEjecutivaGetController } from '../../controllers/employee/vicepresidencia-ejecutiva.get.controller'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { VicepresidenciaEjecutivaDependencies } from '../../di/employee/vicepresidencia-ejecutiva.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: VicepresidenciaEjecutivaGetAllController = container.resolve(
		VicepresidenciaEjecutivaDependencies.GetAllController
	)
	const getController: VicepresidenciaEjecutivaGetController = container.resolve(
		VicepresidenciaEjecutivaDependencies.GetController
	)
	const postController: VicepresidenciaEjecutivaPostController = container.resolve(
		VicepresidenciaEjecutivaDependencies.PostController
	)
	const patchController: VicepresidenciaEjecutivaPatchController = container.resolve(
		VicepresidenciaEjecutivaDependencies.PatchController
	)

	/**
	 * @swagger
	 * /vicepresidenciaejecutivas:
	 *   get:
	 *     tags:
	 *       - Empleados - Vicepresidencias Ejecutivas
	 *     summary: Obtener todas las vicepresidencias ejecutivas
	 *     description: Devuelve una lista de todas las vicepresidencias ejecutivas.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista obtenida con éxito.
	 */
	router.get(
		'/vicepresidenciaejecutivas/',
		authenticate,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /vicepresidenciaejecutivas/{id}:
	 *   get:
	 *     tags:
	 *       - Empleados - Vicepresidencias Ejecutivas
	 *     summary: Obtener una vicepresidencia ejecutiva por ID
	 *     description: Devuelve los detalles de una vicepresidencia ejecutiva específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID de la vicepresidencia ejecutiva.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la vicepresidencia ejecutiva.
	 *       '404':
	 *         description: Vicepresidencia ejecutiva no encontrada.
	 */
	router.get('/vicepresidenciaejecutivas/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /vicepresidenciaejecutivas:
	 *   post:
	 *     tags:
	 *       - Empleados - Vicepresidencias Ejecutivas
	 *     summary: Crear una nueva vicepresidencia ejecutiva
	 *     description: Añade una nueva vicepresidencia ejecutiva al sistema.
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
	 *         description: Vicepresidencia ejecutiva creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/vicepresidenciaejecutivas/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /vicepresidenciaejecutivas/{id}:
	 *   patch:
	 *     tags:
	 *       - Empleados - Vicepresidencias Ejecutivas
	 *     summary: Actualizar una vicepresidencia ejecutiva
	 *     description: Actualiza el nombre de una vicepresidencia ejecutiva específica.
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
	 *             $ref: '#/components/schemas/GenericName'
	 *     responses:
	 *       '200':
	 *         description: Actualizada con éxito.
	 *       '404':
	 *         description: No encontrada.
	 */
	router.patch('/vicepresidenciaejecutivas/:id', authenticate, patchController.run.bind(patchController))
}

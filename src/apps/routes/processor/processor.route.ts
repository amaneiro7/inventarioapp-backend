import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { ProcessorDependencies } from '../../di/processor/processor.di'
import { type ProcessorPatchController } from '../../controllers/processor/processor.patch.controller'
import { type ProcessorPostController } from '../../controllers/processor/processor.post.controller'
import { type ProcessorGetController } from '../../controllers/processor/processor.get.controller'
import { type ProcessorGetAllController } from '../../controllers/processor/processor.get-all.controller'
import { type ProcessorDeleteController } from '../../controllers/processor/processor.delete.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: ProcessorGetController = container.resolve(ProcessorDependencies.GetController)
	const getAllController: ProcessorGetAllController = container.resolve(ProcessorDependencies.GetAllController)
	const postController: ProcessorPostController = container.resolve(ProcessorDependencies.PostController)
	const patchController: ProcessorPatchController = container.resolve(ProcessorDependencies.PatchController)
	const deleteController: ProcessorDeleteController = container.resolve(ProcessorDependencies.DeleteController)

	/**
	 * @swagger
	 * /processors:
	 *   get:
	 *     tags:
	 *       - Procesadores
	 *     summary: Obtener todos los procesadores
	 *     description: Devuelve una lista de todos los procesadores disponibles.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de procesadores obtenida con éxito.
	 */
	router.get('/processors/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /processors/{id}:
	 *   get:
	 *     tags:
	 *       - Procesadores
	 *     summary: Obtener un procesador por ID
	 *     description: Devuelve los detalles de un procesador específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del procesador.
	 *     responses:
	 *       '200':
	 *         description: Detalles del procesador.
	 *       '404':
	 *         description: Procesador no encontrado.
	 */
	router.get('/processors/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /processors:
	 *   post:
	 *     tags:
	 *       - Procesadores
	 *     summary: Crear un nuevo procesador
	 *     description: Añade un nuevo procesador al sistema.
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
	 *                 description: Nombre del procesador.
	 *                 example: "Intel Core i7-10700K"
	 *               socketId:
	 *                 type: string
	 *                 description: ID del socket del procesador.
	 *                 example: "uuid-del-socket"
	 *     responses:
	 *       '201':
	 *         description: Procesador creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/processors/', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /processors/{id}:
	 *   patch:
	 *     tags:
	 *       - Procesadores
	 *     summary: Actualizar un procesador existente
	 *     description: Actualiza la información de un procesador específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del procesador a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               name:
	 *                 type: string
	 *                 description: Nuevo nombre del procesador.
	 *                 example: "Intel Core i9-11900K"
	 *     responses:
	 *       '200':
	 *         description: Procesador actualizado con éxito.
	 *       '404':
	 *         description: Procesador no encontrado.
	 */
	router.patch('/processors/:id', authenticate, patchController.run.bind(patchController))

	/**
	 * @swagger
	 * /processors/{id}:
	 *   delete:
	 *     tags:
	 *       - Procesadores
	 *     summary: Eliminar un procesador
	 *     description: Elimina un procesador del sistema por su ID.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del procesador a eliminar.
	 *     responses:
	 *       '204':
	 *         description: Procesador eliminado con éxito.
	 *       '404':
	 *         description: Procesador no encontrado.
	 */
	router.delete('/processors/:id', authenticate, deleteController.run.bind(deleteController))
}

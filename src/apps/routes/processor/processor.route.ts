import { type Router } from 'express'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { ProcessorDependencies } from '../../di/processor/processor.di'
import { type ProcessorPatchController } from '../../controllers/processor/processor.patch.controller'
import { type ProcessorPostController } from '../../controllers/processor/processor.post.controller'
import { type ProcessorGetController } from '../../controllers/processor/processor.get.controller'
import { type ProcessorGetAllController } from '../../controllers/processor/processor.get-all.controller'
import { type ProcessorDeleteController } from '../../controllers/processor/processor.delete.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'

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
	router.get(
		'/processors/',
		...protectedRoute,
		hasPermission(PERMISSIONS.PROCESSORS.READ_LIST),

		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

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
	router.get(
		'/processors/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.PROCESSORS.READ),
		getController.run.bind(getController)
	)

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
	 *             $ref: '#/components/schemas/Processor'
	 *     responses:
	 *       '201':
	 *         description: Procesador creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		'/processors/',
		...protectedRoute,
		hasPermission(PERMISSIONS.PROCESSORS.CREATE),
		postController.run.bind(postController)
	)

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
	 *             $ref: '#/components/schemas/Processor'
	 *     responses:
	 *       '200':
	 *         description: Procesador actualizado con éxito.
	 *       '404':
	 *         description: Procesador no encontrado.
	 */
	router.patch(
		'/processors/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.PROCESSORS.UPDATE),
		patchController.run.bind(patchController)
	)

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
	router.delete(
		'/processors/:id',
		...protectedRoute,
		hasPermission(PERMISSIONS.PROCESSORS.DELETE),
		deleteController.run.bind(deleteController)
	)
}

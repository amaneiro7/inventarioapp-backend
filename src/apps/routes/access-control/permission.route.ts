import { type Router } from 'express'
import { container } from '../../di/container'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { PermissionDependencies } from '../../di/access-control/permission.di'
import { type PermissionGetController } from '../../controllers/access-control/permission.get.controller'
import { type PermissionGetAllController } from '../../controllers/access-control/permission.get-all.controller'
import { type PermissionPostController } from '../../controllers/access-control/permission.post.controller'
import { type PermissionDeleteController } from '../../controllers/access-control/permission.delete.controller'

export const register = async (router: Router) => {
	const getController: PermissionGetController = container.resolve(PermissionDependencies.GetController)
	const getAllController: PermissionGetAllController = container.resolve(PermissionDependencies.GetAllController)
	const postController: PermissionPostController = container.resolve(PermissionDependencies.PostController)
	const deleteController: PermissionDeleteController = container.resolve(PermissionDependencies.DeleteController)

	/**
	 * @swagger
	 * /permissions:
	 *   get:
	 *     tags: [Permisos]
	 *     summary: Obtener todos los permisos
	 *     description: Devuelve una lista paginada y filtrable de todos los permisos del sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de permisos obtenida con éxito.
	 */
	router.get(
		'/permissions/',
		...protectedRoute,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /permissions/{id}:
	 *   get:
	 *     tags: [Permisos]
	 *     summary: Obtener un permiso por ID
	 *     description: Devuelve los detalles de un permiso específico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID del permiso.
	 *     responses:
	 *       '200':
	 *         description: Detalles del permiso.
	 *       '404':
	 *         description: Permiso no encontrado.
	 */
	router.get('/permissions/:id', ...protectedRoute, getController.run.bind(getController))

	/**
	 * @swagger
	 * /permissions:
	 *   post:
	 *     tags: [Permisos]
	 *     summary: Crear un nuevo permiso
	 *     description: Añade un nuevo permiso al sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/Permission'
	 *     responses:
	 *       '201':
	 *         description: Permiso creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/permissions/', ...protectedRoute, postController.run.bind(postController))

	/**
	 * @swagger
	 * /permissions/{id}:
	 *   delete:
	 *     tags: [Permisos]
	 *     summary: Eliminar un permiso existente
	 *     description: Elimina un permiso específico del sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID del permiso a eliminar.
	 *     responses:
	 *       '200':
	 *         description: Permiso eliminado con éxito.
	 *       '404':
	 *         description: Permiso no encontrado.
	 */
	router.delete('/permissions/:id', ...protectedRoute, deleteController.run.bind(deleteController))
}

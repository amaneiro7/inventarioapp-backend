import { type Router } from 'express'
import { container } from '../../di/container'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { PermissionGroupDependencies } from '../../di/access-control/permission-group.di'
import { type PermissionGroupGetController } from '../../controllers/access-control/permission-group.get.controller'
import { type PermissionGroupGetAllController } from '../../controllers/access-control/permission-group.get-all.controller'
import { type PermissionGroupPostController } from '../../controllers/access-control/permission-group.post.controller'
import { type PermissionGroupDeleteController } from '../../controllers/access-control/permission-group.delete.controller'
import { type PermissionGroupPatchController } from '../../controllers/access-control/permission-group.patch.controller'

export const register = async (router: Router) => {
	const getController: PermissionGroupGetController = container.resolve(PermissionGroupDependencies.GetController)
	const getAllController: PermissionGroupGetAllController = container.resolve(
		PermissionGroupDependencies.GetAllController
	)
	const postController: PermissionGroupPostController = container.resolve(PermissionGroupDependencies.PostController)
	const patchController: PermissionGroupPatchController = container.resolve(
		PermissionGroupDependencies.PatchController
	)
	const deleteController: PermissionGroupDeleteController = container.resolve(
		PermissionGroupDependencies.DeleteController
	)

	/**
	 * @swagger
	 * /permission-groups:
	 *   get:
	 *     tags: [Grupos de Permisos]
	 *     summary: Obtener todos los grupos de permisos
	 *     description: Devuelve una lista paginada y filtrable de todos los grupos de permisos del sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de grupos de permisos obtenida con éxito.
	 */
	router.get(
		'/permission-groups/',
		...protectedRoute,
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /permission-groups/{id}:
	 *   get:
	 *     tags: [Grupos de Permisos]
	 *     summary: Obtener un grupo de permisos por ID
	 *     description: Devuelve los detalles de un grupo de permisos específico, incluyendo los permisos que contiene.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID del grupo de permisos.
	 *     responses:
	 *       '200':
	 *         description: Detalles del grupo de permisos.
	 *       '404':
	 *         description: Grupo de permisos no encontrado.
	 */
	router.get('/permission-groups/:id', ...protectedRoute, getController.run.bind(getController))

	/**
	 * @swagger
	 * /permission-groups:
	 *   post:
	 *     tags: [Grupos de Permisos]
	 *     summary: Crear un nuevo grupo de permisos
	 *     description: Añade un nuevo grupo de permisos al sistema, opcionalmente con una lista inicial de permisos.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/PermissionGroupCreate'
	 *     responses:
	 *       '201':
	 *         description: Grupo de permisos creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post('/permission-groups/', ...protectedRoute, postController.run.bind(postController))

	/**
	 * @swagger
	 * /permission-groups/{id}:
	 *   patch:
	 *     tags: [Grupos de Permisos]
	 *     summary: Actualizar un grupo de permisos existente
	 *     description: Actualiza el nombre de un grupo de permisos y/o añade o revoca permisos.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID del grupo de permisos a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/PermissionGroupUpdate'
	 *     responses:
	 *       '200':
	 *         description: Grupo de permisos actualizado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 *       '404':
	 *         description: Grupo de permisos no encontrado.
	 */
	router.patch('/permission-groups/:id', ...protectedRoute, patchController.run.bind(patchController))
	/**
	 * @swagger
	 * /permission-groups/{id}:
	 *   delete:
	 *     tags: [Grupos de Permisos]
	 *     summary: Eliminar un grupo de permisos existente
	 *     description: Elimina un grupo de permisos específico del sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID del grupo de permisos a eliminar.
	 *     responses:
	 *       '200':
	 *         description: Grupo de permisos eliminado con éxito.
	 *       '404':
	 *         description: Grupo de permisos no encontrado.
	 */
	router.delete('/permission-groups/:id', ...protectedRoute, deleteController.run.bind(deleteController))
}

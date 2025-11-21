import { type Router } from 'express'
import { container } from '../../di/container'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { hasPermission } from '../../Middleware/authorization'
import { PERMISSIONS } from '../../../Contexts/Shared/domain/permissions'
import { AccessPolicyDependencies } from '../../di/access-control/access-policy.di'
import { type AccessPolicyGetController } from '../../controllers/access-control/access-policy.get.controller'
import { type AccessPolicyGetAllController } from '../../controllers/access-control/access-policy.get-all.controller'
import { type AccessPolicyPatchController } from '../../controllers/access-control/access-policy.patch.controller'
import { type AccessPolicyPostController } from '../../controllers/access-control/access-policy.post.controller'
import { type AccessPolicyDeleteController } from '../../controllers/access-control/access-policy.delete.controller'

export const register = async (router: Router) => {
	const routerPath = '/access-policies'
	const getController: AccessPolicyGetController = container.resolve(AccessPolicyDependencies.GetController)
	const getAllController: AccessPolicyGetAllController = container.resolve(AccessPolicyDependencies.GetAllController)
	const postController: AccessPolicyPostController = container.resolve(AccessPolicyDependencies.PostController)
	const patchController: AccessPolicyPatchController = container.resolve(AccessPolicyDependencies.PatchController)
	const deleteController: AccessPolicyDeleteController = container.resolve(AccessPolicyDependencies.DeleteController)

	/**
	 * @swagger
	 * /access_policies:
	 *   get:
	 *     tags: [Políticas de Acceso]
	 *     summary: Obtener todas las políticas de acceso
	 *     description: Devuelve una lista paginada y filtrable de todas las políticas de acceso del sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de políticas de acceso obtenida con éxito.
	 */
	router.get(
		routerPath,
		...protectedRoute,
		hasPermission(PERMISSIONS.ACCESS_POLICIES.READ_LIST), // <-- ¡Ahora es tipado!
		criteriaConverterMiddleware,
		getAllController.run.bind(getAllController)
	)

	/**
	 * @swagger
	 * /access-policies/{id}:
	 *   get:
	 *     tags: [Políticas de Acceso]
	 *     summary: Obtener una política de acceso por ID
	 *     description: Devuelve los detalles de una política de acceso específica.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID de la política de acceso.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la política de acceso.
	 *       '404':
	 *         description: Política de acceso no encontrada.
	 */
	router.get(
		`${routerPath}/:id`,
		...protectedRoute,
		hasPermission(PERMISSIONS.ACCESS_POLICIES.READ), // <-- ¡Ahora es tipado!
		getController.run.bind(getController)
	)

	/**
	 * @swagger
	 * /access-policies:
	 *   post:
	 *     tags: [Políticas de Acceso]
	 *     summary: Crear una nueva política de acceso
	 *     description: Añade una nueva política de acceso al sistema, vinculando un grupo de permisos, un cargo y un departamento.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/AccessPolicyCreate'
	 *     responses:
	 *       '201':
	 *         description: Política de acceso creada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 */
	router.post(
		routerPath,
		...protectedRoute,
		hasPermission(PERMISSIONS.ACCESS_POLICIES.CREATE), // <-- ¡Ahora es tipado!
		postController.run.bind(postController)
	)

	/**
	 * @swagger
	 * /access-policies/{id}:
	 *   patch:
	 *     tags: [Políticas de Acceso]
	 *     summary: Actualizar una política de acceso existente
	 *     description: Actualiza los detalles de una política de acceso, como el grupo de permisos, cargo o departamento asociado.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID de la política de acceso a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/AccessPolicyUpdate'
	 *     responses:
	 *       '200':
	 *         description: Política de acceso actualizada con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 *       '404':
	 *         description: Política de acceso no encontrada.
	 */
	router.patch(
		`${routerPath}/:id`,
		...protectedRoute,
		hasPermission(PERMISSIONS.ACCESS_POLICIES.UPDATE), // <-- ¡Ahora es tipado!
		patchController.run.bind(patchController)
	)
	/**
	 * @swagger
	 * /access-policies/{id}:
	 *   delete:
	 *     tags: [Políticas de Acceso]
	 *     summary: Eliminar una política de acceso existente
	 *     description: Elimina una política de acceso específica del sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         format: uuid
	 *         schema:
	 *           type: string
	 *         description: ID de la política de acceso a eliminar.
	 *     responses:
	 *       '200':
	 *         description: Política de acceso eliminada con éxito.
	 *       '404':
	 *         description: Política de acceso no encontrada.
	 */
	router.delete(
		`${routerPath}/:id`,
		...protectedRoute,
		hasPermission(PERMISSIONS.ACCESS_POLICIES.DELETE), // <-- ¡Ahora es tipado!
		deleteController.run.bind(deleteController)
	)
}

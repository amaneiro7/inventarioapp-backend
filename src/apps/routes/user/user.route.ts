import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { UserDependencies } from '../../di/user/user.di'
import { type UserGetController } from '../../controllers/user/user.get.controller'
import { type UserGetAllController } from '../../controllers/user/user.get-all.controller'
import { type UserPostController } from '../../controllers/user/user.post.controller'
import { type UserPatchController } from '../../controllers/user/user.patch.controller'
import { type UserDeleteController } from '../../controllers/user/user.delete.controller'
import { type UserGetByEmailController } from '../../controllers/user/user.get-by-email.controller'
import { type UserChangePasswordController } from '../../controllers/user/user.change-password.controller'
import { type UserResetPasswordController } from '../../controllers/user/user.reset-password.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getController: UserGetController = container.resolve(UserDependencies.GetController)
	const getAllController: UserGetAllController = container.resolve(UserDependencies.GetAllController)
	const postController: UserPostController = container.resolve(UserDependencies.PostController)
	const patchController: UserPatchController = container.resolve(UserDependencies.PatchController)
	const deleteController: UserDeleteController = container.resolve(UserDependencies.DeleteController)
	const getByEmailController: UserGetByEmailController = container.resolve(UserDependencies.GetByEmailController)
	const changePaswwordController: UserChangePasswordController = container.resolve(
		UserDependencies.ChangePasswordController
	)
	const resetPasswordController: UserResetPasswordController = container.resolve(
		UserDependencies.ResetPasswordController
	)

	/**
	 * @swagger
	 * /users:
	 *   get:
	 *     tags:
	 *       - Usuarios
	 *     summary: Obtener todos los usuarios
	 *     description: Devuelve una lista de todos los usuarios registrados.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de usuarios obtenida con éxito.
	 */
	router.get('/users/', authenticate, criteriaConverterMiddleware, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /users/by-email:
	 *   get:
	 *     tags:
	 *       - Usuarios
	 *     summary: Obtener un usuario por email
	 *     description: Devuelve los detalles de un usuario específico buscando por su dirección de correo electrónico.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: query
	 *         name: email
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: Dirección de correo electrónico del usuario.
	 *         example: "usuario@example.com"
	 *     responses:
	 *       '200':
	 *         description: Detalles del usuario.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.get('/users/by-email', authenticate, getByEmailController.run.bind(getByEmailController))

	/**
	 * @swagger
	 * /users/{id}:
	 *   get:
	 *     tags:
	 *       - Usuarios
	 *     summary: Obtener un usuario por ID
	 *     description: Devuelve los detalles de un usuario específico buscando por su ID.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del usuario.
	 *     responses:
	 *       '200':
	 *         description: Detalles del usuario.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.get('/users/:id', authenticate, getController.run.bind(getController))

	/**
	 * @swagger
	 * /users/register:
	 *   post:
	 *     tags:
	 *       - Usuarios
	 *     summary: Registrar un nuevo usuario
	 *     description: Crea una nueva cuenta de usuario en el sistema.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/UserRegister'
	 *     responses:
	 *       '201':
	 *         description: Usuario registrado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos o usuario ya existente.
	 */
	router.post('/users/register', authenticate, postController.run.bind(postController))

	/**
	 * @swagger
	 * /users/update:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Actualizar información de usuario
	 *     description: Actualiza los datos de un usuario existente.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/UserUpdate'
	 *     responses:
	 *       '200':
	 *         description: Usuario actualizado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/update', authenticate, patchController.run.bind(patchController))

	/**
	 * @swagger
	 * /users/change-password:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Cambiar contraseña de usuario
	 *     description: Permite a un usuario autenticado cambiar su propia contraseña.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/UserChangePassword'
	 *     responses:
	 *       '200':
	 *         description: Contraseña cambiada con éxito.
	 *       '400':
	 *         description: Contraseña actual incorrecta o datos no válidos.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/change-password', authenticate, changePaswwordController.run.bind(changePaswwordController))

	/**
	 * @swagger
	 * /users/reset-password:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Restablecer contraseña de usuario
	 *     description: Permite restablecer la contraseña de un usuario (típicamente por un administrador o un proceso de recuperación).
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             $ref: '#/components/schemas/UserResetPassword'
	 *     responses:
	 *       '200':
	 *         description: Contraseña restablecida con éxito.
	 *       '400':
	 *         description: Datos no válidos.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/reset-password', authenticate, resetPasswordController.run.bind(resetPasswordController))

	/**
	 * @swagger
	 * /users:
	 *   delete:
	 *     tags:
	 *       - Usuarios
	 *     summary: Eliminar un usuario
	 *     description: Elimina un usuario del sistema por su ID.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: query
	 *         name: id
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: ID del usuario a eliminar.
	 *     responses:
	 *       '204':
	 *         description: Usuario eliminado con éxito.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.delete('users/', authenticate, deleteController.run.bind(deleteController))
}

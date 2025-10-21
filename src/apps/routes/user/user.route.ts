import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { UserDependencies } from '../../di/user/user.di'
import { type UserGetAllController } from '../../controllers/user/user.get-all.controller'
import { type UserDeleteController } from '../../controllers/user/user.delete.controller'
import { type UserChangePasswordController } from '../../controllers/user/user.change-password.controller'
import { type UserResetPasswordController } from '../../controllers/user/user.reset-password.controller'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'

export const register = async (router: Router) => {
	const getAllController: UserGetAllController = container.resolve(UserDependencies.GetAllController)
	const deleteController: UserDeleteController = container.resolve(UserDependencies.DeleteController)
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

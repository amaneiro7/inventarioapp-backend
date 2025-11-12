import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { authenticateTemporaryToken } from '../../Middleware/authenticateTemporaryToken'
import { UserDependencies } from '../../di/user/user.di'
import { criteriaConverterMiddleware } from '../../Middleware/criteriaConverterMiddleware'
import { type UserGetAllController } from '../../controllers/user/user.get-all.controller'
import { type UserDisabledController } from '../../controllers/user/user.disabled.controller'
import { type UserChangePasswordController } from '../../controllers/user/user.change-password.controller'
import { type UserResetPasswordController } from '../../controllers/user/user.reset-password.controller'
import { type UserGetController } from '../../controllers/user/user.get.controller'
import { type UserCreateController } from '../../controllers/user/user.create.controller'
import { type UserUnlockAccountController } from '../../controllers/user/user.unlock-account.controller'
import { type UserReactivateAccountController } from '../../controllers/user/user.reactivate.controller'
import { type UserForceChangePasswordController } from '../../controllers/user/user.force-change-password.controller'
import { type UserPatchController } from '../../controllers/user/user.patch.controller'

export const register = async (router: Router) => {
	const getController: UserGetController = container.resolve(UserDependencies.GetController)
	const getAllController: UserGetAllController = container.resolve(UserDependencies.GetAllController)
	const disabledController: UserDisabledController = container.resolve(UserDependencies.DisabledController)
	const reactivateController: UserReactivateAccountController = container.resolve(
		UserDependencies.ReactivateAccountController
	)
	const changePaswwordController: UserChangePasswordController = container.resolve(
		UserDependencies.ChangePasswordController
	)
	const resetPasswordController: UserResetPasswordController = container.resolve(
		UserDependencies.ResetPasswordController
	)
	const createUserController: UserCreateController = container.resolve(UserDependencies.CreateController)
	const unlockAccountController: UserUnlockAccountController = container.resolve(
		UserDependencies.UnlockAccountController
	)
	const forceChangePasswordController: UserForceChangePasswordController = container.resolve(
		UserDependencies.ForceChangePasswordController
	)

	const patchController: UserPatchController = container.resolve(UserDependencies.PatchController)

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
	 *     summary: Crear un usuario a partir de un empleado
	 *     description: Crea una nueva cuenta de usuario para un empleado existente.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               employeeId:
	 *                 type: string
	 *                 format: uuid
	 *               roleId:
	 *                 type: string
	 *                 format: uuid
	 *     responses:
	 *       '201':
	 *         description: Usuario creado con éxito.
	 *       '400':
	 *         description: Datos de entrada no válidos o el usuario ya existe.
	 */
	router.post('/users/register', authenticate, createUserController.run.bind(createUserController))
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
	 *       '401':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/change-password', authenticate, changePaswwordController.run.bind(changePaswwordController))

	/**
	 * @swagger
	 * /users/force-change-password:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Forzar cambio de contraseña expirada
	 *     description: Permite a un usuario cambiar su contraseña cuando ha expirado, usando un token temporal.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               newPassword:
	 *                 type: string
	 *               reTypePassword:
	 *                 type: string
	 *     responses:
	 *       '200':
	 *         description: Contraseña cambiada con éxito. El usuario debe volver a iniciar sesión.
	 *       '403':
	 *         description: Token temporal inválido o expirado.
	 */
	router.patch(
		'/users/force-change-password',
		authenticateTemporaryToken,
		forceChangePasswordController.run.bind(forceChangePasswordController)
	)

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
	 *         description: Contraseña restablecida con éxito por un administrador.
	 *       '400':
	 *         description: Datos no válidos.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/reset-password', authenticate, resetPasswordController.run.bind(resetPasswordController))

	/**
	 * @swagger
	 * /users/unlock:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Desbloquear cuenta de usuario
	 *     description: Permite a un administrador desbloquear la cuenta de un usuario.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               id:
	 *                 type: string
	 *                 format: uuid
	 *                 description: ID del usuario a desbloquear.
	 *     responses:
	 *       '200':
	 *         description: Cuenta de usuario desbloqueada con éxito.
	 *       '400':
	 *         description: ID de usuario no proporcionado.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/unlock', authenticate, unlockAccountController.run.bind(unlockAccountController))

	/**
	 * @swagger
	 * /users/disable:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Deshabilitar un usuario
	 *     description: Deshabilita la cuenta de un usuario y revierte el tipo del empleado asociado. No es una eliminación física.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               id:
	 *                 type: string
	 *                 format: uuid
	 *                 description: ID del usuario a deshabilitar.
	 *     responses:
	 *       '200':
	 *         description: Usuario deshabilitado con éxito.
	 *       '400':
	 *         description: ID de usuario no proporcionado.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/disable', authenticate, disabledController.run.bind(disabledController))

	/**
	 * @swagger
	 * /users/reactivate:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Reactivar un usuario deshabilitado
	 *     description: Reactiva una cuenta de usuario que fue previamente deshabilitada y vuelve a marcar al empleado como tipo 'servicio'.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               id:
	 *                 type: string
	 *                 format: uuid
	 *                 description: ID del usuario a reactivar.
	 *     responses:
	 *       '200':
	 *         description: Usuario reactivado con éxito.
	 */

	router.patch('/users/reactivate', authenticate, reactivateController.run.bind(reactivateController))

	/**
	 * @swagger
	 * /users/update:
	 *   patch:
	 *     tags:
	 *       - Usuarios
	 *     summary: Actualizar datos de un usuario
	 *     description: Permite a un administrador actualizar los datos de un usuario, como nombre, apellido o email.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               id:
	 *                 type: string
	 *                 format: uuid
	 *               name:
	 *                 type: string
	 *               lastName:
	 *                 type: string
	 *               email:
	 *                 type: string
	 *                 format: email
	 *     responses:
	 *       '200':
	 *         description: Usuario actualizado con éxito.
	 *       '404':
	 *         description: Usuario no encontrado.
	 */
	router.patch('/users/update', authenticate, patchController.run.bind(patchController))
}

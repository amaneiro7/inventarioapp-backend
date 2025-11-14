import { type Router } from 'express'
import { container } from '../../di/container'
import { protectedRoute } from '../../Middleware/protectedRoute'
import { AppSettingsDependencies } from '../../di/app-settings/app-settings.di'
import { type SettingsGetController } from '../../controllers/app-settings/settings.get.controller'
import { type SettingsGetAllController } from '../../controllers/app-settings/settings.get-all.controller'
import { type SettingsPatchController } from '../../controllers/app-settings/settings.patch.controller'
import { type SettingsPatchBulkController } from '../../controllers/app-settings/settings.patch-bulk.controller'
import { SettingsAllowedDomainsGetController } from '../../controllers/app-settings/settings.get-allowed.controller'

export const register = async (router: Router) => {
	const getController: SettingsGetController = container.resolve(AppSettingsDependencies.GetController)
	const getAllController: SettingsGetAllController = container.resolve(AppSettingsDependencies.GetAllController)
	const patchController: SettingsPatchController = container.resolve(AppSettingsDependencies.PatchController)
	const patchBulkController: SettingsPatchBulkController = container.resolve(
		AppSettingsDependencies.PatchBulkController
	)
	const getAllowedDomainsController: SettingsAllowedDomainsGetController = container.resolve(
		AppSettingsDependencies.AllowedDomainsGetController
	)

	/**
	 * @swagger
	 * /settings:
	 *   get:
	 *     tags:
	 *       - Configuraciones
	 *     summary: Obtener todas las configuraciones
	 *     description: Devuelve una lista de todas las configuraciones de la aplicación.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Lista de configuraciones obtenida con éxito.
	 */
	router.get('/settings/', ...protectedRoute, getAllController.run.bind(getAllController))

	/**
	 * @swagger
	 * /settings/allowed-domains:
	 *   get:
	 *     tags:
	 *       - Configuraciones
	 *     summary: Obtener los dominios de email permitidos
	 *     description: Devuelve la lista de dominios de email permitidos para el registro de nuevos usuarios.
	 *     security:
	 *       - bearerAuth: []
	 *     responses:
	 *       '200':
	 *         description: Configuración de dominios permitidos obtenida con éxito.
	 *         content:
	 *           application/json:
	 *             schema:
	 *               type: object
	 *               properties:
	 *                 key:
	 *                   type: string
	 *                 value:
	 *                   type: string
	 */
	router.get(
		'/settings/allowed-domains',
		...protectedRoute,
		getAllowedDomainsController.run.bind(getAllowedDomainsController)
	)
	/**
	 * @swagger
	 * /settings/{key}:
	 *   get:
	 *     tags:
	 *       - Configuraciones
	 *     summary: Obtener una configuración por su clave
	 *     description: Devuelve el valor de una configuración específica buscando por su clave.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: key
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: Clave única de la configuración.
	 *     responses:
	 *       '200':
	 *         description: Detalles de la configuración.
	 *       '404':
	 *         description: Configuración no encontrada.
	 */
	router.get('/settings/:key', ...protectedRoute, getController.run.bind(getController))

	/**
	 * @swagger
	 * /settings/bulk-update:
	 *   patch:
	 *     tags:
	 *       - Configuraciones
	 *     summary: Actualizar múltiples configuraciones
	 *     description: Actualiza el valor de múltiples configuraciones en una sola operación.
	 *     security:
	 *       - bearerAuth: []
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               settings:
	 *                 type: array
	 *                 items:
	 *                   type: object
	 *                   properties:
	 *                     key:
	 *                       type: string
	 *                     value:
	 *                       type: string
	 *     responses:
	 *       '200':
	 *         description: Configuraciones actualizadas con éxito.
	 *       '400':
	 *         description: Petición mal formada o error de validación.
	 */
	router.patch('/settings/bulk-update', ...protectedRoute, patchBulkController.run.bind(patchBulkController))

	/**
	 * @swagger
	 * /settings/{key}:
	 *   patch:
	 *     tags:
	 *       - Configuraciones
	 *     summary: Actualizar una configuración
	 *     description: Actualiza el valor de una configuración existente.
	 *     security:
	 *       - bearerAuth: []
	 *     parameters:
	 *       - in: path
	 *         name: key
	 *         required: true
	 *         schema:
	 *           type: string
	 *         description: Clave de la configuración a actualizar.
	 *     requestBody:
	 *       required: true
	 *       content:
	 *         application/json:
	 *           schema:
	 *             type: object
	 *             properties:
	 *               value:
	 *                 type: string
	 *                 description: El nuevo valor para la configuración.
	 *     responses:
	 *       '200':
	 *         description: Configuración actualizada con éxito.
	 *       '404':
	 *         description: Configuración no encontrada.
	 */
	router.patch('/settings/:key', ...protectedRoute, patchController.run.bind(patchController))
}

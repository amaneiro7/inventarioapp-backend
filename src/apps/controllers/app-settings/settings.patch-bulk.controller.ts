import { NextFunction, type Request, type Response } from 'express'
import { Controller } from '../controller'
import { httpStatus } from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { isSuperAdmin } from '../../../Contexts/User/Role/application/isSuperAdmin'
import { type SettingsUpdaterBulk } from '../../../Contexts/Shared/AppSettings/application/SettingsUpdaterBulk'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { SUCCESS_MESSAGES } from '../../constants/messages'
import { container } from '../../di/container'
import { AppSettingsDependencies } from '../../di/app-settings/app-settings.di'

type SettingsBulkRequestBody = Array<{ key: string; value: string }>

export class SettingsPatchBulkController implements Controller {
	/**
	 * Handles the request to update a Settings.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request<object, object, SettingsBulkRequestBody>, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			isSuperAdmin({ user })

			const settingsArray = req.body

			if (!Array.isArray(settingsArray)) {
				res.status(httpStatus[400].statusCode).json({
					...httpStatus[400],
					message: 'Request body must be an array of settings.'
				})
				return
			}

			const updateBulk: SettingsUpdaterBulk = container.resolve(AppSettingsDependencies.UpdaterBulk)
			await updateBulk.run({ settings: settingsArray })

			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.SETTINGS_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}

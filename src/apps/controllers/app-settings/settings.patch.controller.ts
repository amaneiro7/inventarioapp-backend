import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SettingsUpdater } from '../../../Contexts/Shared/AppSettings/application/SettingsUpdater'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SUCCESS_MESSAGES } from '../../constants/messages'
import { AppSettingsDependencies } from '../../di/app-settings/app-settings.di'
import { isSuperAdmin } from '../../../Contexts/User/Role/application/isSuperAdmin'

/**
 * Controller for updating an existing Settings.
 */
export class SettingsPatchController implements Controller {
	/**
	 * Handles the request to update a Settings.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params` and update parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			isSuperAdmin({ user: req.user as JwtPayloadUser })
			const { value } = req.body
			const { key } = req.params
			const update: SettingsUpdater = container.resolve(AppSettingsDependencies.Updater)
			await update.run({ key, value })
			res.status(httpStatus[200].statusCode).json({
				message: SUCCESS_MESSAGES.SETTINGS_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}

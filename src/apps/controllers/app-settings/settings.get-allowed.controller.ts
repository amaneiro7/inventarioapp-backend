import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type SettingsFinder } from '../../../Contexts/Shared/AppSettings/application/SettingsFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AppSettingsDependencies } from '../../di/app-settings/app-settings.di'
import { AppSettingKeys } from '../../../Contexts/Shared/AppSettings/domain/entity/SettingsKeys'

/**
 * Controller for retrieving a single Settings by its ID.
 */
export class SettingsAllowedDomainsGetController implements Controller {
	/**
	 * Handles the request to get a Settings by ID.
	 * @param {Request} req - The Express request object, containing the brand ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const get: SettingsFinder = container.resolve(AppSettingsDependencies.Finder)
			const key = AppSettingKeys.SECURITY.ALLOWED_EMAIL_DOMAINS
			const data = await get.run({ key })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

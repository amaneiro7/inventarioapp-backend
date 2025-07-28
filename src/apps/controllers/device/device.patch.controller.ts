import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import { type DeviceUpdater } from '../../../Contexts/Device/Device/application/DeviceUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for updating an existing device.
 */
export class DevicePatchController implements Controller {
	/**
	 * Handles the request to update a device.
	 * @param {Request} req - The Express request object, containing the user payload in `req.user`, update parameters in `req.body`, and device ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const params = req.body
			const { id } = req.params
			const update: DeviceUpdater = container.resolve(DeviceDependencies.Updater)
			await update.run({ id, params, user })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.DEVICE_UPDATED
			})
		} catch (error) {
			next(error)
		}
	}
}

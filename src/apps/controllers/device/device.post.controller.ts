import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/service/GenerateToken'
import { type DeviceCreator } from '../../../Contexts/Device/Device/application/DeviceCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new device.
 */
export class DevicePostController implements Controller {
	/**
	 * Handles the request to create a new device.
	 * @param {Request} req - The Express request object, containing the user payload in `req.user` and device parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const params = req.body
			const create: DeviceCreator = container.resolve(DeviceDependencies.Creator)
			await create.run({ params, user })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.DEVICE_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}

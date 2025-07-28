import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { DeviceDependencies } from '../../di/device/device.di'
import { DeviceRemover } from '../../../Contexts/Device/Device/application/DeviceRemover'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting a device.
 */
export class DeviceDeleteController implements Controller {
	/**
	 * Handles the request to delete a device by its ID.
	 * @param {Request} req - The Express request object, containing the device ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const remover: DeviceRemover = container.resolve(DeviceDependencies.Remover)
			await remover.run({ id })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.DEVICE_DELETED
			})
		} catch (error) {
			next(error)
		}
	}
}

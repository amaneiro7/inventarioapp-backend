import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type BrandCreator } from '../../../Contexts/Brand/application/BrandCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { BrandDependencies } from '../../di/brand/brand.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for creating a new Brand.
 */
export class BrandPostController implements Controller {
	/**
	 * Handles the request to create a new Brand.
	 * @param {Request} req - The Express request object, containing brand parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: BrandCreator = container.resolve(BrandDependencies.Creator)
			await create.run(params)
			res.status(httpStatus[201].statusCode).json({
				message: SUCCESS_MESSAGES.BRAND_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}

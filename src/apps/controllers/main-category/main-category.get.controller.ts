import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type MainCategoriesFinder } from '../../../Contexts/Category/MainCategory/application/MainCategoryFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MainCategoryDependencies } from '../../di/main-category/main-category.di'

/**
 * Controller for retrieving a single MainCategory by its ID.
 */
export class MainCategoryGetController implements Controller {
	/**
	 * Handles the request to get a MainCategory by ID.
	 * @param {Request} req - The Express request object, containing the main category ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const get: MainCategoriesFinder = container.resolve(MainCategoryDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

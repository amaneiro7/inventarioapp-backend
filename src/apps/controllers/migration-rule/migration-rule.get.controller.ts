import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { MigrationRuleFinder } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleFInder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MigrationRuleDependencies } from '../../di/device/migrationRule.di'

/**
 * Controller for retrieving a single MigrationRule by its ID.
 */
export class MigrationRuleGetController implements Controller {
	/**
	 * Handles the request to get a MigrationRule by ID.
	 * @param {Request} req - The Express request object, containing the MigrationRule ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			const get: MigrationRuleFinder = container.resolve(MigrationRuleDependencies.Finder)
			const data = await get.run({ id })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { MigrationRuleCreator } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SUCCESS_MESSAGES } from '../../constants/messages'
import { MigrationRuleDependencies } from '../../di/device/migrationRule.di'

/**
 * Controller for creating a new MigrationRule entry.
 */
export class MigrationRulePostController implements Controller {
	/**
	 * Handles the request to create a new MigrationRule entry.
	 * @param {Request} req - The Express request object, containing MigrationRule parameters in `req.body`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: MigrationRuleCreator = container.resolve(MigrationRuleDependencies.Creator)
			await create.run({ params })
			res.status(httpStatus[201].statusCode).send({
				message: SUCCESS_MESSAGES.MIGRATION_RULE_CREATED
			})
		} catch (error) {
			next(error)
		}
	}
}

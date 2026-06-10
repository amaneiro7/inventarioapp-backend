import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { MigrationRuleRemover } from '../../../Contexts/Device/features/deviceEvaluation/application/MigrationRuleRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MigrationRuleDependencies } from '../../di/device/migrationRule.di'
import { SUCCESS_MESSAGES } from '../../constants/messages'

/**
 * Controller for deleting an MigrationRule.
 */
export class MigrationRuleDeleteController implements Controller {
	/**
	 * Handles the request to delete an MigrationRule by their ID.
	 * @param {Request} req - The Express request object, containing the MigrationRule ID in `req.params`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const id = String(req.params.id)
			const remover: MigrationRuleRemover = container.resolve(MigrationRuleDependencies.Remover)
			await remover.run({ id })
			res.status(httpStatus[200].statusCode).send({
				message: SUCCESS_MESSAGES.MIGRATION_RULE_DELETED
			})
		} catch (error) {
			next(error)
		}
	}
}

import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { EvaluationHardwareDashboard } from '../../../Contexts/Device/features/deviceEvaluation/application/EvaluationHardwareDashboard'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MigrationRuleDependencies } from '../../di/device/migrationRule.di'

/**
 * Controller for retrieving evaluation hardware dashboard data.
 */
export class EvaluationHardwareDashboardGetController implements Controller {
	/**
	 * Handles the request to get evaluation hardware dashboard data.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: EvaluationHardwareDashboard = container.resolve(
				MigrationRuleDependencies.EvaluationHardwareDashboard
			)

			const data = await getAll.run(req.criteria)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

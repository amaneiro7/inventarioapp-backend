import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { ComputerCountBrandDashboard } from '../../../Contexts/Device/Inventory/application/ComputerCountBrandDashboard'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'

/**
 * Controller for retrieving computer dashboard data.
 */
export class ComputerCountBrandDashboardGetController implements Controller {
	/**
	 * Handles the request to get computer dashboard data.
	 * @param {Request} req - The Express request object.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: ComputerCountBrandDashboard = container.resolve(
				ComputerDashboardDependencies.ComputerCountBrandDashboard
			)

			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type DeviceMonitoringDashboardByState } from '../../../Contexts/Device/DeviceMonitoring/application/DeviceMonitoringDashboardByState'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ComputerDashboardDependencies } from '../../di/device/computerDashboard.di'

/**
 * Controller for retrieving device monitoring dashboard data aggregated by state.
 */
export class DeviceMonitoringDashboardByStateGetController implements Controller {
	/**
	 * Handles the request to get device monitoring dashboard data by state.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the response is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const get: DeviceMonitoringDashboardByState = container.resolve(
				ComputerDashboardDependencies.DeviceMonitoringDashboardByState
			)
			const data = await get.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

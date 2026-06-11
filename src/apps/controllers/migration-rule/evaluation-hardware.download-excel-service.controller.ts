import type { Request, Response, NextFunction } from 'express'
import type { Controller } from '../controller'
import type { EvaluationHardwareExcelService } from '../../../Contexts/Device/features/deviceEvaluation/application/EvaluationHardwareExcelService'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { MigrationRuleDependencies } from '../../di/device/migrationRule.di'

/**
 * Controller for downloading EvaluationHardware data as an Excel file.
 */
export class EvaluationHardwareDownloadExcelServiceController implements Controller {
	/**
	 * Handles the request to download EvaluationHardware data.
	 * It uses the `req.criteria` (populated by `criteriaConverterMiddleware`) to filter and sort the data.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the Excel file is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const downloadExcel: EvaluationHardwareExcelService = container.resolve(
				MigrationRuleDependencies.ExcelService
			)
			const buf = await downloadExcel.run(req.criteria!)
			const now = new Date()

			const filename = `Reporte-Inventario${now.toLocaleDateString().replace(/[/:]/g, '-')}.xlsx`
			res.status(httpStatus[200].statusCode)
				.setHeader('Content-Disposition', `attachment filename=${filename}`)
				.setHeader('Content-Type', 'application/vnd.ms-excel')
				.send(buf)
		} catch (error) {
			next(error)
		}
	}
}

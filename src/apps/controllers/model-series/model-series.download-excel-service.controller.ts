import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ModelSeriesExcelService } from '../../../Contexts/ModelSeries/ModelSeries/application/ModelExcelService'
import { type FiltersPrimitives } from '../../../Contexts/Shared/domain/criteria/Filter'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { ModelSeriesDependencies } from '../../di/model-series/model-series.di'
import { SearchByCriteriaQuery } from '../../../Contexts/Shared/domain/SearchByCriteriaQuery'

/**
 * Controller for downloading model series data as an Excel file.
 */
export class ModelSeriesDownloadExcelServiceController implements Controller {
	/**
	 * Handles the request to download model series data.
	 * It uses the `req.criteria` (populated by `criteriaConverterMiddleware`) to filter and sort the data.
	 * @param {Request} req - The Express request object, containing criteria in `req.criteria`.
	 * @param {Response} res - The Express response object.
	 * @param {NextFunction} next - The Express next middleware function.
	 * @returns {Promise<void>} A promise that resolves when the Excel file is sent or an error is passed to the next middleware.
	 */
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { filters, orderBy, orderType, limit, offset } = req.query
			const query = new SearchByCriteriaQuery(
				filters ? (filters as unknown as FiltersPrimitives[]) : [],
				orderBy ? (orderBy as string) : undefined,
				orderType ? (orderType as string) : undefined,
				limit ? Number(limit) : undefined,
				offset ? Number(offset) : undefined
			)
			const downloadExcel: ModelSeriesExcelService = container.resolve(ModelSeriesDependencies.ExcelService)
			const buf = await downloadExcel.run(query)
			const now = new Date()
			const filename = `Reporte-Inventario${now.toLocaleDateString().replace(/[/:]/g, '-')}.xlsx`
			res.status(httpStatus[200].statusCode)
				.setHeader('Content-Disposition', `attachment filename=${filename}`)
				.setHeader('Content-Type', 'application/vnd.ms-excel')
				.end(buf)
		} catch (error) {
			next(error)
		}
	}
}

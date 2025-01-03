import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type FiltersPrimitives } from "../../../Contexts/Shared/domain/criteria/Filter"
import { type ModelSeriesExcelService } from "../../../Contexts/ModelSeries/ModelSeries/application/ModelExcelService"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { SearchByCriteriaQuery } from "../../../Contexts/Shared/domain/SearchByCriteriaQuery"
import { ModelSeriesDependencies } from "../../di/model-series.di"


export class ModelSeriesDownloadExcelServiceController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { filters, orderBy, orderType, limit, offset } = req.query
            const query = new SearchByCriteriaQuery(
                filters ? filters as unknown as FiltersPrimitives[] : [],
                orderBy ? orderBy as string : undefined,
                orderType ? orderType as string : undefined,
                limit ? Number(limit) : undefined,
                offset ? Number(offset) : undefined
            )
            const downloadExcel: ModelSeriesExcelService = container.resolve(ModelSeriesDependencies.ExcelService)
            const buf = await downloadExcel.run(query)
            const now = new Date()
            const filename = `Reporte-Inventario${now.toLocaleDateString().replace(/[/:]/g, '-')}.xlsx`
            res
                .status(httpStatus.OK)
                .setHeader('Content-Disposition', `attachment filename=${filename}`)
                .setHeader('Content-Type', 'application/vnd.ms-excel')
                .end(buf)
        } catch (error) {
            next(error)
        }
    }
}
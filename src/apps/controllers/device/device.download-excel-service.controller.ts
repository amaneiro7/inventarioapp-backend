import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type DeviceExcelService } from "../../../Contexts/Device/Device/application/DeviceExcelService"
import { type FiltersPrimitives } from "../../../Contexts/Shared/domain/criteria/Filter"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { DeviceDependencies } from "../../di/device/device.di"
import { SearchByCriteriaQuery } from "../../../Contexts/Shared/domain/SearchByCriteriaQuery"


export class DeviceDownloadExcelServiceController implements Controller {
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
            const downloadExcel: DeviceExcelService = container.resolve(DeviceDependencies.ExcelService)
            const buf = await downloadExcel.run(query)
            const now = new Date()

            const filename = `Reporte-Inventario${now.toLocaleDateString().replace(/[/:]/g, '-')}.xlsx`
            res
                .status(httpStatus.OK)
                .setHeader('Content-Disposition', `attachment filename=${filename}`)
                .setHeader('Content-Type', 'application/vnd.ms-excel')
                .send(buf)
        } catch (error) {
            next(error)
        }
    }
}
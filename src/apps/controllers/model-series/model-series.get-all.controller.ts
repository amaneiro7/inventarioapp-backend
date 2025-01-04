import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type ModelSeriesFinderAll } from "../../../Contexts/ModelSeries/ModelSeries/application/ModelSeriesFinderAll"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { ModelSeriesDependencies } from "../../di/model-series/model-series.di"


export class ModelSeriesGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: ModelSeriesFinderAll = container.resolve(ModelSeriesDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}
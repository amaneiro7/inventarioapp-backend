import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type CityFinderAll } from "../../../Contexts/Location/City/application/CityFinderAll"

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { CityDependencies } from "../../di/location/city.di"


export class CityGetAllController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const getAll: CityFinderAll = container.resolve(CityDependencies.FinderAll)
            const data = await getAll.run()
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}
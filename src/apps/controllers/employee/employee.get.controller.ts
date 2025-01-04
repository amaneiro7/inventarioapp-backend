import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type EmployeeFinder } from "../../../Contexts/employee/Employee/application/EmployeeFInder"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { EmployeeDependencies } from "../../di/employee/employee.di"

export class EmployeeGetController implements Controller {
    async run(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params
            const get: EmployeeFinder = container.resolve(EmployeeDependencies.Finder)
            const data = await get.run({ id })
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}
import { type Request, type Response, type NextFunction } from "express"
import { type Controller } from "../controller"
import { type FiltersPrimitives } from "../../../Contexts/Shared/domain/criteria/Filter"
import { type EmployeeSearchByCriteria } from "../../../Contexts/employee/Employee/application/EmployeeByCriteriaSearcher"
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from "../../di/container"
import { SearchByCriteriaQuery } from "../../../Contexts/Shared/domain/SearchByCriteriaQuery"
import { EmployeeDependencies } from "../../di/employee.di"

export class EmployeeSearchByCriteriaController implements Controller {
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
            const getByCriteria: EmployeeSearchByCriteria = container.resolve(EmployeeDependencies.SearchByCriteria)
            const data = await getByCriteria.run(query)
            res.status(httpStatus.OK).json(data)
        } catch (error) {
            next(error)
        }
    }
}
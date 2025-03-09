import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeFinderAll } from '../../../Contexts/employee/Employee/application/EmployeeFinderAll'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class EmployeeGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: EmployeeFinderAll = container.resolve(EmployeeDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}

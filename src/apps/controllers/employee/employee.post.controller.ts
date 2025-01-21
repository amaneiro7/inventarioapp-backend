import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeCreator } from '../../../Contexts/employee/Employee/application/EmployeeCreator'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'
export class EmployeePostController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const create: EmployeeCreator = container.resolve(
				EmployeeDependencies.Creator
			)
			await create.run(params)
			res.status(httpStatus.CREATED).send({
				message: 'Empleado creado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}

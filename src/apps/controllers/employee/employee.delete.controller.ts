import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeRemover } from '../../../Contexts/employee/Employee/application/EmployeeRemover'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'

export class EmployeeDeleteController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const { id } = req.params
			const remover: EmployeeRemover = container.resolve(EmployeeDependencies.Remover)
			await remover.run({ id })
			res.status(httpStatus.OK).send({
				message: 'Empleado eliminado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}

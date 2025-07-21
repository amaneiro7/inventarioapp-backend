import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeUpdater } from '../../../Contexts/employee/Employee/application/EmployeeUpdater'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'

export class EmployeePatchController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const params = req.body
			const { id } = req.params
			const update: EmployeeUpdater = container.resolve(EmployeeDependencies.Updater)
			await update.run({ id, params })
			res.status(httpStatus[204].statusCode).send({
				message: 'Empleado actualizado exitosamente'
			})
		} catch (error) {
			next(error)
		}
	}
}

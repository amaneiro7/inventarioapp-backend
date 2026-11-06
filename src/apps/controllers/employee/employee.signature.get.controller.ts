import type { Request, Response, NextFunction } from 'express'
import { type Controller } from '../controller'
import { type EmployeeSignatureFinder } from '../../../Contexts/employee/Employee/application/EmployeeSignatureFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { EmployeeDependencies } from '../../di/employee/employee.di'

export class EmployeeSignatureGetController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const identifier = String(req.params.identifier)
			const finder: EmployeeSignatureFinder = container.resolve(EmployeeDependencies.SignatureFinder)
			const signatureData = await finder.run({ identifier })

			res.status(httpStatus[200].statusCode).json({
				status: 'success',
				data: signatureData
			})
		} catch (error) {
			next(error)
		}
	}
}

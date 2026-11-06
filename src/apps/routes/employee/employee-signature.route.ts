import type { Router } from 'express'
import type { EmployeeSignatureGetController } from '../../controllers/employee/employee.signature.get.controller'
import { publicClientMiddleware } from '../../Middleware/publicClientMiddleware'
import { limiter } from '../../Middleware/rateLimit'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { container } from '../../di/container'

export const register = async (router: Router) => {
	const signatureController: EmployeeSignatureGetController = container.resolve(
		EmployeeDependencies.SignatureGetController
	)

	router.get(
		'/public/employees/signature/:identifier',
		limiter,
		publicClientMiddleware,
		signatureController.run.bind(signatureController)
	)
}

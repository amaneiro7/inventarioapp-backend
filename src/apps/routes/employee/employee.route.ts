import { type Router } from 'express'
import { container } from '../../di/container'
import { authenticate } from '../../Middleware/authenticate'
import { EmployeeDependencies } from '../../di/employee/employee.di'
import { type EmployeeSearchByCriteriaController } from '../../controllers/employee/employee.searchByCriteria.controller'
import { type EmployeeGetController } from '../../controllers/employee/employee.get.controller'
import { type EmployeePostController } from '../../controllers/employee/employee.post.controller'
import { type EmployeePatchController } from '../../controllers/employee/employee.patch.controller'
import { type EmployeeDeleteController } from '../../controllers/employee/employee.delete.controller'
import { type EmployeeGetAllController } from '../../controllers/employee/employee.get-all.controller'

export const register = async (router: Router) => {
	const getController: EmployeeGetController = container.resolve(
		EmployeeDependencies.GetController
	)
	const getAllController: EmployeeGetAllController = container.resolve(
		EmployeeDependencies.GetAllController
	)
	const postController: EmployeePostController = container.resolve(
		EmployeeDependencies.PostController
	)
	const patchController: EmployeePatchController = container.resolve(
		EmployeeDependencies.PatchController
	)
	const searchByCriteria: EmployeeSearchByCriteriaController =
		container.resolve(EmployeeDependencies.GetByCriteriaController)
	const deleteController: EmployeeDeleteController = container.resolve(
		EmployeeDependencies.DeleteController
	)

	// get
	router.get(
		'/employees/',
		authenticate,
		searchByCriteria.run.bind(searchByCriteria)
	)
	router.get(
		'/employees/all',
		// authenticate,
		getAllController.run.bind(getAllController)
	)

	router.get(
		'/employees/:id',
		authenticate,
		getController.run.bind(getController)
	)

	//post

	router.post(
		'/employees/',
		authenticate,
		postController.run.bind(postController)
	)

	// patch
	router.patch(
		'/employees/:id',
		authenticate,
		patchController.run.bind(patchController)
	)

	// delete
	router.delete(
		'employees/:id',
		authenticate,
		deleteController.run.bind(deleteController)
	)
}

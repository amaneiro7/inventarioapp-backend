import { type AwilixContainer, asClass } from 'awilix'
import { SequelizeEmployeeRepository } from '../../../Contexts/employee/Employee/infrastructure/sequelize/SequelizeEmployeeRepository'
import { EmployeeFinder } from '../../../Contexts/employee/Employee/application/EmployeeFInder'
import { EmployeeCreator } from '../../../Contexts/employee/Employee/application/EmployeeCreator'
import { EmployeeUpdater } from '../../../Contexts/employee/Employee/application/EmployeeUpdater'
import { EmployeeRemover } from '../../../Contexts/employee/Employee/application/EmployeeRemover'
import { EmployeeSearchByCriteria } from '../../../Contexts/employee/Employee/application/EmployeeByCriteriaSearcher'
import { EmployeeGetController } from '../../controllers/employee/employee.get.controller'
import { EmployeePostController } from '../../controllers/employee/employee.post.controller'
import { EmployeePatchController } from '../../controllers/employee/employee.patch.controller'
import { EmployeeDeleteController } from '../../controllers/employee/employee.delete.controller'
import { EmployeeSearchByCriteriaController } from '../../controllers/employee/employee.searchByCriteria.controller'
import { EmployeeFinderAll } from '../../../Contexts/employee/Employee/application/EmployeeFinderAll'
import { EmployeeGetAllController } from '../../controllers/employee/employee.get-all.controller'
import { EmployeeExcelService } from '../../../Contexts/employee/Employee/application/EmployeeExcelService'
import { EmployeeDownloadExcelServiceController } from '../../controllers/employee/employee.download-excel-service.controller'

export enum EmployeeDependencies {
	Repository = 'employeeRepository',
	Finder = 'employeeFinder',
	FinderAll = 'employeeFinderAll',
	Creator = 'employeeCreator',
	Updater = 'employeeUpdater',
	Remover = 'employeeRemover',
	ExcelService = 'employeeExcelService',
	SearchByCriteria = 'employeeSearchByCriteria',
	GetController = 'employeeGetController',
	GetAllController = 'employeeGetAllController',
	PostController = 'employeePostController',
	PatchController = 'employeePatchController',
	DeleteController = 'employeeDeleteController',
	GetByCriteriaController = 'employeeGetByCriteria',
	ExcelDownloadController = 'employeeExcelDownload'
}

export const register = (container: AwilixContainer) => {
	container.register({
		[EmployeeDependencies.Repository]: asClass(SequelizeEmployeeRepository).singleton(),
		[EmployeeDependencies.Finder]: asClass(EmployeeFinder),
		[EmployeeDependencies.FinderAll]: asClass(EmployeeFinderAll),
		[EmployeeDependencies.Creator]: asClass(EmployeeCreator),
		[EmployeeDependencies.Updater]: asClass(EmployeeUpdater),
		[EmployeeDependencies.Remover]: asClass(EmployeeRemover),
		[EmployeeDependencies.ExcelService]: asClass(EmployeeExcelService),
		[EmployeeDependencies.SearchByCriteria]: asClass(EmployeeSearchByCriteria),
		[EmployeeDependencies.GetController]: asClass(EmployeeGetController),
		[EmployeeDependencies.GetAllController]: asClass(EmployeeGetAllController),
		[EmployeeDependencies.PostController]: asClass(EmployeePostController),
		[EmployeeDependencies.PatchController]: asClass(EmployeePatchController),
		[EmployeeDependencies.DeleteController]: asClass(EmployeeDeleteController),
		[EmployeeDependencies.ExcelDownloadController]: asClass(EmployeeDownloadExcelServiceController),
		[EmployeeDependencies.GetByCriteriaController]: asClass(EmployeeSearchByCriteriaController)
	})
}

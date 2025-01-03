import { type AwilixContainer, asClass } from "awilix"
import { SequelizeEmployeeRepository } from "../../Contexts/employee/Employee/infrastructure/sequelize/SequelizeEmployeeRepository"
import { EmployeeFinder } from "../../Contexts/employee/Employee/application/EmployeeFInder"
import { EmployeeCreator } from "../../Contexts/employee/Employee/application/EmployeeCreator"
import { EmployeeUpdater } from "../../Contexts/employee/Employee/application/EmployeeUpdater"
import { EmployeeRemover } from "../../Contexts/employee/Employee/application/EmployeeRemover"
import { EmployeeSearchByCriteria } from "../../Contexts/employee/Employee/application/EmployeeByCriteriaSearcher"
import { EmployeeGetController } from "../controllers/employee/employee.get.controller"
import { EmployeePostController } from "../controllers/employee/employee.post.controller"
import { EmployeePatchController } from "../controllers/employee/employee.patch.controller"
import { EmployeeDeleteController } from "../controllers/employee/employee.delete.controller"
import { EmployeeSearchByCriteriaController } from "../controllers/employee/employee.searchByCriteria.controller"

export enum EmployeeDependencies {
    Repository = 'employeeRepository',
    Finder = 'employeeFinder',
    Creator = 'employeeCreator',
    Updater = 'employeeUpdater',
    Remover = 'employeeRemover',
    SearchByCriteria = 'employeeSearchByCriteria',
    GetController = 'employeeGetController',
    PostController = 'employeePostController',
    PatchController = 'employeePatchController',
    DeleteController = 'employeeDeleteController',
    GetByCriteriaController = 'employeeGetByCriteria',
}

export const register = (container: AwilixContainer) => {
    container.register({
        employeeRepository: asClass(SequelizeEmployeeRepository).singleton(),
        employeeFinder: asClass(EmployeeFinder),
        employeeCreator: asClass(EmployeeCreator),
        employeeUpdater: asClass(EmployeeUpdater),
        employeeRemover: asClass(EmployeeRemover),
        employeeSearchByCriteria: asClass(EmployeeSearchByCriteria),
        employeeGetController: asClass(EmployeeGetController),
        employeePostController: asClass(EmployeePostController),
        employeePatchController: asClass(EmployeePatchController),
        employeeDeleteController: asClass(EmployeeDeleteController),
        employeeGetByCriteria: asClass(EmployeeSearchByCriteriaController),
    })
}
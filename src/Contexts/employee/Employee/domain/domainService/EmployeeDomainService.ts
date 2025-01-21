import { EmployeeTypes } from '../valueObject/EmployeeType'
import { Employee, type EmployeePrimitives } from '../entity/Employee'
import {
	GenericEmployee,
	type GenericEmployeePrimitives
} from '../entity/GenericEmployee'
import {
	RegularEmployee,
	type RegularEmployeePrimitives
} from '../entity/RegularEmployee'
import {
	ServiceEmployee,
	type ServiceEmployeePrimitives
} from '../entity/ServiceEmployee'

export class EmployeeUseCase {
	execute(params: Omit<EmployeePrimitives, 'id'>) {
		let employee: Employee
		if (params.type === EmployeeTypes.GENERIC) {
			employee = GenericEmployee.create(
				params as Omit<GenericEmployeePrimitives, 'id'>
			)
		} else if (params.type === EmployeeTypes.REGULAR) {
			employee = RegularEmployee.create(
				params as Omit<RegularEmployeePrimitives, 'id'>
			)
		} else if (params.type === EmployeeTypes.SERVICE) {
			employee = ServiceEmployee.create(
				params as Omit<ServiceEmployeePrimitives, 'id'>
			)
		} else {
			employee = Employee.create(params) // default to Employee
		}
		return employee
	}
}

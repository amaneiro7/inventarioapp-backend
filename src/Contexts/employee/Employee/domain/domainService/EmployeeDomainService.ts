import { EmployeeTypes } from '../valueObject/EmployeeType'
import { Employee } from '../entity/Employee'
import { GenericEmployee } from '../entity/GenericEmployee'
import { RegularEmployee } from '../entity/RegularEmployee'
import { ServiceEmployee } from '../entity/ServiceEmployee'
import { type EmployeeParams } from '../entity/Employee.dto'
import { type GenericEmployeeParams } from '../entity/GenericEmployee.dto'
import { type RegularEmployeeParams } from '../entity/RegularEmployee.dto'
import { type ServiceEmployeeParams } from '../entity/ServiceEmployee.dto'

export class EmployeeUseCase {
	execute(params: EmployeeParams) {
		let employee: Employee
		if (params.type === EmployeeTypes.GENERIC) {
			employee = GenericEmployee.create(params as GenericEmployeeParams)
		} else if (params.type === EmployeeTypes.REGULAR) {
			employee = RegularEmployee.create(params as RegularEmployeeParams)
		} else if (params.type === EmployeeTypes.SERVICE) {
			employee = ServiceEmployee.create(params as ServiceEmployeeParams)
		} else {
			employee = Employee.create(params) // default to Employee
		}
		return employee
	}
}

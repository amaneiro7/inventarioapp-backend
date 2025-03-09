import { type EmployeeTypes } from '../valueObject/EmployeeType'
import { type Employee, type EmployeeDto, type EmployeeParams, type EmployeePrimitives } from './Employee.dto'

export type GenericEmployee = Employee & {
	type: EmployeeTypes.GENERIC
	name: null
	lastName: null
	email: null
	employeeCode: null
	nationality: null
	cedula: null
	centroTrabajoId: null
	locationId: null
	departamentoId: null
	cargoId: null
	extension: []
	phone: []
}

export type GenericEmployeePrimitives = EmployeePrimitives & {
	type: EmployeeTypes.GENERIC
	name: null
	lastName: null
	email: null
	employeeCode: null
	nationality: null
	cedula: null
	centroTrabajoId: null
	locationId: null
	departamentoId: null
	cargoId: null
	extension: []
	phone: []
}

export type GenericEmployeeParams = EmployeeParams & {
	type: EmployeeTypes.GENERIC
	name: null
	lastName: null
	email: null
	employeeCode: null
	nationality: null
	cedula: null
	centroTrabajoId: null
	locationId: null
	departamentoId: null
	cargoId: null
	extension: []
	phone: []
}

export type GenericEmployeeDto = EmployeeDto & {
	type: EmployeeTypes.GENERIC
	name: null
	lastName: null
	email: null
	employeeCode: null
	nationality: null
	cedula: null
	centroTrabajoId: null
	locationId: null
	departamentoId: null
	cargoId: null
	extension: []
	phone: []
}

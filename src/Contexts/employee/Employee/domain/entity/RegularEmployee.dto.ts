import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CentroTrabajoId } from '../../../CentroTrabajo/domain/CentroTrabajoId'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type EmployeeCode } from '../valueObject/EmployeCode'
import { type EmployeeCedula } from '../valueObject/EmployeeCedula'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'
import { type EmployeeLastName } from '../valueObject/EmployeeLastName'
import { type EmployeeLocationId } from '../valueObject/EmployeeLocation'
import { type EmployeeName } from '../valueObject/EmployeeName'
import { type EmployeeNationality } from '../valueObject/EmployeeNationality'
import { type EmployeeTypes } from '../valueObject/EmployeeType'
import {
	type Employee,
	type EmployeeDto,
	type EmployeeParams,
	type EmployeePrimitives
} from './Employee.dto'

export type RegularEmployee = Employee & {
	type: EmployeeTypes.REGULAR
	name: Primitives<EmployeeName>
	lastName: Primitives<EmployeeLastName>
	email: Primitives<EmployeeEmail>
	employeeCode: Primitives<EmployeeCode>
	nationality: Primitives<EmployeeNationality>
	cedula: Primitives<EmployeeCedula>
	centroTrabajoId: Primitives<CentroTrabajoId>
	locationId: Primitives<EmployeeLocationId>
	departamentoId: Primitives<DepartmentId>
	cargoId: Primitives<CargoId>
}

export type RegularEmployeePrimitives = EmployeePrimitives & {
	type: EmployeeTypes.REGULAR
	name: Primitives<EmployeeName>
	lastName: Primitives<EmployeeLastName>
	email: Primitives<EmployeeEmail>
	employeeCode: Primitives<EmployeeCode>
	nationality: Primitives<EmployeeNationality>
	cedula: Primitives<EmployeeCedula>
	centroTrabajoId: Primitives<CentroTrabajoId>
	locationId: Primitives<EmployeeLocationId>
	departamentoId: Primitives<DepartmentId>
	cargoId: Primitives<CargoId>
}

export type RegularEmployeeParams = EmployeeParams & {
	type: EmployeeTypes.REGULAR
	name: Primitives<EmployeeName>
	lastName: Primitives<EmployeeLastName>
	email: Primitives<EmployeeEmail>
	employeeCode: Primitives<EmployeeCode>
	nationality: Primitives<EmployeeNationality>
	cedula: Primitives<EmployeeCedula>
	centroTrabajoId: Primitives<CentroTrabajoId>
	locationId: Primitives<EmployeeLocationId>
	departamentoId: Primitives<DepartmentId>
	cargoId: Primitives<CargoId>
}

export type RegularEmployeeDto = EmployeeDto & {
	type: EmployeeTypes.REGULAR
	name: Primitives<EmployeeName>
	lastName: Primitives<EmployeeLastName>
	email: Primitives<EmployeeEmail>
	employeeCode: Primitives<EmployeeCode>
	nationality: Primitives<EmployeeNationality>
	cedula: Primitives<EmployeeCedula>
	centroTrabajoId: Primitives<CentroTrabajoId>
	locationId: Primitives<EmployeeLocationId>
	departamentoId: Primitives<DepartmentId>
	cargoId: Primitives<CargoId>
}

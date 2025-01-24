import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CentroTrabajoDto } from '../../../CentroTrabajo/domain/CentroTrabajo.dto'
import { type CentroTrabajoId } from '../../../CentroTrabajo/domain/CentroTrabajoId'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
import { type DepartmentId } from '../../../IDepartment/DepartmentId'
import { type EmployeeCode } from '../valueObject/EmployeCode'
import { type EmployeeCedula } from '../valueObject/EmployeeCedula'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { type EmployeeLastName } from '../valueObject/EmployeeLastName'
import { type EmployeeLocationId } from '../valueObject/EmployeeLocation'
import { type EmployeeName } from '../valueObject/EmployeeName'
import { type EmployeeNationality } from '../valueObject/EmployeeNationality'
import { type EmployeeType } from '../valueObject/EmployeeType'
import { type EmployeeUserName } from '../valueObject/EmployeeUsername'
import { type Extension } from '../valueObject/Extension'
import { type PhoneNumber } from '../valueObject/PhoneNumber'

export type Employee = {
	id: Primitives<EmployeeId>
	userName: Primitives<EmployeeUserName>
	type: Primitives<EmployeeType>
	name: Nullable<Primitives<EmployeeName>>
	lastName: Nullable<Primitives<EmployeeLastName>>
	email: Nullable<Primitives<EmployeeEmail>>
	isStillWorking: Primitives<EmployeeIsStillWorking>
	employeeCode: Nullable<Primitives<EmployeeCode>>
	nationality: Nullable<Primitives<EmployeeNationality>>
	cedula: Nullable<Primitives<EmployeeCedula>>
	centroTrabajoId: Nullable<Primitives<CentroTrabajoId>>
	locationId: Nullable<Primitives<EmployeeLocationId>>
	departamentoId: Nullable<Primitives<DepartmentId>>
	cargoId: Nullable<Primitives<CargoId>>
	extension: Primitives<Extension>[]
	phone: Primitives<PhoneNumber>[]
}

export type EmployeePrimitives = Employee

export type EmployeeParams = Omit<Employee, 'id'>

export type EmployeeDto = Employee & {
	centroTrabajo: CentroTrabajoDto
	location: LocationDto
	departamento: Omit<DepartamentoDto, 'cargos'>
	cargo: Omit<CargoDto, 'departamentos'>
}

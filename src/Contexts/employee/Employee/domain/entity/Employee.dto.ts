import { type LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type DepartamentoDto } from '../../../Departamento/domain/Departamento.dto'
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
import { type EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { type EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'
import { type EmployeeVicepresidencia } from '../valueObject/EmployeeVicepresidencia'
import { type EmployeeDepartamento } from '../valueObject/EmployeeDepartamento'
import { type EmployeeCargo } from '../valueObject/EmployeeCargo'

/**
 * @interface Employee
 * @description Defines the core properties of an Employee entity.
 */
export type Employee = {
	id: Primitives<EmployeeId>
	userName: Primitives<EmployeeUserName>
	type: Primitives<EmployeeType>
	name: Primitives<EmployeeName>
	lastName: Primitives<EmployeeLastName>
	email: Primitives<EmployeeEmail>
	isStillWorking: Primitives<EmployeeIsStillWorking>
	employeeCode: Primitives<EmployeeCode>
	nationality: Primitives<EmployeeNationality>
	cedula: Primitives<EmployeeCedula>
	locationId: Primitives<EmployeeLocationId>
	directivaId: Primitives<EmployeeDirectiva>
	vicepresidenciaEjecutivaId: Primitives<EmployeeVicepresidenciaEjecutiva>
	vicepresidenciaId: Primitives<EmployeeVicepresidencia>
	departamentoId: Primitives<EmployeeDepartamento>
	cargoId: Primitives<EmployeeCargo>
	extension: Primitives<Extension>[]
	phone: Primitives<PhoneNumber>[]
}

/**
 * @type EmployeePrimitives
 * @description Represents the primitive, serializable state of an Employee entity.
 */
export type EmployeePrimitives = Employee

/**
 * @type EmployeeParams
 * @description Represents the parameters required to create a new Employee.
 */
export type EmployeeParams = Omit<Employee, 'id'>

/**
 * @type EmployeeDto
 * @description Represents a Data Transfer Object (DTO) for the Employee entity,
 * including all its related department and location DTOs.
 */
export type EmployeeDto = Employee & {
	location: LocationDto
	directiva: Omit<DirectivaDto, 'cargos'>
	vicepresidenciaEjecutiva: Omit<VicepresidenciaEjecutivaDto, 'cargos'>
	vicepresidencia: Omit<VicepresidenciaDto, 'cargos'>
	departamento: Omit<DepartamentoDto, 'cargos'>
	cargo: Omit<CargoDto, 'departamentos' | 'directivas' | 'vicepresidenciasEjecutivas' | 'vicepresidencias'>
}

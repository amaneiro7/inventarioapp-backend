import { type LocationDto } from '../../../../Location/Location/domain/entity/Location.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import { type DirectivaDto } from '../../../Directiva/domain/entity/Directiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/entity/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/entity/VicepresidenciaEjecutiva.dto'
import { type DepartamentoDto } from '../../../Departamento/domain/entity/Departamento.dto'
import { type EmployeeCode } from '../valueObject/EmployeCode'
import { type EmployeeCedula } from '../valueObject/EmployeeCedula'
import { type EmployeeEmail } from '../valueObject/EmployeeEmail'
import { type EmployeeId } from '../valueObject/EmployeeId'
import { type EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { type EmployeeLastName } from '../valueObject/EmployeeLastName'

import { type EmployeeName } from '../valueObject/EmployeeName'
import { type EmployeeNationality } from '../valueObject/EmployeeNationality'
import { type EmployeeType } from '../valueObject/EmployeeType'
import { type EmployeeUserName } from '../valueObject/EmployeeUsername'
import { type Extension } from '../valueObject/Extension'
import { type PhoneNumber } from '../valueObject/PhoneNumber'
import { type DepartamentoId } from '../../../Departamento/domain/valueObject/DepartamentoId'
import { type VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { type DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { type CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { type LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'

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
	locationId: Primitives<LocationId> | null
	directivaId: Primitives<DirectivaId> | null
	vicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId> | null
	vicepresidenciaId: Primitives<VicepresidenciaId> | null
	departamentoId: Primitives<DepartamentoId> | null
	cargoId: Primitives<CargoId> | null
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

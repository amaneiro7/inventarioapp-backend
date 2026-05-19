import type { LocationDto } from '../../../../Location/Location/domain/entity/Location.dto'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { CargoDto } from '../../../Cargo/domain/entity/Cargo.dto'
import type { EmployeeCode } from '../valueObject/EmployeCode'
import type { EmployeeCedula } from '../valueObject/EmployeeCedula'
import type { EmployeeEmail } from '../valueObject/EmployeeEmail'
import type { EmployeeId } from '../valueObject/EmployeeId'
import type { EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import type { EmployeeLastName } from '../valueObject/EmployeeLastName'
import type { EmployeeName } from '../valueObject/EmployeeName'
import type { EmployeeNationality } from '../valueObject/EmployeeNationality'
import type { EmployeeType } from '../valueObject/EmployeeType'
import type { EmployeeUserName } from '../valueObject/EmployeeUsername'
import type { Extension } from '../valueObject/Extension'
import type { PhoneNumber } from '../valueObject/PhoneNumber'
import type { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import type { LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import type { HistoryDto } from '../../../../History/domain/entity/History.dto'
import type { UnidadId } from '../../../Unidad/domain/valueObject/UnidadId'
import type { UnidadDto } from '../../../Unidad/domain/entity/Unidad.dto'

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
	unidadId: Primitives<UnidadId> | null
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
export type EmployeeParams = Omit<Employee, 'id'> & {
	isAdmin?: boolean
}

/**
 * @type EmployeeDto
 * @description Represents a Data Transfer Object (DTO) for the Employee entity,
 * including all its related department and location DTOs.
 */
export type EmployeeDto = Employee & {
	location: LocationDto
	unidad: Omit<UnidadDto, 'cargos'>
	cargo: Omit<CargoDto, 'unidades'>
	history: HistoryDto[] | null
	updatedAt?: Date
	createdAt?: Date
}

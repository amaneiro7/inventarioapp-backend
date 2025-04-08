import { type LocationDto } from '../../../../Location/Location/domain/Location.dto'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoDto } from '../../../Cargo/domain/Cargo.dto'
import { type CargoId } from '../../../Cargo/domain/CargoId'
import { type CentroTrabajoDto } from '../../../CentroTrabajo/domain/CentroTrabajo.dto'
import { type DirectivaDto } from '../../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaDto } from '../../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
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
import { type EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { type EmployeCentroTrabajo } from '../valueObject/EmployeeCentroTrabajo'
import { type EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'

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
	centroTrabajoId: Primitives<EmployeCentroTrabajo>
	locationId: Primitives<EmployeeLocationId>
	directivaId: Primitives<EmployeeDirectiva>
	vicepresidenciaEjecutivaId: Primitives<EmployeeVicepresidenciaEjecutiva>
	vicepresidenciaId: Primitives<DepartmentId>
	departamentoId: Primitives<DepartmentId>
	cargoId: Primitives<CargoId>
	extension: Primitives<Extension>[]
	phone: Primitives<PhoneNumber>[]
}

export type EmployeePrimitives = Employee

export type EmployeeParams = Omit<Employee, 'id'>

export type EmployeeDto = Employee & {
	centroTrabajo: CentroTrabajoDto
	location: LocationDto
	directiva: Omit<DirectivaDto, 'cargos'>
	vicepresidenciaEjecutiva: Omit<VicepresidenciaEjecutivaDto, 'cargos'>
	vicepresidencia: Omit<VicepresidenciaDto, 'cargos'>
	departamento: Omit<DepartamentoDto, 'cargos'>
	cargo: Omit<CargoDto, 'departamentos' | 'directivas' | 'vicepresidenciasEjecutivas' | 'vicepresidencias'>
}

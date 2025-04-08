import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { CargoId } from '../../../Cargo/domain/CargoId'
import { DepartmentId } from '../../../IDepartment/DepartmentId'
import { EmployeeCedula } from '../valueObject/EmployeeCedula'
import { EmployeeEmail } from '../valueObject/EmployeeEmail'
import { EmployeeId } from '../valueObject/EmployeeId'
import { EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { EmployeeLastName } from '../valueObject/EmployeeLastName'
import { EmployeeName } from '../valueObject/EmployeeName'
import { EmployeeNationality } from '../valueObject/EmployeeNationality'
import { EmployeeType, EmployeeTypes } from '../valueObject/EmployeeType'
import { EmployeeUserName } from '../valueObject/EmployeeUsername'
import { Extension } from '../valueObject/Extension'
import { PhoneNumber } from '../valueObject/PhoneNumber'
import { EmployeeCode } from '../valueObject/EmployeCode'
import { EmployeeLocationId } from '../valueObject/EmployeeLocation'
import { type EmployeeDto, type EmployeeParams, type EmployeePrimitives } from './Employee.dto'
import { EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { EmployeCentroTrabajo } from '../valueObject/EmployeeCentroTrabajo'
import { EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'

export class Employee {
	constructor(
		private readonly id: EmployeeId,
		private userName: EmployeeUserName,
		private type: EmployeeType,
		private name: EmployeeName,
		private lastName: EmployeeLastName,
		private email: EmployeeEmail,
		private isStillWorking: EmployeeIsStillWorking,
		private readonly employeeCode: EmployeeCode,
		private readonly nationality: EmployeeNationality,
		private readonly cedula: EmployeeCedula,
		private centroTrabajoId: EmployeCentroTrabajo,
		private locationId: EmployeeLocationId,
		private directivaId: EmployeeDirectiva,
		private vicepresidenciaEjecutivaId: EmployeeVicepresidenciaEjecutiva,
		private vicepresidenciaId: DepartmentId,
		private departamentoId: EmployeeDirectiva,
		private cargoId: CargoId,
		private extension: Extension[],
		private phone: PhoneNumber[]
	) {}

	static create(params: EmployeeParams): Employee {
		const id = EmployeeId.random().value
		return new Employee(
			new EmployeeId(id),
			new EmployeeUserName(params.userName),
			new EmployeeType(params.type),
			new EmployeeName(params.name, params.type),
			new EmployeeLastName(params.lastName, params.type),
			new EmployeeEmail(params.email),
			new EmployeeIsStillWorking(params.isStillWorking),
			new EmployeeCode(params.employeeCode, params.type),
			new EmployeeNationality(params.nationality, params.type),
			new EmployeeCedula(params.cedula, params.type),
			new EmployeCentroTrabajo(params.centroTrabajoId, params.type),
			new EmployeeLocationId(params.locationId),
			new EmployeeDirectiva(params.directivaId, params.type),
			new EmployeeVicepresidenciaEjecutiva(params.vicepresidenciaEjecutivaId, params.type, params.directivaId),
			new EmployeeDirectiva(params.vicepresidenciaId),
			new EmployeeDirectiva(params.departamentoId),
			new CargoId(params.cargoId),
			params.extension?.map(ext => new Extension(ext)),
			params.phone?.map(phone => new PhoneNumber(phone))
		)
	}
	static fromPrimitives(primitives: EmployeeDto): Employee {
		const values = this.assignValues(primitives)
		return new Employee(
			new EmployeeId(primitives.id),
			values.userName,
			values.type,
			values.name,
			values.lastName,
			values.email,
			values.isStillWorking,
			values.employeeCode,
			values.nationality,
			values.cedula,
			values.CentroTrabajoId,
			values.locationId,
			values.directivaId,
			values.vicepresidenciaEjecutivaId,
			values.vicepresidenciaId,
			values.departamentoId,
			values.cargoId,
			values.extension,
			values.phone
		)
	}

	toPrimitive(): EmployeePrimitives {
		return {
			id: this.idValue,
			userName: this.userNameValue,
			type: this.typeValue,
			name: this.nameValue,
			lastName: this.lastNameValue,
			email: this.emailValue,
			isStillWorking: this.isStillWorkingValue,
			employeeCode: this.employeeCodeValue,
			nationality: this.nationalityValue,
			cedula: this.cedulaValue,
			centroTrabajoId: this.centroTrabajoValue,
			locationId: this.locationValue,
			directivaId: this.directivaValue,
			vicepresidenciaEjecutivaId: this.vicepresidenciaEjecutivaValue,
			vicepresidenciaId: this.vicepresidenciaValue,
			departamentoId: this.departamentoValue,
			cargoId: this.cargoValue,
			extension: this.extensionValue,
			phone: this.phoneValue
		}
	}

	get idValue(): Primitives<EmployeeId> {
		return this.id.value
	}

	get userNameValue(): Primitives<EmployeeUserName> {
		return this.userName.value
	}
	get typeValue(): Primitives<EmployeeType> {
		return this.type.value
	}

	get nameValue(): Primitives<EmployeeName> {
		return this.name.value
	}
	get lastNameValue(): Primitives<EmployeeLastName> {
		return this.lastName.value
	}
	get emailValue(): Primitives<EmployeeEmail> {
		return this.email.value
	}
	get isStillWorkingValue(): Primitives<EmployeeIsStillWorking> {
		return this.isStillWorking.value
	}
	get employeeCodeValue(): Primitives<EmployeeCode> {
		return this.employeeCode?.value
	}
	get nationalityValue(): Primitives<EmployeeNationality> {
		return this.nationality?.value
	}
	get cedulaValue(): Primitives<EmployeeCedula> {
		return this.cedula?.value
	}
	get centroTrabajoValue(): Primitives<EmployeCentroTrabajo> {
		return this.centroTrabajoId.value
	}
	get locationValue(): Primitives<EmployeeLocationId> {
		return this.locationId?.value
	}
	get directivaValue(): Primitives<DepartmentId> {
		return this.directivaId?.value
	}
	get vicepresidenciaEjecutivaValue(): Primitives<DepartmentId> {
		return this.vicepresidenciaEjecutivaId?.value
	}
	get vicepresidenciaValue(): Primitives<DepartmentId> {
		return this.vicepresidenciaId?.value
	}
	get departamentoValue(): Primitives<DepartmentId> {
		return this.departamentoId?.value
	}
	get cargoValue(): Primitives<CargoId> {
		return this.cargoId?.value
	}
	get extensionValue(): Primitives<Extension>[] {
		return this.extension.map(extension => extension.value)
	}
	get phoneValue(): Primitives<PhoneNumber>[] {
		return this.phone.map(phone => phone.value)
	}

	updateName(newName: Primitives<EmployeeName>): void {
		this.name = new EmployeeName(newName)
	}
	updateLastName(newLastName: Primitives<EmployeeLastName>): void {
		this.lastName = new EmployeeLastName(newLastName)
	}

	updateType(type: EmployeeTypes): void {
		const notAllowedTypes = [EmployeeTypes.GENERIC]
		if (notAllowedTypes.includes(type)) {
			throw new InvalidArgumentError(`Type ${type} is not allowed for update.`)
		}
		this.type = new EmployeeType(type)
	}
	updateEmail(newEmail: Primitives<EmployeeEmail>): void {
		this.email = new EmployeeEmail(newEmail)
	}
	updateIsStillWorking(newIsStillWorking: Primitives<EmployeeIsStillWorking>): void {
		this.isStillWorking = new EmployeeIsStillWorking(newIsStillWorking)
	}
	updateCentroTrabajo(newCentroTrabajoId: Primitives<EmployeCentroTrabajo>): void {
		this.centroTrabajoId = new EmployeCentroTrabajo(newCentroTrabajoId)
	}
	updateLocation(newLocationId: Primitives<EmployeeLocationId>): void {
		this.locationId = new EmployeeLocationId(newLocationId)
	}
	updateDirectiva(newDirectivaId: Primitives<EmployeeDirectiva>): void {
		this.directivaId = new EmployeeDirectiva(newDirectivaId)
	}
	updateVicepresidenciaEjecutiva(newVicepresidenciaEjecutivaId: Primitives<EmployeeVicepresidenciaEjecutiva>): void {
		this.vicepresidenciaEjecutivaId = new EmployeeVicepresidenciaEjecutiva(newVicepresidenciaEjecutivaId)
	}
	updateVicepresidencia(newVicepresidenciaId: Primitives<DepartmentId>): void {
		this.vicepresidenciaId = new DepartmentId(newVicepresidenciaId)
	}
	updateDepartamento(newDepartamentoId: Primitives<DepartmentId>): void {
		this.departamentoId = new DepartmentId(newDepartamentoId)
	}
	updateCargo(newCargoId: Primitives<CargoId>): void {
		this.cargoId = new CargoId(newCargoId)
	}
	updateExtension(extensionIds: Primitives<Extension>[]): void {
		this.extension = extensionIds.map(extension => new Extension(extension))
	}
	updatePhone(phoneIds: Primitives<PhoneNumber>[]): void {
		this.phone = phoneIds.map(phone => new PhoneNumber(phone))
	}
	updateUserName(newUserName: Primitives<EmployeeUserName>): void {
		this.userName = new EmployeeUserName(newUserName)
	}
}

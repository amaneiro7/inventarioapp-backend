import { EmployeeId } from '../valueObject/EmployeeId'
import { EmployeeUserName } from '../valueObject/EmployeeUsername'
import { EmployeeType, EmployeeTypes } from '../valueObject/EmployeeType'
import { EmployeeName } from '../valueObject/EmployeeName'
import { EmployeeLastName } from '../valueObject/EmployeeLastName'
import { EmployeeEmail } from '../valueObject/EmployeeEmail'
import { EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { EmployeeCode } from '../valueObject/EmployeCode'
import { EmployeeNationality } from '../valueObject/EmployeeNationality'
import { EmployeeCedula } from '../valueObject/EmployeeCedula'
import { EmployeCentroTrabajo } from '../valueObject/EmployeeCentroTrabajo'
import { EmployeeLocationId } from '../valueObject/EmployeeLocation'
import { EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'
import { EmployeeVicepresidencia } from '../valueObject/EmployeeVicepresidencia'
import { EmployeeDepartamento } from '../valueObject/EmployeeDepartamento'
import { CargoId } from '../../../Cargo/domain/CargoId'
import { PhoneNumber } from '../valueObject/PhoneNumber'
import { Extension } from '../valueObject/Extension'
import { InvalidArgumentError } from '../../../../Shared/domain/value-object/InvalidArgumentError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto, type EmployeeParams, type EmployeePrimitives } from './Employee.dto'

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
		private vicepresidenciaId: EmployeeVicepresidencia,
		private departamentoId: EmployeeDepartamento,
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
			new EmployeeVicepresidenciaEjecutiva(params.vicepresidenciaEjecutivaId, params.directivaId),
			new EmployeeVicepresidencia(params.vicepresidenciaId, params.vicepresidenciaEjecutivaId),
			new EmployeeDepartamento(params.departamentoId, params.vicepresidenciaId),
			new CargoId(params.cargoId),
			params.extension?.map(ext => new Extension(ext)),
			params.phone?.map(phone => new PhoneNumber(phone))
		)
	}
	static fromPrimitives(primitives: EmployeeDto): Employee {
		return new Employee(
			new EmployeeId(primitives.id),
			new EmployeeUserName(primitives.userName),
			new EmployeeType(primitives.type),
			new EmployeeName(primitives.name, primitives.type),
			new EmployeeLastName(primitives.lastName, primitives.type),
			new EmployeeEmail(primitives.email),
			new EmployeeIsStillWorking(primitives.isStillWorking),
			new EmployeeCode(primitives.employeeCode, primitives.type),
			new EmployeeNationality(primitives.nationality, primitives.type),
			new EmployeeCedula(primitives.cedula, primitives.type),
			new EmployeCentroTrabajo(primitives.centroTrabajoId, primitives.type),
			new EmployeeLocationId(primitives.locationId),
			new EmployeeDirectiva(primitives.directivaId, primitives.type),
			new EmployeeVicepresidenciaEjecutiva(primitives.vicepresidenciaEjecutivaId, primitives.directivaId),
			new EmployeeVicepresidencia(primitives.vicepresidenciaId, primitives.vicepresidenciaEjecutivaId),
			new EmployeeDepartamento(primitives.departamentoId, primitives.vicepresidenciaId),
			new CargoId(primitives.cargoId),
			primitives.extension?.map(ext => new Extension(ext)),
			primitives.phone?.map(phone => new PhoneNumber(phone))
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
	get directivaValue(): Primitives<EmployeeDirectiva> {
		return this.directivaId?.value
	}
	get vicepresidenciaEjecutivaValue(): Primitives<EmployeeVicepresidenciaEjecutiva> {
		return this.vicepresidenciaEjecutivaId?.value
	}
	get vicepresidenciaValue(): Primitives<EmployeeVicepresidencia> {
		return this.vicepresidenciaId?.value
	}
	get departamentoValue(): Primitives<EmployeeDepartamento> {
		return this.departamentoId.value
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
	updateVicepresidencia(newVicepresidenciaId: Primitives<EmployeeVicepresidencia>): void {
		this.vicepresidenciaId = new EmployeeVicepresidencia(newVicepresidenciaId)
	}
	updateDepartamento(newDepartamentoId: Primitives<EmployeeDepartamento>): void {
		this.departamentoId = new EmployeeDepartamento(newDepartamentoId)
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

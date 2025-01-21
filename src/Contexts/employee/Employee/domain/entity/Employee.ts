import { type Nullable } from '../../../../Shared/domain/Nullable'
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
import { CentroTrabajoId } from '../../../CentroTrabajo/domain/CentroTrabajoId'

export type EmployeePrimitives = {
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
export class Employee {
	constructor(
		private readonly id: EmployeeId,
		private userName: EmployeeUserName,
		private type: EmployeeType,
		private name: Nullable<EmployeeName>,
		private lastName: Nullable<EmployeeLastName>,
		private email: Nullable<EmployeeEmail>,
		private isStillWorking: EmployeeIsStillWorking,
		private readonly employeeCode: Nullable<EmployeeCode>,
		private readonly nationality: Nullable<EmployeeNationality>,
		private readonly cedula: Nullable<EmployeeCedula>,
		private centroTrabajoId: Nullable<CentroTrabajoId>,
		private locationId: Nullable<EmployeeLocationId>,
		private departamentoId: Nullable<DepartmentId>,
		private cargoId: Nullable<CargoId>,
		private extension: Extension[],
		private phone: PhoneNumber[]
	) {}

	private static assignValues(params: Omit<EmployeePrimitives, 'id'>) {
		return {
			userName: new EmployeeUserName(params.userName),
			type: new EmployeeType(params.type),
			name: params?.name ? new EmployeeName(params.name) : null,
			lastName: params?.lastName
				? new EmployeeLastName(params.lastName)
				: null,
			email: params?.email ? new EmployeeEmail(params.email) : null,
			isStillWorking: new EmployeeIsStillWorking(params.isStillWorking),
			employeeCode: params?.employeeCode
				? new EmployeeCode(params.employeeCode)
				: null,
			nationality: params?.nationality
				? new EmployeeNationality(params.nationality)
				: null,
			cedula: params?.cedula ? new EmployeeCedula(params.cedula) : null,
			CentroTrabajoId: params?.centroTrabajoId
				? new CentroTrabajoId(params.centroTrabajoId)
				: null,
			locationId: params?.locationId
				? new EmployeeLocationId(params.locationId)
				: null,
			departamentoId: params?.departamentoId
				? new DepartmentId(params.departamentoId)
				: null,
			cargoId: params?.cargoId ? new CargoId(params.cargoId) : null,
			extension: params?.extension
				? params.extension.map(ext => new Extension(ext))
				: [],
			phone: params?.phone
				? params.phone.map(phone => new PhoneNumber(phone))
				: []
		}
	}

	static create(params: Omit<EmployeePrimitives, 'id'>): Employee {
		const values = this.assignValues(params)
		const id = EmployeeId.random().value
		return new Employee(
			new EmployeeId(id),
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
			values.departamentoId,
			values.cargoId,
			values.extension,
			values.phone
		)
	}
	static fromPrimitives(primitives: EmployeePrimitives): Employee {
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

	get nameValue(): Nullable<Primitives<EmployeeName>> {
		return this.name?.value ?? null
	}
	get lastNameValue(): Nullable<Primitives<EmployeeLastName>> {
		return this.lastName?.value ?? null
	}
	get emailValue(): Nullable<Primitives<EmployeeEmail>> {
		return this.email?.value ?? null
	}
	get isStillWorkingValue(): Primitives<EmployeeIsStillWorking> {
		return this.isStillWorking.value
	}
	get employeeCodeValue(): Nullable<Primitives<EmployeeCode>> {
		return this.employeeCode?.value ?? null
	}
	get nationalityValue(): Nullable<Primitives<EmployeeNationality>> {
		return this.nationality?.value ?? null
	}
	get cedulaValue(): Nullable<Primitives<EmployeeCedula>> {
		return this.cedula?.value ?? null
	}
	get centroTrabajoValue(): Nullable<Primitives<CentroTrabajoId>> {
		return this.centroTrabajoId?.value ?? null
	}
	get locationValue(): Nullable<Primitives<EmployeeLocationId>> {
		return this.locationId?.value ?? null
	}
	get departamentoValue(): Nullable<Primitives<DepartmentId>> {
		return this.departamentoId?.value ?? null
	}
	get cargoValue(): Nullable<Primitives<CargoId>> {
		return this.cargoId?.value ?? null
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
			throw new InvalidArgumentError(
				`Type ${type} is not allowed for update.`
			)
		}
		this.type = new EmployeeType(type)
	}
	updateEmail(newEmail: Primitives<EmployeeEmail>): void {
		this.email = new EmployeeEmail(newEmail)
	}
	updateIsStillWorking(
		newIsStillWorking: Primitives<EmployeeIsStillWorking>
	): void {
		this.isStillWorking = new EmployeeIsStillWorking(newIsStillWorking)
	}
	updateCentroTrabajo(newCentroTrabajoId: Primitives<CentroTrabajoId>): void {
		this.centroTrabajoId = new CentroTrabajoId(newCentroTrabajoId)
	}
	updateLocation(newLocationId: Primitives<EmployeeLocationId>): void {
		this.locationId = new EmployeeLocationId(newLocationId)
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

import { EmployeeId } from '../valueObject/EmployeeId'
import { EmployeeUserName } from '../valueObject/EmployeeUsername'
import { EmployeeType, EmployeeTypesEnum } from '../valueObject/EmployeeType'
import { EmployeeName } from '../valueObject/EmployeeName'
import { EmployeeLastName } from '../valueObject/EmployeeLastName'
import { EmployeeEmail } from '../valueObject/EmployeeEmail'
import { EmployeeIsStillWorking } from '../valueObject/EmployeeIsStillWorking'
import { EmployeeCode } from '../valueObject/EmployeCode'
import { EmployeeNationality } from '../valueObject/EmployeeNationality'
import { EmployeeCedula } from '../valueObject/EmployeeCedula'
import { EmployeeLocationId } from '../valueObject/EmployeeLocation'
import { EmployeeDirectiva } from '../valueObject/EmployeeDirectiva'
import { EmployeeVicepresidenciaEjecutiva } from '../valueObject/EmployeeVicepresidenciaEjecutiva'
import { EmployeeVicepresidencia } from '../valueObject/EmployeeVicepresidencia'
import { EmployeeDepartamento } from '../valueObject/EmployeeDepartamento'
import { EmployeeCargo } from '../valueObject/EmployeeCargo'
import { PhoneNumber } from '../valueObject/PhoneNumber'
import { Extension } from '../valueObject/Extension'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto, type EmployeeParams, type EmployeePrimitives } from './Employee.dto'

/**
 * @description Represents the Employee domain entity.
 */
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
		private locationId: EmployeeLocationId,
		private directivaId: EmployeeDirectiva,
		private vicepresidenciaEjecutivaId: EmployeeVicepresidenciaEjecutiva,
		private vicepresidenciaId: EmployeeVicepresidencia,
		private departamentoId: EmployeeDepartamento,
		private cargoId: EmployeeCargo,
		private extension: Extension[],
		private phone: PhoneNumber[]
	) {}

	static create(params: EmployeeParams): Employee {
		if (params.type === EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				'Un empleado de tipo "servicio" no se puede crear directamente. Primero debe crearse como tipo "regular" y luego marcarse como servicio.'
			)
		}

		if (params.isStillWorking === false) {
			throw new InvalidArgumentError(
				'La creación de un empleado requiere que el estado laboral inicial sea "Activo". No se puede crear un empleado desvinculado.'
			)
		}
		const id = EmployeeId.random()
		return new Employee(
			id,
			new EmployeeUserName(params.userName),
			new EmployeeType(params.type),
			new EmployeeName(params.name, params.type),
			new EmployeeLastName(params.lastName, params.type),
			new EmployeeEmail(params.email),
			new EmployeeIsStillWorking(params.isStillWorking),
			new EmployeeCode(params.employeeCode, params.type),
			new EmployeeNationality(params.nationality, params.type),
			new EmployeeCedula(params.cedula, params.type),
			new EmployeeLocationId(params.locationId),
			new EmployeeDirectiva(params.directivaId, params.type),
			new EmployeeVicepresidenciaEjecutiva(params.vicepresidenciaEjecutivaId, params.directivaId),
			new EmployeeVicepresidencia(params.vicepresidenciaId, params.vicepresidenciaEjecutivaId),
			new EmployeeDepartamento(params.departamentoId, params.vicepresidenciaId),
			new EmployeeCargo(params.cargoId, params.type),
			Extension.fromValues(params.extension),
			PhoneNumber.fromValues(params.phone)
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
			new EmployeeLocationId(primitives.locationId),
			new EmployeeDirectiva(primitives.directivaId, primitives.type),
			new EmployeeVicepresidenciaEjecutiva(primitives.vicepresidenciaEjecutivaId, primitives.directivaId),
			new EmployeeVicepresidencia(primitives.vicepresidenciaId, primitives.vicepresidenciaEjecutivaId),
			new EmployeeDepartamento(primitives.departamentoId, primitives.vicepresidenciaId),
			new EmployeeCargo(primitives.cargoId, primitives.type),
			Extension.fromValues(primitives.extension),
			PhoneNumber.fromValues(primitives.phone)
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

	get cargoValue(): Primitives<EmployeeCargo> {
		return this.cargoId.value
	}

	get extensionValue(): Primitives<Extension>[] {
		return this.extension.map(extension => extension.value)
	}

	get phoneValue(): Primitives<PhoneNumber>[] {
		return this.phone.map(phone => phone.value)
	}

	updateName(newName: Primitives<EmployeeName>, type: Primitives<EmployeeType>): void {
		this.name = new EmployeeName(newName, type)
	}

	updateLastName(newLastName: Primitives<EmployeeLastName>, type: Primitives<EmployeeType>): void {
		this.lastName = new EmployeeLastName(newLastName, type)
	}

	updateType(newType: EmployeeTypesEnum): void {
		if (this.typeValue === EmployeeTypesEnum.GENERIC && newType !== EmployeeTypesEnum.GENERIC) {
			throw new InvalidArgumentError(
				`No se permite cambiar el tipo de empleado 'GENERIC' a '${newType}'. La modificación del tipo GENERIC está restringida.`
			)
		}
		if (this.typeValue !== EmployeeTypesEnum.GENERIC && newType === EmployeeTypesEnum.GENERIC) {
			throw new InvalidArgumentError(
				`No se permite cambiar el tipo de empleado no GENERIC a 'GENERIC'. El cambio a GENERIC está restringido.`
			)
		}
		this.type = new EmployeeType(newType)
	}

	// Nuevo método para vincular a un usuario de servicio existente
	markAsServiceUser(): void {
		// Regla de Negocio 1: El empleado ya debe ser un usuario regular o genérico
		if (this.typeValue === EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				`El empleado con ID ${this.idValue} ya está marcado como usuario de servicio.`
			)
		}

		// Regla de Negocio 2: Solo se puede marcar si está activamente trabajando (isStillWorking=true)
		if (this.isStillWorkingValue === false) {
			throw new InvalidArgumentError(
				`No se puede marcar como usuario de servicio a un empleado desvinculado (ID: ${this.idValue}). Debe estar activo.`
			)
		}

		// Cambio de estado de la entidad
		this.type = new EmployeeType(EmployeeTypesEnum.SERVICE)
	}

	unmarkAsServiceUser(): void {
		// Regla de Negocio 1: Solo puedes revertir el tipo si actualmente es SERVICE.
		if (this.typeValue !== EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				`El empleado con ID ${this.idValue} no es un usuario de servicio, es de tipo '${this.typeValue}'. Solo se puede revertir el estatus SERVICE.`
			)
		}

		// Regla de Negocio 2: Determinar el tipo a revertir.
		// Asumimos que si no es SERVICE, el tipo se revierte a 'REGULAR' por defecto,
		// a menos que alguna regla de RRHH lo dicte (p.ej., basado en cargo/código).
		// Si el tipo anterior se almacenó, lo usarías. Aquí usamos 'REGULAR' como default.
		const defaultType = EmployeeTypesEnum.REGULAR

		this.type = new EmployeeType(defaultType)

		// NOTA DDD: Aquí se dispararía un Evento de Dominio:
		// this.record(new EmployeeTypeChangedDomainEvent(this.idValue, defaultType));
	}

	// El método más importante: expresa la intención de cambio de estado
	markAsTerminated(): void {
		// Regla: No puedes terminar a alguien que ya fue terminado.
		if (this.isStillWorkingValue === false) {
			throw new InvalidArgumentError('El empleado ya se encuentra en estado "Desvinculado".')
		}
		this.isStillWorking = new EmployeeIsStillWorking(false)

		// NOTA DDD: Aquí se dispararía un Evento de Dominio:
		// this.record(new EmployeeStatusChangedDomainEvent(this.idValue, 'inactive'));
		// El caso de uso UserDeactivator escucharía este evento.
	}

	// Nuevo método para manejar la re-contratación o activación
	markAsActive(): void {
		// Regla: No puedes activar a alguien que ya está activo.
		if (this.isStillWorkingValue === true) {
			throw new InvalidArgumentError('El empleado ya se encuentra en estado "Activo".')
		}
		this.isStillWorking = new EmployeeIsStillWorking(true)
	}

	updateEmail(newEmail: Primitives<EmployeeEmail>): void {
		this.email = new EmployeeEmail(newEmail)
	}

	updateIsStillWorking(newIsStillWorking: Primitives<EmployeeIsStillWorking>): void {
		this.isStillWorking = new EmployeeIsStillWorking(newIsStillWorking)
	}

	updateLocation(newLocationId: Primitives<EmployeeLocationId>): void {
		this.locationId = new EmployeeLocationId(newLocationId)
	}

	updateDirectiva(newDirectivaId: Primitives<EmployeeDirectiva>, type: Primitives<EmployeeType>): void {
		this.directivaId = new EmployeeDirectiva(newDirectivaId, type)
	}

	updateVicepresidenciaEjecutiva(
		newVicepresidenciaEjecutivaId: Primitives<EmployeeVicepresidenciaEjecutiva>,
		directivaId: Primitives<EmployeeDirectiva>
	): void {
		this.vicepresidenciaEjecutivaId = new EmployeeVicepresidenciaEjecutiva(
			newVicepresidenciaEjecutivaId,
			directivaId
		)
	}

	updateVicepresidencia(
		newVicepresidenciaId: Primitives<EmployeeVicepresidencia>,
		vicepresidenciaEjecutivaId: Primitives<EmployeeVicepresidenciaEjecutiva>
	): void {
		this.vicepresidenciaId = new EmployeeVicepresidencia(newVicepresidenciaId, vicepresidenciaEjecutivaId)
	}

	updateDepartamento(
		newDepartamentoId: Primitives<EmployeeDepartamento>,
		vicepresidenciaId: Primitives<EmployeeVicepresidencia>
	): void {
		this.departamentoId = new EmployeeDepartamento(newDepartamentoId, vicepresidenciaId)
	}

	updateCargo(newCargoId: Primitives<EmployeeCargo>, type: Primitives<EmployeeType>): void {
		this.cargoId = new EmployeeCargo(newCargoId, type)
	}

	updateExtension(extensionIds: Primitives<Extension>[]): void {
		this.extension = Extension.fromValues(extensionIds)
	}

	updatePhone(phoneIds: Primitives<PhoneNumber>[]): void {
		this.phone = PhoneNumber.fromValues(phoneIds)
	}

	updateUserName(newUserName: Primitives<EmployeeUserName>): void {
		this.userName = new EmployeeUserName(newUserName)
	}
}

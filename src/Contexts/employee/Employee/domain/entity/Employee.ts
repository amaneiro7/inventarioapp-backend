import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
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
import { LocationId } from '../../../../Location/Location/domain/valueObject/LocationId'
import { PhoneNumber } from '../valueObject/PhoneNumber'
import { Extension } from '../valueObject/Extension'
import { DirectivaId } from '../../../Directiva/domain/valueObject/DirectivaId'
import { VicepresidenciaEjecutivaId } from '../../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { VicepresidenciaId } from '../../../Vicepresidencia/domain/valueObject/VicepresidenciaId'
import { DepartamentoId } from '../../../Departamento/domain/valueObject/DepartamentoId'
import { CargoId } from '../../../Cargo/domain/valueObject/CargoId'
import { EmployeeCreatedDomainEvent } from '../event/EmployeeCreatedDomainEvent'
import { EmployeeTerminatedDomainEvent } from '../event/EmployeeTerminatedDomainEvent'
import { EmployeeReactivatedDomainEvent } from '../event/EmployeeReactivatedDomainEvent'
import { EmployeeTypeChangedDomainEvent } from '../event/EmployeeTypeChangedDomainEvent'
import { EmployeeUpdatedDomainEvent } from '../event/EmployeeUpdatedDomainEvent'
import { EmployeeRemovedDomainEvent } from '../event/EmployeeRemovedDomainEvent'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeDto, type EmployeeParams, type EmployeePrimitives } from './Employee.dto'

/**
 * @description Represents the Employee domain entity.
 */
export class Employee extends AggregateRoot {
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
		private locationId: LocationId | null,
		private directivaId: DirectivaId | null,
		private vicepresidenciaEjecutivaId: VicepresidenciaEjecutivaId | null,
		private vicepresidenciaId: VicepresidenciaId | null,
		private departamentoId: DepartamentoId | null,
		private cargoId: CargoId | null,
		private extension: Extension[],
		private phone: PhoneNumber[]
	) {
		super()
	}

	/**
	 * @description Factory method to create a new Employee entity.
	 * Enforces domain business rules for employee creation.
	 *
	 * **Business Rules:**
	 * 1. **Service Employees**: Cannot be created directly. Must be created as 'REGULAR' first.
	 * 2. **Initial Status**: Must be 'Active' (isStillWorking = true).
	 * 3. **Required Fields by Type**:
	 *    - `GENERIC`: Must NOT have `cedula`. Can omit personal details (name, lastName, nationality).
	 *    - `REGULAR`, `CONTRACTOR`, `APPRENTICE`: Require name, lastName, nationality, and cedula.
	 *    - `REGULAR`: Specifically requires `employeeCode`.
	 * 4. **Hierarchy Validation**:
	 *    - `REGULAR`, `CONTRACTOR`, `APPRENTICE` must have at least a `Directiva`.
	 *    - Hierarchy consistency is enforced (e.g., cannot have Department without Vicepresidencia).
	 * 5. **Cargo Validation**:
	 *    - `REGULAR`, `CONTRACTOR`, `APPRENTICE` must have a `Cargo`.
	 *
	 * @param {EmployeeParams} params - The parameters to create the employee.
	 * @param {string[]} [allowedDomains] - Optional list of allowed email domains for validation.
	 * @returns {Employee} A new instance of the Employee aggregate.
	 * @throws {InvalidArgumentError} If any business rule is violated.
	 */
	static create(params: EmployeeParams, allowedDomains?: string[]): Employee {
		this.ensureCreationRules(params)

		this.ensureForbiddenHierarchyByType(params.type, {
			directivaId: params.directivaId,
			vicepresidenciaEjecutivaId: params.vicepresidenciaEjecutivaId,
			vicepresidenciaId: params.vicepresidenciaId,
			departamentoId: params.departamentoId
		})
		this.ensureForbiddenCargoByType(params.type, params.cargoId)

		this.ensureMandatoryHierarchyByType(params.type, params?.directivaId)
		this.ensureMandatoryCargoByType(params.type, params?.cargoId)
		this.ensureHierarchyConsistency({
			departamentoId: params.departamentoId,
			vicepresidenciaId: params.vicepresidenciaId,
			vicepresidenciaEjecutivaId: params.vicepresidenciaEjecutivaId,
			directivaId: params.directivaId
		})

		const employee = new Employee(
			EmployeeId.random(),
			new EmployeeUserName(params.userName),
			new EmployeeType(params.type),
			new EmployeeName(params.name),
			new EmployeeLastName(params.lastName),
			new EmployeeEmail(params.email, allowedDomains),
			new EmployeeIsStillWorking(params.isStillWorking),
			new EmployeeCode(params.employeeCode),
			new EmployeeNationality(params.nationality),
			new EmployeeCedula(params.cedula),
			params.locationId ? new LocationId(params.locationId) : null,
			params.directivaId ? new DirectivaId(params.directivaId) : null,
			params.vicepresidenciaEjecutivaId
				? new VicepresidenciaEjecutivaId(params.vicepresidenciaEjecutivaId)
				: null,
			params.vicepresidenciaId ? new VicepresidenciaId(params.vicepresidenciaId) : null,
			params.departamentoId ? new DepartamentoId(params.departamentoId) : null,
			params.cargoId ? new CargoId(params.cargoId) : null,
			Extension.fromValues(params.extension),
			PhoneNumber.fromValues(params.phone)
		)

		employee.record(
			new EmployeeCreatedDomainEvent({
				aggregateId: employee.idValue,
				name: employee.nameValue,
				lastName: employee.lastNameValue,
				userName: employee.userNameValue,
				email: employee.emailValue,
				type: employee.typeValue,
				cedula: employee.cedulaValue,
				employeeCode: employee.employeeCodeValue
			})
		)

		return employee
	}

	static fromPrimitives(primitives: EmployeeDto): Employee {
		return new Employee(
			new EmployeeId(primitives.id),
			new EmployeeUserName(primitives.userName),
			new EmployeeType(primitives.type),
			new EmployeeName(primitives.name),
			new EmployeeLastName(primitives.lastName),
			new EmployeeEmail(primitives.email),
			new EmployeeIsStillWorking(primitives.isStillWorking),
			new EmployeeCode(primitives.employeeCode),
			new EmployeeNationality(primitives.nationality),
			new EmployeeCedula(primitives.cedula),
			primitives.locationId ? new LocationId(primitives.locationId) : null,
			primitives.directivaId ? new DirectivaId(primitives.directivaId) : null,
			primitives.vicepresidenciaEjecutivaId
				? new VicepresidenciaEjecutivaId(primitives.vicepresidenciaEjecutivaId)
				: null,
			primitives.vicepresidenciaId ? new VicepresidenciaId(primitives.vicepresidenciaId) : null,
			primitives.departamentoId ? new DepartamentoId(primitives.departamentoId) : null,
			primitives.cargoId ? new CargoId(primitives.cargoId) : null,
			Extension.fromValues(primitives.extension),
			PhoneNumber.fromValues(primitives.phone)
		)
	}

	toPrimitives(): EmployeePrimitives {
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

	get locationValue(): Primitives<LocationId> | null {
		return this.locationId?.value ?? null
	}

	get directivaValue(): Primitives<DirectivaId> | null {
		return this.directivaId?.value ?? null
	}

	get vicepresidenciaEjecutivaValue(): Primitives<VicepresidenciaEjecutivaId> | null {
		return this.vicepresidenciaEjecutivaId?.value ?? null
	}

	get vicepresidenciaValue(): Primitives<VicepresidenciaId> | null {
		return this.vicepresidenciaId?.value ?? null
	}

	get departamentoValue(): Primitives<DepartamentoId> | null {
		return this.departamentoId?.value ?? null
	}

	get cargoValue(): Primitives<CargoId> | null {
		return this.cargoId?.value ?? null
	}

	get extensionValue(): Primitives<Extension>[] {
		return this.extension.map(extension => extension.value)
	}

	get phoneValue(): Primitives<PhoneNumber>[] {
		return this.phone.map(phone => phone.value)
	}

	private static ensureCreationRules(params: EmployeeParams): void {
		const isGeneric = params.type === EmployeeTypesEnum.GENERIC
		const isRegular = params.type === EmployeeTypesEnum.REGULAR
		const isService = params.type === EmployeeTypesEnum.SERVICE

		if (isService) {
			throw new InvalidArgumentError(
				'Un empleado de tipo "servicio" no se puede crear directamente. Primero debe crearse como tipo "regular" y luego marcarse como servicio.'
			)
		}

		if (params.isStillWorking === false) {
			throw new InvalidArgumentError(
				'La creación de un empleado requiere que el estado laboral inicial sea "Activo". No se puede crear un empleado desvinculado.'
			)
		}
		// Regla de negocio para Nombre y Apellido
		if (!isGeneric && !params.name) {
			throw new InvalidArgumentError('El nombre es requerido para este tipo de empleado.')
		}
		if (!isGeneric && !params.lastName) {
			throw new InvalidArgumentError('El apellido es requerido para este tipo de empleado.')
		}
		// El codigo de empleado es requerido solo para los empleados con contrato fijo
		if (isRegular && !params.employeeCode) {
			throw new InvalidArgumentError('El código de empleado es requerido para este tipo de empleado.')
		}

		if (!isRegular && params.employeeCode) {
			throw new InvalidArgumentError('El código de empleado no es requerido para este tipo de empleado.')
		}
		if (!isGeneric && !params.nationality) {
			throw new InvalidArgumentError('La nacionalidad es requerida para este tipo de empleado.')
		}
		if (isGeneric && params.nationality) {
			throw new InvalidArgumentError('La nacionalidad no es requerida para este tipo de empleado.')
		}

		if (isGeneric && params.cedula) {
			throw new InvalidArgumentError('La cédula del empleado no es requerida para este tipo de empleado.')
		}
		if (!isGeneric && !params.cedula) {
			throw new InvalidArgumentError('La cédula del empleado es requerida para este tipo de empleado.')
		}
	}

	private static ensureMandatoryHierarchyByType(
		type: EmployeeTypesEnum,
		directivaId: Primitives<DirectivaId> | null
	): void {
		const typesRequiringHierarchy = [
			EmployeeTypesEnum.REGULAR,
			EmployeeTypesEnum.CONTRACTOR,
			EmployeeTypesEnum.APPRENTICE
		]

		if (typesRequiringHierarchy.includes(type) && !directivaId) {
			throw new InvalidArgumentError(`El campo Directiva es obligatorio para empleados de tipo ${type}.`)
		}
	}

	private static ensureMandatoryCargoByType(type: EmployeeTypesEnum, cargoId: Primitives<CargoId> | null): void {
		const typesRequiringCargo = [
			EmployeeTypesEnum.REGULAR,
			EmployeeTypesEnum.CONTRACTOR,
			EmployeeTypesEnum.APPRENTICE
		]

		if (typesRequiringCargo.includes(type) && !cargoId) {
			throw new InvalidArgumentError(`El cargo es obligatorio para empleados de tipo ${type}.`)
		}
	}

	private static ensureForbiddenHierarchyByType(
		type: EmployeeTypesEnum,
		params: {
			directivaId: Primitives<DirectivaId> | null
			vicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId> | null
			vicepresidenciaId: Primitives<VicepresidenciaId> | null
			departamentoId: Primitives<DepartamentoId> | null
		}
	): void {
		const typesForbiddenHierarchy = [EmployeeTypesEnum.GENERIC]

		if (typesForbiddenHierarchy.includes(type)) {
			if (
				params.directivaId ||
				params.vicepresidenciaEjecutivaId ||
				params.vicepresidenciaId ||
				params.departamentoId
			) {
				throw new InvalidArgumentError(
					`Los empleados de tipo ${type} no pueden tener asignada una jerarquía (Directiva, Vicepresidencia, etc.).`
				)
			}
		}
	}

	private static ensureForbiddenCargoByType(type: EmployeeTypesEnum, cargoId: Primitives<CargoId> | null): void {
		const typesForbiddenCargo = [EmployeeTypesEnum.GENERIC]

		if (typesForbiddenCargo.includes(type) && cargoId) {
			throw new InvalidArgumentError(`Los empleados de tipo ${type} no pueden tener un cargo asignado.`)
		}
	}

	private static ensureHierarchyConsistency(params: {
		directivaId: Primitives<DirectivaId> | null
		vicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId> | null
		vicepresidenciaId: Primitives<VicepresidenciaId> | null
		departamentoId: Primitives<DepartamentoId> | null
	}): void {
		// Validar de abajo hacia arriba es más fácil

		// 1. Si hay Departamento, debe haber Vicepresidencia
		if (params.departamentoId && !params.vicepresidenciaId) {
			throw new InvalidArgumentError('No se puede asignar un Departamento sin una Vicepresidencia asociada.')
		}

		// 2. Si hay Vicepresidencia, debe haber Vicepresidencia Ejecutiva
		if (params.vicepresidenciaId && !params.vicepresidenciaEjecutivaId) {
			throw new InvalidArgumentError(
				'No se puede asignar una Vicepresidencia sin una Vicepresidencia Ejecutiva asociada.'
			)
		}

		// 3. Si hay Vicepresidencia Ejecutiva, debe haber Directiva
		if (params.vicepresidenciaEjecutivaId && !params.directivaId) {
			throw new InvalidArgumentError(
				'No se puede asignar una Vicepresidencia Ejecutiva sin una Directiva asociada.'
			)
		}
	}

	ensureEmployeeCanBeUpdated(): void {
		if (this.typeValue === EmployeeTypesEnum.GENERIC) {
			throw new Error('Los usuarios genéricos no pueden ser actualizados.')
		}
		if (this.isStillWorkingValue === false) {
			throw new Error('Los usuarios desvinculados no pueden ser actualizados.')
		}
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new EmployeeUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	updateUserName(newUserName: Primitives<EmployeeUserName>): void {
		this.userName = new EmployeeUserName(newUserName)
	}

	updateName(newName: Primitives<EmployeeName>): void {
		if (this.typeValue !== EmployeeTypesEnum.GENERIC && !newName) {
			throw new InvalidArgumentError('El nombre es requerido para este tipo de empleado.')
		}
		this.name = new EmployeeName(newName)
	}

	updateLastName(newLastName: Primitives<EmployeeLastName>): void {
		if (this.typeValue !== EmployeeTypesEnum.GENERIC && !newLastName) {
			throw new InvalidArgumentError('El apellido es requerido para este tipo de empleado.')
		}
		this.lastName = new EmployeeLastName(newLastName)
	}

	updateType(newType: EmployeeTypesEnum): void {
		if (this.typeValue === newType) {
			return
		}

		if (this.typeValue === EmployeeTypesEnum.GENERIC || newType === EmployeeTypesEnum.GENERIC) {
			throw new InvalidArgumentError(
				'No se permite modificar el tipo de un empleado GENERIC ni convertir un empleado a GENERIC.'
			)
		}
		if (this.typeValue === EmployeeTypesEnum.SERVICE || newType === EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				'Para cambiar el tipo a/de SERVICE, utilice los métodos específicos markAsServiceUser() o unmarkAsServiceUser().'
			)
		}

		const oldType = this.typeValue
		this.type = new EmployeeType(newType)
		this.record(
			new EmployeeTypeChangedDomainEvent({
				aggregateId: this.idValue,
				oldType,
				newType
			})
		)
	}

	// Nuevo método para vincular a un usuario de servicio existente
	markAsServiceUser(): void {
		// Regla de Negocio 1: El empleado ya debe ser un usuario regular o genérico
		if (this.typeValue === EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				`El empleado con userName ${this.userNameValue} ya está marcado como usuario de servicio.`
			)
		}

		// Regla de Negocio 2: Solo se puede marcar si está activamente trabajando (isStillWorking=true)
		if (this.isStillWorkingValue === false) {
			throw new InvalidArgumentError(
				`No se puede marcar como usuario de servicio a un empleado desvinculado (userName: ${this.userNameValue}). Debe estar activo.`
			)
		}

		// Cambio de estado de la entidad
		const oldType = this.typeValue
		this.type = new EmployeeType(EmployeeTypesEnum.SERVICE)
		this.record(
			new EmployeeTypeChangedDomainEvent({
				aggregateId: this.idValue,
				oldType,
				newType: EmployeeTypesEnum.SERVICE
			})
		)
	}

	unmarkAsServiceUser(): void {
		// Regla de Negocio 1: Solo puedes revertir el tipo si actualmente es SERVICE.
		if (this.typeValue !== EmployeeTypesEnum.SERVICE) {
			throw new InvalidArgumentError(
				`El empleado con ID ${this.idValue} no es un usuario de servicio, es de tipo '${this.typeValue}'. Solo se puede revertir el estatus SERVICE.`
			)
		}
		const oldType = this.typeValue
		// Regla de Negocio 2: Determinar el tipo a revertir.
		// Asumimos que si no es SERVICE, el tipo se revierte a 'REGULAR' por defecto,
		// a menos que alguna regla de RRHH lo dicte (p.ej., basado en cargo/código).
		// Si el tipo anterior se almacenó, lo usarías. Aquí usamos 'REGULAR' como default.
		const defaultType = EmployeeTypesEnum.REGULAR

		this.type = new EmployeeType(defaultType)
		this.record(
			new EmployeeTypeChangedDomainEvent({
				aggregateId: this.idValue,
				oldType,
				newType: defaultType
			})
		)
	}

	// El método más importante: expresa la intención de cambio de estado
	markAsTerminated(): void {
		// Regla: No puedes terminar a alguien que ya fue terminado.
		if (this.isStillWorkingValue === false) {
			throw new InvalidArgumentError('El empleado ya se encuentra en estado "Desvinculado".')
		}
		this.isStillWorking = new EmployeeIsStillWorking(false)

		this.record(
			new EmployeeTerminatedDomainEvent({
				aggregateId: this.idValue,
				isStillWorking: false,
				type: this.typeValue
			})
		)
	}

	// Nuevo método para manejar la re-contratación o activación
	markAsActive(): void {
		// Regla: No puedes activar a alguien que ya está activo.
		if (this.isStillWorkingValue === true) {
			throw new InvalidArgumentError('El empleado ya se encuentra en estado "Activo".')
		}
		this.isStillWorking = new EmployeeIsStillWorking(true)
		this.record(
			new EmployeeReactivatedDomainEvent({
				aggregateId: this.idValue,
				isStillWorking: true
			})
		)
	}

	updateEmail(newEmail: Primitives<EmployeeEmail>, allowedDomains?: string[]): void {
		this.email = new EmployeeEmail(newEmail, allowedDomains)
	}

	updateLocation(newLocationId: Primitives<LocationId> | null): void {
		this.locationId = newLocationId ? new LocationId(newLocationId) : null
	}

	// En Employee.ts
	updateHierarchy(
		directivaId: Primitives<DirectivaId> | null,
		vicepresidenciaEjecutivaId: Primitives<VicepresidenciaEjecutivaId> | null,
		vicepresidenciaId: Primitives<VicepresidenciaId> | null,
		departamentoId: Primitives<DepartamentoId> | null
	): void {
		// 1. Validar que la nueva combinación sea consistente jerárquicamente
		Employee.ensureHierarchyConsistency({
			directivaId,
			vicepresidenciaEjecutivaId,
			vicepresidenciaId,
			departamentoId
		})

		// 2. Validar que cumpla con el tipo de empleado actual
		Employee.ensureMandatoryHierarchyByType(this.type.value, directivaId)

		// 3. Aplicar cambios
		this.directivaId = directivaId ? new DirectivaId(directivaId) : null
		this.vicepresidenciaEjecutivaId = vicepresidenciaEjecutivaId
			? new VicepresidenciaEjecutivaId(vicepresidenciaEjecutivaId)
			: null
		this.vicepresidenciaId = vicepresidenciaId ? new VicepresidenciaId(vicepresidenciaId) : null
		this.departamentoId = departamentoId ? new DepartamentoId(departamentoId) : null
	}

	updateCargo(newCargoId: Primitives<CargoId> | null): void {
		Employee.ensureMandatoryCargoByType(this.typeValue, newCargoId)
		this.cargoId = newCargoId ? new CargoId(newCargoId) : null
	}

	updateExtension(extensionIds: Primitives<Extension>[]): void {
		this.extension = Extension.fromValues(extensionIds)
	}

	updatePhone(phoneIds: Primitives<PhoneNumber>[]): void {
		this.phone = PhoneNumber.fromValues(phoneIds)
	}

	/**
	 * @description Marks the Directiva as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new EmployeeRemovedDomainEvent({
				aggregateId: this.idValue,
				userName: this.userNameValue
			})
		)
	}
}

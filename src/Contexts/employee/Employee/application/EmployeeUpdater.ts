import { Employee } from '../domain/entity/Employee'
import { SettingsFinder } from '../../../AppSettings/application/SettingsFinder'
import { AppSettingKeys } from '../../../AppSettings/domain/entity/SettingsKeys'
import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { EmployeeUserNameUniquenessChecker } from '../domain/service/EmployeeUserNameUniquenessChecker'
import { EmployeeEmailUniquenessChecker } from '../domain/service/EmployeeEmailUniquenessChecker'
import { VicepresidenciaExistenceChecker } from '../../Vicepresidencia/domain/service/VicepresidenciaExistanceChecker'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { VicepresidenciaEjecutivaExistenceChecker } from '../../VicepresidenciaEjecutiva/domain/service/VicepresidenciaEjecutivaExistanceChecker'
import { DepartamentoExistenceChecker } from '../../Departamento/domain/service/DepartamentoExistanceChecker'
import { DirectivaExistenceChecker } from '../../Directiva/domain/service/DirectivaExistanceChecker'
import { LocationExistenceChecker } from '../../../Location/Location/domain/service/LocationExistanceChecker'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type DirectivaRepository } from '../../Directiva/domain/repository/DirectivaRepository'
import { type VicepresidenciaEjecutivaRepository } from '../../VicepresidenciaEjecutiva/domain/repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaRepository } from '../../Vicepresidencia/domain/repository/VicepresidenciaRepository'
import { type DepartamentoRepository } from '../../Departamento/domain/repository/DepartamentoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for updating an existing Employee entity.
 */
export class EmployeeUpdater {
	private readonly employeeRepository: EmployeeRepository
	private readonly employeeUserNameUniquenessChecker: EmployeeUserNameUniquenessChecker
	private readonly employeeEmailUniquenessChecker: EmployeeEmailUniquenessChecker
	private readonly locationExistenceChecker: LocationExistenceChecker
	private readonly directivaExistenceChecker: DirectivaExistenceChecker
	private readonly vicepresidenciaEjecutivaExistenceChecker: VicepresidenciaEjecutivaExistenceChecker
	private readonly vicepresidenciaExistenceChecker: VicepresidenciaExistenceChecker
	private readonly departamentoExistenceChecker: DepartamentoExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly settingsFinder: SettingsFinder
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		departamentoRepository,
		directivaRepository,
		employeeRepository,
		locationRepository,
		settingsFinder,
		vicepresidenciaEjecutivaRepository,
		vicepresidenciaRepository,
		eventBus
	}: {
		employeeRepository: EmployeeRepository
		locationRepository: LocationRepository
		directivaRepository: DirectivaRepository
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
		vicepresidenciaRepository: VicepresidenciaRepository
		departamentoRepository: DepartamentoRepository
		cargoRepository: CargoRepository
		settingsFinder: SettingsFinder
		eventBus: EventBus
	}) {
		this.employeeRepository = employeeRepository
		this.employeeUserNameUniquenessChecker = new EmployeeUserNameUniquenessChecker(employeeRepository)
		this.employeeEmailUniquenessChecker = new EmployeeEmailUniquenessChecker(employeeRepository)
		this.locationExistenceChecker = new LocationExistenceChecker(locationRepository)
		this.directivaExistenceChecker = new DirectivaExistenceChecker(directivaRepository)
		this.vicepresidenciaEjecutivaExistenceChecker = new VicepresidenciaEjecutivaExistenceChecker(
			vicepresidenciaEjecutivaRepository
		)
		this.vicepresidenciaExistenceChecker = new VicepresidenciaExistenceChecker(vicepresidenciaRepository)
		this.departamentoExistenceChecker = new DepartamentoExistenceChecker(departamentoRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.settingsFinder = settingsFinder
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the employee update process.
	 * @param {{ id: Primitives<EmployeeId>; params: Partial<EmployeeParams> }} data The parameters for updating the employee.
	 * @returns {Promise<void>} A promise that resolves when the employee is successfully updated.
	 * @throws {EmployeeDoesNotExistError} If the employee with the provided ID does not exist.
	 */
	async run({ id, params }: { id: Primitives<EmployeeId>; params: Partial<EmployeeParams> }): Promise<void> {
		const employeeId = new EmployeeId(id).value
		// Guardamos el estado previo para la lógica de negocio posterior
		// const wasStillWorking = (await this.employeeRepository.findById(employeeId))?.isStillWorking ?? true
		const employee = await this.employeeRepository.findById(employeeId)

		if (!employee) {
			throw new EmployeeDoesNotExistError(id)
		}

		const employeeEntity = Employee.fromPrimitives(employee)
		employeeEntity.ensureEmployeeCanBeUpdated()
		const changes: Array<{ field: keyof Omit<EmployeeParams, 'id'>; oldValue: unknown; newValue: unknown }> = []

		await this.updateWorkStatus(employeeEntity, params.isStillWorking, changes)

		if (params.userName && employeeEntity.userNameValue !== params.userName.trim()) {
			await this.employeeUserNameUniquenessChecker.ensureUnique(params.userName)
			changes.push({
				field: 'userName',
				oldValue: employeeEntity.userNameValue,
				newValue: params.userName
			})
			employeeEntity.updateUserName(params.userName)
		}

		if (params.type && employeeEntity.typeValue !== params.type) {
			changes.push({
				field: 'type',
				oldValue: employeeEntity.typeValue,
				newValue: params.type
			})
			employeeEntity.updateType(params.type)
		}

		if (params.name && employeeEntity.nameValue !== params.name.trim()) {
			changes.push({
				field: 'name',
				oldValue: employeeEntity.nameValue,
				newValue: params.name
			})
			employeeEntity.updateName(params.name)
		}

		if (params.lastName && employeeEntity.lastNameValue !== params.lastName.trim()) {
			changes.push({
				field: 'lastName',
				oldValue: employeeEntity.lastNameValue,
				newValue: params.lastName
			})
			employeeEntity.updateLastName(params.lastName)
		}
		if (params.email && employeeEntity.emailValue !== params.email.trim()) {
			await this.employeeEmailUniquenessChecker.ensureUnique(params.email)
			const allowedDomains = await this.settingsFinder.findAsJson<string[]>({
				key: AppSettingKeys.SECURITY.ALLOWED_EMAIL_DOMAINS,
				fallback: []
			})
			changes.push({
				field: 'email',
				oldValue: employeeEntity.emailValue,
				newValue: params.email
			})
			employeeEntity.updateEmail(params.email, allowedDomains)
		}

		if (params.locationId !== undefined && employeeEntity.locationValue !== params.locationId) {
			await this.locationExistenceChecker.ensureExist(params.locationId)
			changes.push({
				field: 'locationId',
				oldValue: employeeEntity.locationValue,
				newValue: params.locationId
			})
			employeeEntity.updateLocation(params.locationId)
		}

		if (params.cargoId !== undefined && employeeEntity.cargoValue !== params.cargoId) {
			await this.cargoExistenceChecker.ensureExist(params.cargoId)
			changes.push({
				field: 'cargoId',
				oldValue: employeeEntity.cargoValue,
				newValue: params.cargoId
			})
			employeeEntity.updateCargo(params.cargoId)
		}

		if (params.extension !== undefined && employeeEntity.extensionValue !== params.extension) {
			changes.push({
				field: 'extension',
				oldValue: employeeEntity.extensionValue,
				newValue: params.extension
			})
			employeeEntity.updateExtension(params.extension)
		}
		if (params.phone !== undefined && employeeEntity.phoneValue !== params.phone) {
			changes.push({
				field: 'phone',
				oldValue: employeeEntity.phoneValue,
				newValue: params.phone
			})
			employeeEntity.updatePhone(params.phone)
		}

		await this.updateHierarchy(employeeEntity, params, changes)

		if (changes.length > 0) {
			employeeEntity.registerUpdateEvent(changes)
			await this.employeeRepository.save(employeeEntity.toPrimitives())
			await this.eventBus.publish(employeeEntity.pullDomainEvents())
		}

		// Si el empleado era de tipo 'service' y acaba de ser marcado como que ya no trabaja,
		// ejecutamos el caso de uso para desactivar su cuenta de usuario.
		// if (
		// 	wasStillWorking &&
		// 	!employeeEntity.isStillWorkingValue &&
		// 	employeeEntity.typeValue === EmployeeTypesEnum.SERVICE
		// ) {
		// 	await this.userDesactivateAccount.run({ employeeId })
		// }
	}

	private async updateWorkStatus(
		entity: Employee,
		isStillWorking: boolean | undefined,
		changes: Array<{ field: keyof Omit<EmployeeParams, 'id'>; oldValue: unknown; newValue: unknown }>
	): Promise<void> {
		if (isStillWorking === undefined || isStillWorking === entity.isStillWorkingValue) {
			return
		}
		changes.push({
			field: 'isStillWorking',
			oldValue: entity.isStillWorkingValue,
			newValue: isStillWorking
		})
		if (isStillWorking) {
			entity.markAsActive()
		} else {
			entity.markAsTerminated()
		}
	}

	private async updateHierarchy(
		entity: Employee,
		params: Partial<Omit<EmployeeParams, 'employeeCode' | 'cedula' | 'nationality'>>,
		changes: Array<{ field: keyof Omit<EmployeeParams, 'id'>; oldValue: unknown; newValue: unknown }>
	): Promise<void> {
		// Si no se envía ningún parámetro de jerarquía, no hacemos nada
		if (
			params.directivaId === undefined &&
			params.vicepresidenciaEjecutivaId === undefined &&
			params.vicepresidenciaId === undefined &&
			params.departamentoId === undefined
		) {
			return
		}

		await Promise.all([
			this.directivaExistenceChecker.ensureExist(params.directivaId),
			this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(params.vicepresidenciaEjecutivaId),
			this.vicepresidenciaExistenceChecker.ensureExist(params.vicepresidenciaId),
			this.departamentoExistenceChecker.ensureExist(params.departamentoId)
		])

		// Usamos los valores nuevos si existen, o mantenemos los actuales de la entidad (fallback)
		// Nota: Si el frontend envía 'null', se toma como null. Si es undefined, se toma el actual.
		const newDirectivaId = params.directivaId !== undefined ? params.directivaId : entity.directivaValue
		const newVicepresidenciaEjecutivaId =
			params.vicepresidenciaEjecutivaId !== undefined
				? params.vicepresidenciaEjecutivaId
				: entity.vicepresidenciaEjecutivaValue
		const newVicepresidenciaId =
			params.vicepresidenciaId !== undefined ? params.vicepresidenciaId : entity.vicepresidenciaValue
		const newDepartamentoId = params.departamentoId !== undefined ? params.departamentoId : entity.departamentoValue

		// Registramos los cambios si los valores nuevos difieren de los actuales
		if (newDirectivaId !== entity.directivaValue) {
			changes.push({
				field: 'directivaId',
				oldValue: entity.directivaValue,
				newValue: newDirectivaId
			})
		}
		if (newVicepresidenciaEjecutivaId !== entity.vicepresidenciaEjecutivaValue) {
			changes.push({
				field: 'vicepresidenciaEjecutivaId',
				oldValue: entity.vicepresidenciaEjecutivaValue,
				newValue: newVicepresidenciaEjecutivaId
			})
		}
		if (newVicepresidenciaId !== entity.vicepresidenciaValue) {
			changes.push({
				field: 'vicepresidenciaId',
				oldValue: entity.vicepresidenciaValue,
				newValue: newVicepresidenciaId
			})
		}
		if (newDepartamentoId !== entity.departamentoValue) {
			changes.push({
				field: 'departamentoId',
				oldValue: entity.departamentoValue,
				newValue: newDepartamentoId
			})
		}

		entity.updateHierarchy(newDirectivaId, newVicepresidenciaEjecutivaId, newVicepresidenciaId, newDepartamentoId)
	}
}

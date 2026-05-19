import { Employee } from '../domain/entity/Employee'
import { SettingsFinder } from '../../../AppSettings/application/SettingsFinder'
import { AppSettingKeys } from '../../../AppSettings/domain/entity/SettingsKeys'
import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { EmployeeUserNameUniquenessChecker } from '../domain/service/EmployeeUserNameUniquenessChecker'
import { EmployeeEmailUniquenessChecker } from '../domain/service/EmployeeEmailUniquenessChecker'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { LocationExistenceChecker } from '../../../Location/Location/domain/service/LocationExistanceChecker'
import { EmployeeCodeUniquenessChecker } from '../domain/service/EmployeeCodeUniquenessChecker'
import { EmployeeCedulaUniquenessChecker } from '../domain/service/EmployeeCedulaUniquenessChecker'
import { UnidadRepository } from '../../Unidad/domain/repository/UnidadRepository'
import { UnidadExistenceChecker } from '../../Unidad/domain/service/UnidadExistanceChecker'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Use case for updating an existing Employee entity.
 */
export class EmployeeUpdater {
	private readonly employeeRepository: EmployeeRepository
	private readonly employeeUserNameUniquenessChecker: EmployeeUserNameUniquenessChecker
	private readonly employeeCodeUniquenessChecker: EmployeeCodeUniquenessChecker
	private readonly employeeCedulaUniquenessChecker: EmployeeCedulaUniquenessChecker
	private readonly employeeEmailUniquenessChecker: EmployeeEmailUniquenessChecker
	private readonly locationExistenceChecker: LocationExistenceChecker
	private readonly unidadExistenceChecker: UnidadExistenceChecker
	private readonly cargoExistenceChecker: CargoExistenceChecker
	private readonly settingsFinder: SettingsFinder
	private readonly eventBus: EventBus

	constructor({
		cargoRepository,
		unidadRepository,
		employeeRepository,
		locationRepository,
		settingsFinder,
		eventBus
	}: {
		employeeRepository: EmployeeRepository
		locationRepository: LocationRepository
		unidadRepository: UnidadRepository
		cargoRepository: CargoRepository
		settingsFinder: SettingsFinder
		eventBus: EventBus
	}) {
		this.employeeRepository = employeeRepository
		this.employeeUserNameUniquenessChecker = new EmployeeUserNameUniquenessChecker(employeeRepository)
		this.employeeEmailUniquenessChecker = new EmployeeEmailUniquenessChecker(employeeRepository)
		this.employeeCodeUniquenessChecker = new EmployeeCodeUniquenessChecker(employeeRepository)
		this.employeeCedulaUniquenessChecker = new EmployeeCedulaUniquenessChecker(employeeRepository)
		this.locationExistenceChecker = new LocationExistenceChecker(locationRepository)
		this.unidadExistenceChecker = new UnidadExistenceChecker(unidadRepository)
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
		const isAdmin = params?.isAdmin ?? false // Este flag debería venir del controlador basado en el rol del usuario

		employeeEntity.ensureEmployeeCanBeUpdated()
		const changes: Array<{ field: keyof Omit<EmployeeParams, 'id'>; oldValue: unknown; newValue: unknown }> = []
		const validations: Promise<unknown>[] = []
		await this.updateWorkStatus(employeeEntity, params.isStillWorking, changes)

		if (params.userName && employeeEntity.userNameValue !== params.userName.trim()) {
			validations.push(this.employeeUserNameUniquenessChecker.ensureUnique(params.userName))
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

		if (params.employeeCode && employeeEntity.employeeCodeValue !== params.employeeCode) {
			validations.push(this.employeeCodeUniquenessChecker.ensureUnique(params.employeeCode))
			changes.push({
				field: 'employeeCode',
				oldValue: employeeEntity.employeeCodeValue,
				newValue: params.employeeCode
			})
			employeeEntity.updateEmployeeCode(params.employeeCode, isAdmin)
		}

		if (params.cedula && employeeEntity.cedulaValue !== params.cedula) {
			validations.push(this.employeeCedulaUniquenessChecker.ensureUnique(params.cedula))
			changes.push({
				field: 'cedula',
				oldValue: employeeEntity.cedulaValue,
				newValue: params.cedula
			})
			employeeEntity.updateCedula(params.cedula, isAdmin)
		}

		if (params.nationality && employeeEntity.nationalityValue !== params.nationality) {
			changes.push({
				field: 'nationality',
				oldValue: employeeEntity.nationalityValue,
				newValue: params.nationality
			})
			employeeEntity.updateNationality(params.nationality, isAdmin)
		}

		if (params.email && employeeEntity.emailValue !== params.email.trim()) {
			validations.push(this.employeeEmailUniquenessChecker.ensureUnique(params.email))
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
			validations.push(this.locationExistenceChecker.ensureExist(params?.locationId))
			changes.push({
				field: 'locationId',
				oldValue: employeeEntity.locationValue,
				newValue: params.locationId
			})
			employeeEntity.updateLocation(params.locationId)
		}

		if (params.unidadId !== undefined && employeeEntity.unidadValue !== params.unidadId) {
			validations.push(this.unidadExistenceChecker.ensureExist(params.unidadId))
			changes.push({
				field: 'unidadId',
				oldValue: employeeEntity.unidadValue,
				newValue: params.unidadId
			})
			employeeEntity.updateUnidad(params.unidadId)
		}
		if (params.cargoId !== undefined && employeeEntity.cargoValue !== params.cargoId) {
			validations.push(this.cargoExistenceChecker.ensureExist(params.cargoId))
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

		await Promise.all(validations)
		if (changes.length > 0) {
			employeeEntity.registerUpdateEvent(changes)
			await this.employeeRepository.save(employeeEntity.toPrimitives())
			await this.eventBus.publish(employeeEntity.pullDomainEvents())
		}
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
}

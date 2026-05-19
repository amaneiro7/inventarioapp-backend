import { Employee } from '../domain/entity/Employee'
import { SettingsFinder } from '../../../AppSettings/application/SettingsFinder'
import { AppSettingKeys } from '../../../AppSettings/domain/entity/SettingsKeys'
import { EmployeeUserNameUniquenessChecker } from '../domain/service/EmployeeUserNameUniquenessChecker'
import { EmployeeEmailUniquenessChecker } from '../domain/service/EmployeeEmailUniquenessChecker'
import { EmployeeCodeUniquenessChecker } from '../domain/service/EmployeeCodeUniquenessChecker'
import { EmployeeCedulaUniquenessChecker } from '../domain/service/EmployeeCedulaUniquenessChecker'
import { CargoExistenceChecker } from '../../Cargo/domain/service/CargoExistanceChecker'
import { UnidadExistenceChecker } from '../../Unidad/domain/service/UnidadExistanceChecker'
import { LocationExistenceChecker } from '../../../Location/Location/domain/service/LocationExistanceChecker'
import type { EmployeeParams } from '../domain/entity/Employee.dto'
import type { EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import type { LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import type { CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import type { UnidadRepository } from '../../Unidad/domain/repository/UnidadRepository'
import type { EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * @description Use case for creating a new Employee entity.
 */
export class EmployeeCreator {
	private readonly employeeRepository: EmployeeRepository
	private readonly employeeUserNameUniquenessChecker: EmployeeUserNameUniquenessChecker
	private readonly employeeCodeUniquenessChecker: EmployeeCodeUniquenessChecker
	private readonly employeeEmailUniquenessChecker: EmployeeEmailUniquenessChecker
	private readonly employeeCedulaUniquenessChecker: EmployeeCedulaUniquenessChecker
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
		this.employeeCodeUniquenessChecker = new EmployeeCodeUniquenessChecker(employeeRepository)
		this.employeeEmailUniquenessChecker = new EmployeeEmailUniquenessChecker(employeeRepository)
		this.employeeCedulaUniquenessChecker = new EmployeeCedulaUniquenessChecker(employeeRepository)
		this.locationExistenceChecker = new LocationExistenceChecker(locationRepository)
		this.unidadExistenceChecker = new UnidadExistenceChecker(unidadRepository)
		this.cargoExistenceChecker = new CargoExistenceChecker(cargoRepository)
		this.settingsFinder = settingsFinder
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the employee creation process.
	 * @param {{ params: EmployeeParams }} data The parameters for creating the employee.
	 * @returns {Promise<void>} A promise that resolves when the employee is successfully created.
	 */
	async run({ params }: { params: EmployeeParams }): Promise<void> {
		const allowedDomains = await this.settingsFinder.findAsJson<string[]>({
			key: AppSettingKeys.SECURITY.ALLOWED_EMAIL_DOMAINS,
			fallback: []
		})

		await Promise.all([
			this.employeeUserNameUniquenessChecker.ensureUnique(params.userName),
			this.employeeCodeUniquenessChecker.ensureUnique(params.employeeCode),
			this.employeeEmailUniquenessChecker.ensureUnique(params.email),
			this.employeeCedulaUniquenessChecker.ensureUnique(params.cedula),
			this.locationExistenceChecker.ensureExist(params?.locationId),
			this.unidadExistenceChecker.ensureExist(params?.unidadId),
			this.cargoExistenceChecker.ensureExist(params?.cargoId)
		])

		const employee = Employee.create(params, allowedDomains)

		await this.employeeRepository.save(employee.toPrimitives())
		await this.eventBus.publish(employee.pullDomainEvents())
	}
}

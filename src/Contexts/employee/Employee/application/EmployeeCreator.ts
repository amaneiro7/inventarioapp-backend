import { Employee } from '../domain/entity/Employee'
import { SettingsFinder } from '../../../AppSettings/application/SettingsFinder'
import { AppSettingKeys } from '../../../AppSettings/domain/entity/SettingsKeys'
import { EmployeeUserNameUniquenessChecker } from '../domain/service/EmployeeUserNameUniquenessChecker'
import { EmployeeEmailUniquenessChecker } from '../domain/service/EmployeeEmailUniquenessChecker'
import { EmployeeCodeUniquenessChecker } from '../domain/service/EmployeeCodeUniquenessChecker'
import { EmployeeCedulaUniquenessChecker } from '../domain/service/EmployeeCedulaUniquenessChecker'
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
		this.employeeCodeUniquenessChecker = new EmployeeCodeUniquenessChecker(employeeRepository)
		this.employeeEmailUniquenessChecker = new EmployeeEmailUniquenessChecker(employeeRepository)
		this.employeeCedulaUniquenessChecker = new EmployeeCedulaUniquenessChecker(employeeRepository)
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
			this.directivaExistenceChecker.ensureExist(params?.directivaId),
			this.vicepresidenciaEjecutivaExistenceChecker.ensureExist(params?.vicepresidenciaEjecutivaId),
			this.vicepresidenciaExistenceChecker.ensureExist(params?.vicepresidenciaId),
			this.departamentoExistenceChecker.ensureExist(params?.departamentoId),
			this.cargoExistenceChecker.ensureExist(params?.cargoId)
		])

		const employee = Employee.create(params, allowedDomains)

		await this.employeeRepository.save(employee.toPrimitives())
		await this.eventBus.publish(employee.pullDomainEvents())
	}
}

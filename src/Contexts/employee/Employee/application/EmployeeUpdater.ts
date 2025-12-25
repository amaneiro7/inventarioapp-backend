import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { EnsureEmployeeCanBeUpdated } from '../domain/domainService/EnsureEmployeeCanBeUpdated'
import { Employee } from '../domain/entity/Employee'
import { EmployeeTypesEnum } from '../domain/valueObject/EmployeeType'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/repository/LocationRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { type UserDesactivateAccount } from '../../../User/user/application/UserDesactivateAccount'
import { SettingsFinder } from '../../../AppSettings/application/SettingsFinder'

/**
 * @description Use case for updating an existing Employee entity.
 */
export class EmployeeUpdater {
	private readonly ensureEmployeeCanBeUpdated: EnsureEmployeeCanBeUpdated
	private readonly employeeRepository: EmployeeRepository
	private readonly locationRepository: LocationRepository
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	private readonly cargoRepository: CargoRepository
	private readonly userDesactivateAccount: UserDesactivateAccount
	private readonly settingsFinder: SettingsFinder

	constructor(dependencies: {
		employeeRepository: EmployeeRepository
		locationRepository: LocationRepository
		directivaRepository: DepartmentRepository<DirectivaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
		departamentoRepository: DepartmentRepository<DepartamentoDto>
		cargoRepository: CargoRepository
		userDesactivateAccount: UserDesactivateAccount
		settingsFinder: SettingsFinder
	}) {
		this.employeeRepository = dependencies.employeeRepository
		this.locationRepository = dependencies.locationRepository
		this.directivaRepository = dependencies.directivaRepository
		this.vicepresidenciaEjecutivaRepository = dependencies.vicepresidenciaEjecutivaRepository
		this.vicepresidenciaRepository = dependencies.vicepresidenciaRepository
		this.departamentoRepository = dependencies.departamentoRepository
		this.cargoRepository = dependencies.cargoRepository
		this.userDesactivateAccount = dependencies.userDesactivateAccount
		this.settingsFinder = dependencies.settingsFinder

		this.ensureEmployeeCanBeUpdated = new EnsureEmployeeCanBeUpdated({
			employeeRepository: this.employeeRepository,
			locationRepository: this.locationRepository,
			directivaRepository: this.directivaRepository,
			vicepresidenciaEjecutivaRepository: this.vicepresidenciaEjecutivaRepository,
			vicepresidenciaRepository: this.vicepresidenciaRepository,
			cargoRepository: this.cargoRepository,
			departamentoRepository: this.departamentoRepository,
			settingsFinder: this.settingsFinder
		})
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
		const wasStillWorking = (await this.employeeRepository.findById(employeeId))?.isStillWorking ?? true

		const employee = await this.employeeRepository.findById(employeeId)

		if (!employee) {
			throw new EmployeeDoesNotExistError(id)
		}

		const employeeEntity = Employee.fromPrimitives(employee)

		await this.ensureEmployeeCanBeUpdated.execute({
			entity: employeeEntity,
			params
		})

		await this.employeeRepository.save(employeeEntity.toPrimitive())

		// Si el empleado era de tipo 'service' y acaba de ser marcado como que ya no trabaja,
		// ejecutamos el caso de uso para desactivar su cuenta de usuario.
		if (
			wasStillWorking &&
			!employeeEntity.isStillWorkingValue &&
			employeeEntity.typeValue === EmployeeTypesEnum.SERVICE
		) {
			await this.userDesactivateAccount.run({ employeeId })
		}
	}
}

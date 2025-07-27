import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { UpdateEmployeeUseCase } from '../domain/domainService/UpdateEmployeeUseCase'
import { Employee } from '../domain/entity/Employee'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

/**
 * @description Use case for updating an existing Employee entity.
 */
export class EmployeeUpdater {
	private readonly updateEmployeeUseCase: UpdateEmployeeUseCase
	private readonly employeeRepository: EmployeeRepository
	private readonly locationRepository: LocationRepository
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>
	private readonly cargoRepository: CargoRepository

	constructor(dependencies: {
		employeeRepository: EmployeeRepository
		locationRepository: LocationRepository
		directivaRepository: DepartmentRepository<DirectivaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
		departamentoRepository: DepartmentRepository<DepartamentoDto>
		cargoRepository: CargoRepository
	}) {
		this.employeeRepository = dependencies.employeeRepository
		this.locationRepository = dependencies.locationRepository
		this.directivaRepository = dependencies.directivaRepository
		this.vicepresidenciaEjecutivaRepository = dependencies.vicepresidenciaEjecutivaRepository
		this.vicepresidenciaRepository = dependencies.vicepresidenciaRepository
		this.departamentoRepository = dependencies.departamentoRepository
		this.cargoRepository = dependencies.cargoRepository

		this.updateEmployeeUseCase = new UpdateEmployeeUseCase({
			employeeRepository: this.employeeRepository,
			locationRepository: this.locationRepository,
			directivaRepository: this.directivaRepository,
			vicepresidenciaEjecutivaRepository: this.vicepresidenciaEjecutivaRepository,
			vicepresidenciaRepository: this.vicepresidenciaRepository,
			cargoRepository: this.cargoRepository,
			departamentoRepository: this.departamentoRepository
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
		const employee = await this.employeeRepository.searchById(employeeId)

		if (!employee) {
			throw new EmployeeDoesNotExistError(id)
		}

		const employeeEntity = Employee.fromPrimitives(employee)

		await this.updateEmployeeUseCase.execute({
			entity: employeeEntity,
			params
		})

		await this.employeeRepository.save(employeeEntity.toPrimitive())
	}
}

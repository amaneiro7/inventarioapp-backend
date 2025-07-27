import { CreateEmployeeUseCase } from '../domain/domainService/createEmployeeUseCase'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'
import { Employee } from '../domain/entity/Employee'

/**
 * @description Use case for creating a new Employee entity.
 */
export class EmployeeCreator {
	private readonly createEmployeeUseCase: CreateEmployeeUseCase
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

		this.createEmployeeUseCase = new CreateEmployeeUseCase({
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
	 * @description Executes the employee creation process.
	 * @param {{ params: EmployeeParams }} data The parameters for creating the employee.
	 * @returns {Promise<void>} A promise that resolves when the employee is successfully created.
	 */
	async run({ params }: { params: EmployeeParams }): Promise<void> {
		await this.createEmployeeUseCase.execute(params)

		const employee = Employee.create(params)

		await this.employeeRepository.save(employee.toPrimitive())
	}
}

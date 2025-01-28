import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { UpdateEmployeeUseCase } from '../domain/domainService/UpdateEmployeeUseCase'
import { Employee } from '../domain/entity/Employee'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type CentroTrabajoRepository } from '../../CentroTrabajo/domain/CentroTrabajoRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'

export class EmployeeUpdater {
	private readonly updateEmployeeUseCase: UpdateEmployeeUseCase
	constructor(
		private readonly employeeRepository: EmployeeRepository,
		private readonly centroTrabajoRepository: CentroTrabajoRepository,
		private readonly locationRepository: LocationRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.updateEmployeeUseCase = new UpdateEmployeeUseCase(
			this.employeeRepository,
			this.centroTrabajoRepository,
			this.locationRepository,
			this.departamentoRepository,
			this.cargoRepository
		)
	}

	async run({
		id,
		params
	}: {
		id: Primitives<EmployeeId>
		params: Partial<EmployeeParams>
	}): Promise<void> {
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

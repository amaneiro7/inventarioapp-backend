import { EmployeeDoesNotExistError } from '../domain/Errors/EmployeeDoesNotExistError'
import { EmployeeId } from '../domain/valueObject/EmployeeId'
import { UpdateEmployeeUseCase } from '../domain/domainService/UpdateEmployeeUseCase'
import { Employee, type EmployeePrimitives } from '../domain/entity/Employee'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type CentroTrabajoRepository } from '../../CentroTrabajo/domain/CentroTrabajoRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class EmployeeUpdater {
	private readonly updateEmployeeUseCase: UpdateEmployeeUseCase
	constructor(
		private readonly employeeRepository: EmployeeRepository,
		private readonly centroTrabajoRepository: CentroTrabajoRepository,
		private readonly locationRepository: LocationRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>,
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
		params: Partial<Omit<EmployeePrimitives, 'id'>>
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

import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type EmployeeParams } from '../domain/entity/Employee.dto'
import { type DepartamentoDto } from '../../Departamento/domain/Departamento.dto'
import { CreateEmployeeUseCase } from '../domain/domainService/createEmployeeUseCase'
import { EmployeeUseCase } from '../domain/domainService/EmployeeDomainService'

export class EmployeeCreator {
	private readonly createEmployeeUseCase: CreateEmployeeUseCase
	private readonly employeeUseCase: EmployeeUseCase = new EmployeeUseCase()
	constructor(
		private readonly employeeRepository: EmployeeRepository,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly locationRepository: LocationRepository,
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.createEmployeeUseCase = new CreateEmployeeUseCase(
			this.employeeRepository,
			this.centroCostoRepository,
			this.locationRepository,
			this.departamentoRepository,
			this.cargoRepository
		)
	}

	async run(params: EmployeeParams): Promise<void> {
		await this.createEmployeeUseCase.execute(params)

		const employee = this.employeeUseCase.execute(params)

		await this.employeeRepository.save(employee.toPrimitive())
	}
}

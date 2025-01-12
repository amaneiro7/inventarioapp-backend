import { type EmployeePrimitives } from '../domain/entity/Employee'
import { type EmployeeRepository } from '../domain/Repository/EmployeeRepository'
import { type LocationRepository } from '../../../Location/Location/domain/LocationRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DepartamentoPrimitives } from '../../Departamento/domain/Departamento'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { CreateEmployeeUseCase } from '../domain/domainService/createEmployeeUseCase'
import { EmployeeUseCase } from '../domain/domainService/EmployeeDomainService'

export class EmployeeCreator {
  private readonly createEmployeeUseCase: CreateEmployeeUseCase
  private readonly employeeUseCase: EmployeeUseCase = new EmployeeUseCase()
  constructor(
    private readonly employeeRepository: EmployeeRepository,
    private readonly centroCostoRepository: CentroCostoRepository,
    private readonly locationRepository: LocationRepository,
    private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>,
    private readonly cargoRepository: CargoRepository,

  ) {
    this.createEmployeeUseCase = new CreateEmployeeUseCase(
      this.employeeRepository,
      this.centroCostoRepository,
      this.locationRepository,
      this.departamentoRepository,
      this.cargoRepository
    )
  }

  async run(params: Omit<EmployeePrimitives, 'id'>): Promise<void> {

    await this.createEmployeeUseCase.execute(params)

    const employee = this.employeeUseCase.execute(params)

    await this.employeeRepository.save(employee.toPrimitive())
  }

}

import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { type CargoRepository } from "../../../Cargo/domain/CargoRepository"
import { DepartmentLevel3, type DepartmentLevel3Primitives } from "../../domain/entity/DepartmentLevel3"
import { CreateDepartmentLevel3UseCase } from "../../domain/use-case/CreateDepartmentLevel3UseCase"

export class DepartmentLevel3Creator {
  private readonly createDepartmentLevel3UseCase: CreateDepartmentLevel3UseCase
  constructor(
    private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
    private readonly departmentLevel2Repository: DepartmentRepository<DepartmentPrimitives>,
    private readonly cargoRepository: CargoRepository,
  ) {
    this.createDepartmentLevel3UseCase = new CreateDepartmentLevel3UseCase(
      this.departmentLevel3Repository,
      this.departmentLevel2Repository,
      this.cargoRepository
    )
  }

  async run({ name, departmentLevel2Id, cargos }: Omit<DepartmentLevel3Primitives, 'id'>): Promise<void> {
    const arraySinDuplicados = Array.from(new Set(cargos))
    await this.createDepartmentLevel3UseCase.execute({ name, departmentLevel2Id, cargos: arraySinDuplicados })

    const departmentLevel3 = DepartmentLevel3.create({ name, departmentLevel2Id, cargos: arraySinDuplicados })

    await this.departmentLevel3Repository.save(departmentLevel3.toPrimitive())
  }
}





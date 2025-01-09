import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentLevel2Primitives } from "../../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"
import { UpdateDepartmentLevel3UseCase } from "../../domain/use-case/UpdateDepartmentLevel3UseCase"
import { CargoRepository } from "../../../Cargo/domain/CargoRepository"
import { DepartmentLevel3, DepartmentLevel3Primitives } from "../../domain/entity/DepartmentLevel3"


export class DepartmentLevel3Updater {
  private readonly updateDepartmentLevel3UseCase: UpdateDepartmentLevel3UseCase
  constructor(
    private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
    private readonly departmentLevel2Repository: DepartmentRepository<DepartmentLevel2Primitives>,
    private readonly cargoRepository: CargoRepository
  ) {
    this.updateDepartmentLevel3UseCase = new UpdateDepartmentLevel3UseCase(
      this.departmentLevel3Repository,
      this.departmentLevel2Repository,
      this.cargoRepository
    )
  }

  async run({ id, params }: { id: string, params: Partial<Omit<DepartmentLevel3Primitives, 'id'>> }): Promise<void> {
    const { name, cargos, departmentLevel2Id } = params
    const departmentLevel3Id = new DepartmentId(id)

    const departmentLevel3 = await this.departmentLevel3Repository.searchById(departmentLevel3Id.value)
    if (!departmentLevel3) {
      throw new DepartmentDoesNotExistError()
    }

    const departmentLevel3Entity = DepartmentLevel3.fromPrimitives(departmentLevel3)

    await this.updateDepartmentLevel3UseCase.execute({ entity: departmentLevel3Entity, params: { name, cargos, departmentLevel2Id } })

    await this.departmentLevel3Repository.save(departmentLevel3Entity.toPrimitive())
  }
}

import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { type DepartmentName } from "../../domain/value-object/DepartmentName"
import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { DepartmentLevel1 } from "../../domain/entity/DepartmentLevel1"
import { DepartmentAlreadyExistError } from "../../domain/value-object/DepartmentAlreadyExistError"

export class DepartmentLevel1Creator {
  constructor(private readonly departmentLevel1Repository: DepartmentRepository<DepartmentPrimitives>) { }

  async run({ params }: { params: Omit<DepartmentPrimitives, 'id'> }): Promise<void> {
    const { name } = params
    await this.ensureDepartmentLevel1DoesNotExist(name)

    const departmentLevel1 = DepartmentLevel1.create({ name })

    await this.departmentLevel1Repository.save(departmentLevel1.toPrimitive())
  }

  private async ensureDepartmentLevel1DoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
    if (await this.departmentLevel1Repository.searchByName(name) !== null) {
      throw new DepartmentAlreadyExistError()
    }
  }
}





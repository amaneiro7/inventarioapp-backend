import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentLevel1 } from "../../domain/entity/DepartmentLevel1"
import { DepartmentAlreadyExistError } from "../../domain/value-object/DepartmentAlreadyExistError"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"
import { DepartmentName } from "../../domain/value-object/DepartmentName"


export class DepartmentLevel1Updater {
  constructor(private readonly departmentLevel1Repository: DepartmentRepository<DepartmentPrimitives>) { }

  async run({ id, params }: { id: string, params: Omit<DepartmentPrimitives, 'id'> }): Promise<void> {
    const { name } = params
    const departmentLevel1Id = new DepartmentId(id)

    const departmentLevel1 = await this.departmentLevel1Repository.searchById(departmentLevel1Id.value)
    if (!departmentLevel1) {
      throw new DepartmentDoesNotExistError()
    }

    const departmentLevel1Entity = DepartmentLevel1.fromPrimitives(departmentLevel1)
    await this.ensureDepartmentLevel1DoesNotExist(name, departmentLevel1Entity)

    await this.departmentLevel1Repository.save(departmentLevel1Entity.toPrimitive())
  }

  private async ensureDepartmentLevel1DoesNotExist(name: string, entity: DepartmentLevel1): Promise<void> {
    const newName = new DepartmentName(name)
    if (await this.departmentLevel1Repository.searchByName(newName.value) !== null) {
      throw new DepartmentAlreadyExistError()
    }
    entity.updateName(name)
  }
}

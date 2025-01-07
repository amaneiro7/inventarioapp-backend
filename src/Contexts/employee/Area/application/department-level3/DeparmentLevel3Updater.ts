import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { type DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { DepartmentLevel2, DepartmentLevel2Primitives } from "../../domain/entity/DepartmentLevel2"
import { DepartmentAlreadyExistError } from "../../domain/value-object/DepartmentAlreadyExistError"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"
import { DepartmentName } from "../../domain/value-object/DepartmentName"


export class DepartmentLevel2Updater {
  constructor(
    private readonly departmentLevel2Repository: DepartmentRepository<DepartmentLevel2Primitives>,
    private readonly departmentLevel1Repository: DepartmentRepository<DepartmentPrimitives>,
  ) { }

  async run({ id, params }: { id: string, params: Partial<Omit<DepartmentLevel2Primitives, 'id'>> }): Promise<void> {
    const { name, departmentLevel1Id } = params
    const departmentLevel2Id = new DepartmentId(id)

    const departmentLevel2 = await this.departmentLevel2Repository.searchById(departmentLevel2Id.value)
    if (!departmentLevel2) {
      throw new DepartmentDoesNotExistError()
    }

    const departmentLevel2Entity = DepartmentLevel2.fromPrimitives(departmentLevel2)
    // Se verifica que el departamento nivel 1 exista, y se actualize
    await this.ensureDepartmentLevel1Exists({ departmentLevel1Id, entity: departmentLevel2Entity })

    // Se Verifica que el departamento 2 no exista con el mismo nombre, y se actualiza
    await this.ensureDepartmentLevel2DoesNotExist({ name, entity: departmentLevel2Entity })

    await this.departmentLevel2Repository.save(departmentLevel2Entity.toPrimitive())
  }

  private async ensureDepartmentLevel2DoesNotExist({ entity, name }: { name?: Primitives<DepartmentName>, entity: DepartmentLevel2 }): Promise<void> {
    if (!!name && entity.nameValue !== name) {
      const newName = new DepartmentName(name)
      if (await this.departmentLevel2Repository.searchByName(newName.value) !== null) {
        throw new DepartmentAlreadyExistError()
      }
      entity.updateName(name)

    }
  }
  private async ensureDepartmentLevel1Exists({ entity, departmentLevel1Id }: { departmentLevel1Id?: Primitives<DepartmentId>, entity: DepartmentLevel2 }): Promise<void> {
    if (!!departmentLevel1Id && entity.idDepartmentLevel1Value !== departmentLevel1Id) {
      const id = new DepartmentId(departmentLevel1Id)
      if (await this.departmentLevel1Repository.searchById(id.value) === null) {
        throw new DepartmentDoesNotExistError()
      }
      entity.updateDepartment1(id.value)
    }
  }
}

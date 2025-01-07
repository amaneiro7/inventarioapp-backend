import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { DepartmentLevel2, type DepartmentLevel2Primitives } from "../../domain/entity/DepartmentLevel2"
import { DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentAlreadyExistError } from "../../domain/value-object/DepartmentAlreadyExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"
import { DepartmentName } from "../../domain/value-object/DepartmentName"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"

export class DepartmentLevel2Creator {
  constructor(
    private readonly departmentLevel2Repository: DepartmentRepository<DepartmentLevel2Primitives>,
    private readonly departmentLevel1Repository: DepartmentRepository<DepartmentPrimitives>,
  ) { }

  async run({ name, departmentLevel1Id }: Omit<DepartmentLevel2Primitives, 'id'>): Promise<void> {
    // Se verifica que el departamento 1 exista
    await this.ensureDepartmentLevel1Exists(departmentLevel1Id)

    // Se verifica que el departamento 2 no exista
    await this.ensureDepartmentLevel2DoesNotExist(name)

    const departmentLevel2 = DepartmentLevel2.create({ name, departmentLevel1Id })

    await this.departmentLevel2Repository.save(departmentLevel2.toPrimitive())
  }

  private async ensureDepartmentLevel2DoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
    if (await this.departmentLevel2Repository.searchByName(name) !== null) {
      throw new DepartmentAlreadyExistError()
    }
  }

  private async ensureDepartmentLevel1Exists(departmentLevel1Id: Primitives<DepartmentId>): Promise<void> {
    if (await this.departmentLevel1Repository.searchById(departmentLevel1Id) === null) {
      throw new DepartmentDoesNotExistError()
    }
  }
}





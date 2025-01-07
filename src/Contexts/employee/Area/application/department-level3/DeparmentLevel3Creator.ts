import { type Primitives } from "../../../../Shared/domain/value-object/Primitives"
import { type DepartmentPrimitives } from "../../domain/entity/IDeparment"
import { DepartmentLevel3, type DepartmentLevel3Primitives } from "../../domain/entity/DepartmentLevel3"
import { DepartmentRepository } from "../../domain/repository/DepartmentRepository"
import { DepartmentAlreadyExistError } from "../../domain/value-object/DepartmentAlreadyExistError"
import { DepartmentId } from "../../domain/value-object/DepartmentId"
import { DepartmentName } from "../../domain/value-object/DepartmentName"
import { DepartmentDoesNotExistError } from "../../domain/value-object/DepartmentDoesNotExistError"
import { CargoRepository } from "../../../Cargo/domain/CargoRepository"
import { CargoId } from "../../../Cargo/domain/CargoId"

export class DepartmentLevel3Creator {
  constructor(
    private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
    private readonly departmentLevel2Repository: DepartmentRepository<DepartmentPrimitives>,
    private readonly cargoRepository: CargoRepository,
  ) { }

  async run({ name, departmentLevel2Id, cargos }: Omit<DepartmentLevel3Primitives, 'id'>): Promise<void> {
    // Se verifica que el departamento 2 exista
    await this.ensureDepartmentLevel2Exists(departmentLevel2Id)

    // Se verifica que el departamento 3 no exista
    await this.ensureDepartmentLevel3DoesNotExist(name)

    // Se verifica que los cargos existan
    await this.ensureCargoExists(cargos)

    const departmentLevel3 = DepartmentLevel3.create({ name, departmentLevel2Id, cargos })

    await this.departmentLevel3Repository.save(departmentLevel3.toPrimitive())
  }

  private async ensureDepartmentLevel3DoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
    if (await this.departmentLevel3Repository.searchByName(name) !== null) {
      throw new DepartmentAlreadyExistError()
    }
  }

  private async ensureDepartmentLevel2Exists(departmentLevel2Id: Primitives<DepartmentId>): Promise<void> {
    if (await this.departmentLevel2Repository.searchById(departmentLevel2Id) === null) {
      throw new DepartmentDoesNotExistError()
    }
  }

  private async ensureCargoExists(cargos: Primitives<CargoId>[]): Promise<void> {
    for (const cargoId of cargos) {
      if (await this.cargoRepository.searchById(cargoId) === null) {
        throw new DepartmentDoesNotExistError()
      }
    }
  }
}





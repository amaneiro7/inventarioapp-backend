import { CreateCargoUseCase } from "../domain/CreateCargoUseCase"
import { Cargo, type CargoPrimitives } from "../domain/Cargo"
import { type DepartmentLevel3Primitives } from "../../IDepartment/domain/entity/DepartmentLevel3"
import { type DepartmentRepository } from "../../IDepartment/domain/repository/DepartmentRepository"
import { type CargoRepository } from "../domain/CargoRepository"

export class CargoCreator {
  private readonly createCargoUseCase: CreateCargoUseCase
  constructor(
    private readonly cargoRepository: CargoRepository,
    private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
  ) {
    this.createCargoUseCase = new CreateCargoUseCase(
      this.cargoRepository,
      this.departmentLevel3Repository
    )
  }

  async run({ name, departments }: Omit<CargoPrimitives, 'id'>): Promise<void> {
    const arraySinDuplicados = Array.from(new Set(departments))
    await this.createCargoUseCase.execute({ name, departments: arraySinDuplicados })

    const cargo = Cargo.create({ name, departments: arraySinDuplicados })

    await this.cargoRepository.save(cargo.toPrimitive())
  }
}





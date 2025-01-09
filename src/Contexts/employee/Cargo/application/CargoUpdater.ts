import { type DepartmentLevel3Primitives } from "../../IDepartment/domain/entity/DepartmentLevel3";
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository";
import { type CargoRepository } from "../domain/CargoRepository";
import { CargoId } from "../domain/CargoId";
import { Cargo, type CargoPrimitives } from "../domain/Cargo";
import { CargoDoesNotExistError } from "../domain/CargoDoesNotExistError";
import { UpdateCargoUseCase } from "../domain/UpdateCargoUseCase";

export class CargoUpdater {
  private readonly updateCargoUseCase: UpdateCargoUseCase
  constructor(
    private readonly cargoRepository: CargoRepository,
    private readonly departmentLevel3Repository: DepartmentRepository<DepartmentLevel3Primitives>,
  ) {
    this.updateCargoUseCase = new UpdateCargoUseCase(
      this.cargoRepository,
      this.departmentLevel3Repository
    )
  }

  async run({ id, params }: { id: string, params: Partial<Omit<CargoPrimitives, 'id'>> }): Promise<void> {
    const { name, departments } = params
    const cargoId = new CargoId(id)

    const cargo = await this.cargoRepository.searchById(cargoId.value)
    if (!cargo) {
      throw new CargoDoesNotExistError()
    }

    const cargoEntity = Cargo.fromPrimitives(cargo)

    await this.updateCargoUseCase.execute({ entity: cargoEntity, params: { name, departments } })

    await this.cargoRepository.save(cargoEntity.toPrimitive())
  }
}

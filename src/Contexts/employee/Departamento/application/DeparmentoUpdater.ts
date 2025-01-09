import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { Departmento, type DepartmentoPrimitives } from "../domain/Departmento"
import { UpdateDepartmentoUseCase } from "../domain/UpdateDepartmentoUseCase"
import { type CargoRepository } from "../../Cargo/domain/CargoRepository"
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type VicepresidenciaEjecutivaPrimitives } from "../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva"
import { CentroCostoRepository } from "../../CentroCosto/domain/CentroCostoRepository"

export class DepartmentoUpdater {
  private readonly updateDepartmentoUseCase: UpdateDepartmentoUseCase
  constructor(
    private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>,
    private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
    private readonly centroCostoRepository: CentroCostoRepository,
    private readonly cargoRepository: CargoRepository
  ) {
    this.updateDepartmentoUseCase = new UpdateDepartmentoUseCase(
      this.departmentoRepository,
      this.vicepresidenciaEjecutivaRepository,
      this.centroCostoRepository,
      this.cargoRepository
    )
  }

  async run({ id, params }: { id: string, params: Partial<Omit<DepartmentoPrimitives, 'id'>> }): Promise<void> {
    const { name, cargos, vicepresidenciaEjecutivaId, centroCostoId } = params
    const departmentoId = new DepartmentId(id)

    const departmento = await this.departmentoRepository.searchById(departmentoId.value)
    if (!departmento) {
      throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
    }

    const departmentoEntity = Departmento.fromPrimitives(departmento)

    await this.updateDepartmentoUseCase.execute({ entity: departmentoEntity, params: { name, cargos, vicepresidenciaEjecutivaId, centroCostoId } })

    await this.departmentoRepository.save(departmentoEntity.toPrimitive())
  }
}

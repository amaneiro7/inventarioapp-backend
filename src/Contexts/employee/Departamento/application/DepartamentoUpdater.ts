import { DepartmentDoesNotExistError } from "../../IDepartment/DepartmentDoesNotExistError"
import { DepartmentId } from "../../IDepartment/DepartmentId"
import { Departamento, type DepartamentoPrimitives } from "../domain/Departamento"
import { UpdateDepartamentoUseCase } from "../domain/UpdateDepartmentoUseCase"
import { type CargoRepository } from "../../Cargo/domain/CargoRepository"
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository"
import { type VicepresidenciaEjecutivaPrimitives } from "../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva"
import { type CentroCostoRepository } from "../../CentroCosto/domain/CentroCostoRepository"

export class DepartamentoUpdater {
  private readonly updateDepartamentoUseCase: UpdateDepartamentoUseCase
  constructor(
    private readonly departamentoRepository: DepartmentRepository<DepartamentoPrimitives>,
    private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
    private readonly centroCostoRepository: CentroCostoRepository,
    private readonly cargoRepository: CargoRepository
  ) {
    this.updateDepartamentoUseCase = new UpdateDepartamentoUseCase(
      this.departamentoRepository,
      this.vicepresidenciaEjecutivaRepository,
      this.centroCostoRepository,
      this.cargoRepository
    )
  }

  async run({ id, params }: { id: string, params: Partial<Omit<DepartamentoPrimitives, 'id'>> }): Promise<void> {
    const { name, cargos, vicepresidenciaEjecutivaId, centroCostoId } = params
    const departamentoId = new DepartmentId(id)

    const departamento = await this.departamentoRepository.searchById(departamentoId.value)
    if (!departamento) {
      throw new DepartmentDoesNotExistError('La gerencia, coordinación o departamento')
    }

    const departamentoEntity = Departamento.fromPrimitives(departamento)

    await this.updateDepartamentoUseCase.execute({ entity: departamentoEntity, params: { name, cargos, vicepresidenciaEjecutivaId, centroCostoId } })

    await this.departamentoRepository.save(departamentoEntity.toPrimitive())
  }
}

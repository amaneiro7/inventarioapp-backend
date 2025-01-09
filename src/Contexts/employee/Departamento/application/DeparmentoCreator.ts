import { Departmento, type DepartmentoPrimitives } from "../domain/Departmento";
import { CreateDepartmentoUseCase } from "../domain/CreateDepartmentoUseCase";
import { type CargoRepository } from "../../Cargo/domain/CargoRepository";
import { type DepartmentRepository } from "../../IDepartment/DepartmentRepository";
import { type VicepresidenciaEjecutivaPrimitives } from "../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva";
import { type CentroCostoRepository } from "../../CentroCosto/domain/CentroCostoRepository";

export class DepartmentoCreator {
  private readonly createDepartmentoUseCase: CreateDepartmentoUseCase
  constructor(
    private readonly departmentoRepository: DepartmentRepository<DepartmentoPrimitives>,
    private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
    private readonly centroCostoRepository: CentroCostoRepository,
    private readonly cargoRepository: CargoRepository,
  ) {
    this.createDepartmentoUseCase = new CreateDepartmentoUseCase(
      this.departmentoRepository,
      this.vicepresidenciaEjecutivaRepository,
      this.centroCostoRepository,
      this.cargoRepository
    )
  }

  async run({ name, vicepresidenciaEjecutivaId, centroCostoId, cargos }: Omit<DepartmentoPrimitives, 'id'>): Promise<void> {
    const arraySinDuplicados = Array.from(new Set(cargos))
    await this.createDepartmentoUseCase.execute({ name, vicepresidenciaEjecutivaId, centroCostoId, cargos: arraySinDuplicados })

    const departmento = Departmento.create({ name, vicepresidenciaEjecutivaId, centroCostoId, cargos: arraySinDuplicados })

    await this.departmentoRepository.save(departmento.toPrimitive())
  }
}





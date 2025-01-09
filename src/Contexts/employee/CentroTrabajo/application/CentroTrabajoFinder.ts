import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type CentroTrabajoPrimitives } from "../domain/CentroTrabajo"
import { type CentroTrabajoRepository } from "../domain/CentroTrabajoRepository"
import { CodCentroTrabajo } from "../domain/CodCentroTrabajo"
import { CentroTrabajoDoesNotExistError } from "../domain/CentroTrabajoDoesNotExistError"

export class CentroTrabajoFinder {
  constructor(private readonly centroTrabajoRepository: CentroTrabajoRepository) { }

  async run(params: { id: Primitives<CodCentroTrabajo> }): Promise<CentroTrabajoPrimitives> {
    const { id } = params
    const codCentroTrabajo = new CodCentroTrabajo(id)
    const centroTrabajo = await this.centroTrabajoRepository.searchById(codCentroTrabajo.value)

    if (!centroTrabajo) {
      throw new CentroTrabajoDoesNotExistError()
    }

    return centroTrabajo
  }
}

import { type Primitives } from "../../../Shared/domain/value-object/Primitives"
import { type CentroCostoPrimitives } from "../domain/CentroCosto"
import { type CentroCostoRepository } from "../domain/CentroCostoRepository"
import { CodCentroCosto } from "../domain/CodCentroCosto"
import { CentroCostoDoesNotExistError } from "../domain/CentroCostoDoesNotExistError"

export class CentroCostoFinder {
  constructor(private readonly centroCostoRepository: CentroCostoRepository) { }

  async run(params: { id: Primitives<CodCentroCosto> }): Promise<CentroCostoPrimitives> {
    const { id } = params
    const codCentroCosto = new CodCentroCosto(id)
    const centroCosto = await this.centroCostoRepository.searchById(codCentroCosto.value)

    if (!centroCosto) {
      throw new CentroCostoDoesNotExistError()
    }

    return centroCosto
  }
}

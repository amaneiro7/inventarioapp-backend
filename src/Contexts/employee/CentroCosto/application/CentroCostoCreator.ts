import { CentroCosto, type CentroCostoPrimitives } from '../domain/CentroCosto'
import { CentroCostoAlreadyExistError } from '../domain/CentroCostoAlreadyExistError'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CodCentroCosto } from '../domain/CodCentroCosto'

export class CentroCostoCreator {
  constructor(private readonly centroCostoRepository: CentroCostoRepository) { }

  async run({ id, name }: CentroCostoPrimitives): Promise<void> {
    await this.ensureCentroCostoDoesNotExist({ id })

    const centroCosto = CentroCosto.create({ id, name })

    await this.centroCostoRepository.save(centroCosto.toPrimitive())
  }

  private async ensureCentroCostoDoesNotExist({ id }: { id: Primitives<CodCentroCosto> }): Promise<void> {
    if (await this.centroCostoRepository.searchById(id) !== null) {
      throw new CentroCostoAlreadyExistError()
    }
  }
}





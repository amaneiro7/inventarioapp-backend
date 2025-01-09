import { type CentroCostoPrimitives } from '../domain/CentroCosto'
import { type CentroCostoRepository } from '../domain/CentroCostoRepository'

export class CentroCostoFinderAll {
  constructor(private readonly centroCostoRepository: CentroCostoRepository) { }

  async run(): Promise<CentroCostoPrimitives[]> {
    return await this.centroCostoRepository.searchAll()
  }
}

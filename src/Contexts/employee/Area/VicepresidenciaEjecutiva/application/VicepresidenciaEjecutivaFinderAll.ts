import { type VicepresidenciaEjecutivaPrimitives } from '../domain/VicepresidenciaEjecutiva'
import { type VicepresidenciaEjecutivaRepository } from '../domain/VicepresidenciaEjecutivaRepository'

export class SearchAllVicepresidenciaEjecutiva {
  constructor(private readonly repository: VicepresidenciaEjecutivaRepository) { }

  async run(): Promise<VicepresidenciaEjecutivaPrimitives[]> {
    return await this.repository.searchAll()
  }
}

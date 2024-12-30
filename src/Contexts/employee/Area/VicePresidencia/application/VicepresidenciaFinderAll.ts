import { type VicepresidenciaPrimitives } from '../domain/vicepresidencia'
import { type VicepresidenciaRepository } from '../domain/vicepresidenciaRepository'

export class SearchAllVicepresidencia {
  constructor(private readonly repository: VicepresidenciaRepository) { }

  async run(): Promise<VicepresidenciaPrimitives[]> {
    return await this.repository.searchAll()
  }
}

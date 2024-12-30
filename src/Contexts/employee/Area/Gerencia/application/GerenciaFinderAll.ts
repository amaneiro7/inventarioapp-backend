import { type GerenciaPrimitives } from '../domain/Gerencia'
import { type GerenciaRepository } from '../domain/GerenciaRepository'

export class SearchAllGerencia {
  constructor(private readonly repository: GerenciaRepository) { }

  async run(): Promise<GerenciaPrimitives[]> {
    return await this.repository.searchAll()
  }
}

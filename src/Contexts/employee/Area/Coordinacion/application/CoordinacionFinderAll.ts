import { type CoordinacionPrimitives } from '../domain/Coordinacion'
import { type CoordinacionRepository } from '../domain/CoordinacionRepository'

export class SearchAllCoordinacion {
  constructor(private readonly repository: CoordinacionRepository) { }

  async run(): Promise<CoordinacionPrimitives[]> {
    return await this.repository.searchAll()
  }
}

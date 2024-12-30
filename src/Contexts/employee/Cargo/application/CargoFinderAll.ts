import { type CargoPrimitives } from '../domain/Cargo'
import { type CargoRepository } from '../domain/CargoRepository'

export class SearchAllCargo {
  constructor(private readonly repository: CargoRepository) { }

  async run(): Promise<CargoPrimitives[]> {
    return await this.repository.searchAll()
  }
}

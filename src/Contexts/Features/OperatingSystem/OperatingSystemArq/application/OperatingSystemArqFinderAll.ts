import { type OperatingSystemArqPrimitives } from '../domain/OperatingSystemArq'
import { type OperatingSystemArqRepository } from '../domain/OperatingSystemArqRepository'

export class SearchAllOperatingSystemArq {
  constructor(private readonly repository: OperatingSystemArqRepository) { }

  async run(): Promise<OperatingSystemArqPrimitives[]> {
    return await this.repository.searchAll()
  }
}

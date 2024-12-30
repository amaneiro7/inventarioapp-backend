import { type OperatingSystemPrimitives } from '../domain/OperatingSystem'
import { type OperatingSystemRepository } from '../domain/OperatingSystemRepository'

export class SearchAllOperatingSystem {
  constructor(private readonly repository: OperatingSystemRepository) { }

  async run(): Promise<OperatingSystemPrimitives[]> {
    return await this.repository.searchAll()
  }
}

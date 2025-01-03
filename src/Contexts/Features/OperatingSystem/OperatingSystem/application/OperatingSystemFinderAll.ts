import { type OperatingSystemPrimitives } from '../domain/OperatingSystem'
import { type OperatingSystemRepository } from '../domain/OperatingSystemRepository'

export class OperatingSystemFinderAll {
  constructor(private readonly operatingSystemRepository: OperatingSystemRepository) { }

  async run(): Promise<OperatingSystemPrimitives[]> {
    return await this.operatingSystemRepository.searchAll()
  }
}

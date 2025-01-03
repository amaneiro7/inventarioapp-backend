import { type OperatingSystemArqPrimitives } from '../domain/OperatingSystemArq'
import { type OperatingSystemArqRepository } from '../domain/OperatingSystemArqRepository'

export class OperatingSystemArqFinderAll {
  constructor(private readonly operatingSystemArqRepository: OperatingSystemArqRepository) { }

  async run(): Promise<OperatingSystemArqPrimitives[]> {
    return await this.operatingSystemArqRepository.searchAll()
  }
}

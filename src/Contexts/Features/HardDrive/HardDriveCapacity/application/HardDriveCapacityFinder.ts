import { type HardDriveCapacityPrimitives } from '../domain/HardDriveCapacity'
import { type HardDriveCapacityRepository } from '../domain/HardDriveCapacityRepository'

export class HardDriveCapacityFinderAll {
  constructor(private readonly hardDriveCapacityRepository: HardDriveCapacityRepository) { }

  async run(): Promise<HardDriveCapacityPrimitives[]> {
    return await this.hardDriveCapacityRepository.searchAll()
  }
}

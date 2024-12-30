import { type HardDriveCapacityPrimitives } from '../domain/HardDriveCapacity'
import { type HardDriveCapacityRepository } from '../domain/HardDriveCapacityRepository'

export class SearchAllHardDriveCapacity {
  constructor(private readonly repository: HardDriveCapacityRepository) { }

  async run(): Promise<HardDriveCapacityPrimitives[]> {
    return await this.repository.searchAll()
  }
}

import { type HardDriveTypePrimitives } from '../domain/HardDriveType'
import { type HardDriveTypeRepository } from '../domain/HardDriveTypeRepository'

export class SearchAllHardDriveType {
  constructor(private readonly repository: HardDriveTypeRepository) { }

  async run(): Promise<HardDriveTypePrimitives[]> {
    return await this.repository.searchAll()
  }
}

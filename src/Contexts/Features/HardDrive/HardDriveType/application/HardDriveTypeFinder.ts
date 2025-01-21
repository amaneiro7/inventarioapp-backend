import { type HardDriveTypePrimitives } from '../domain/HardDriveType'
import { type HardDriveTypeRepository } from '../domain/HardDriveTypeRepository'

export class HardDriveTypeFinderAll {
	constructor(
		private readonly hardDriveTypeRepository: HardDriveTypeRepository
	) {}

	async run(): Promise<HardDriveTypePrimitives[]> {
		return await this.hardDriveTypeRepository.searchAll()
	}
}

import { type ProcessorSocketPrimitives } from '../domain/ProcessorSocket'
import { type ProcessorSocketRepository } from '../domain/ProcessorSocketRepository'

export class ProcessorSocketFinderAll {
	constructor(
		private readonly processorSockeRepository: ProcessorSocketRepository
	) {}

	async run(): Promise<ProcessorSocketPrimitives[]> {
		return await this.processorSockeRepository.searchAll()
	}
}

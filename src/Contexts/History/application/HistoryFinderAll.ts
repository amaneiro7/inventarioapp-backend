import { type HistoryPrimitives } from '../domain/History'
import { type HistoryRepository } from '../domain/HistoryRepository'

export class HistoryFinderAll {
	constructor(private readonly historyRepository: HistoryRepository) {}

	async run(): Promise<HistoryPrimitives[]> {
		return await this.historyRepository.searchAll()
	}
}

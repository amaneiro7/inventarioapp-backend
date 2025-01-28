import { History } from '../domain/History'
import { type HistoryParams } from '../domain/History.dto'
import { type HistoryRepository } from '../domain/HistoryRepository'

export class HistoryCreator {
	constructor(private readonly historyRepository: HistoryRepository) {}

	async run(params: HistoryParams): Promise<void> {
		const history = History.create(params)

		await this.historyRepository.save(history.toPrimitives())
	}
}

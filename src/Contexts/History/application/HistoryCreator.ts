import { History } from '../domain/History'
import { type HistoryParams } from '../domain/History.dto'
import { type HistoryRepository } from '../domain/HistoryRepository'

/**
 * @class HistoryCreator
 * @description A service responsible for creating and saving new history records.
 */
export class HistoryCreator {
	/**
	 * @param {HistoryRepository} historyRepository - The repository for persisting history data.
	 */
	constructor(private readonly historyRepository: HistoryRepository) {}

	/**
	 * @description Creates a History entity from the provided parameters and saves it to the repository.
	 * @param {HistoryParams} params - The data needed to create a new history record.
	 * @returns {Promise<void>} A promise that resolves when the history has been saved.
	 */
	async run(params: HistoryParams): Promise<void> {
		const history = History.create(params)

		await this.historyRepository.save(history.toPrimitives())
	}
}

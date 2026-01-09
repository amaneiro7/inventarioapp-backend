import { History } from '../domain/entity/History'
import { type EventBus } from '../../Shared/domain/event/EventBus'
import { type HistoryParams } from '../domain/entity/History.dto'
import { type HistoryRepository } from '../domain/repository/HistoryRepository'

/**
 * @class HistoryCreator
 * @description A service responsible for creating and saving new history records.
 */
export class HistoryCreator {
	/**
	 * @param {HistoryRepository} historyRepository - The repository for persisting history data.
	 */
	private readonly historyRepository: HistoryRepository
	private readonly eventBus: EventBus
	constructor({ historyRepository, eventBus }: { historyRepository: HistoryRepository; eventBus: EventBus }) {
		this.historyRepository = historyRepository
		this.eventBus = eventBus
	}

	/**
	 * @description Creates a History entity from the provided parameters and saves it to the repository.
	 * @param {HistoryParams} params - The data needed to create a new history record.
	 * @returns {Promise<void>} A promise that resolves when the history has been saved.
	 */
	async run(params: HistoryParams): Promise<void> {
		const history = History.create(params)

		await this.historyRepository.save(history.toPrimitives())
		await this.eventBus.publish(history.pullDomainEvents())
	}
}

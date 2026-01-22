import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { type HistoryDto } from '../domain/entity/History.dto'
import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type HistoryRepository } from '../domain/repository/HistoryRepository'
import { HistoryEnricher } from '../domain/service/HistoryEnricher'

/**
 * @description Service to find all history records, enriching them with related entity names.
 * This service is optimized to prevent N+1 query problems by fetching related data in bulk.
 */
export class HistoryFinderAll extends GetAllBaseService<HistoryDto> {
	private readonly historyRepository: HistoryRepository
	private readonly historyEnricher: HistoryEnricher

	constructor({
		historyRepository,
		historyEnricher
	}: {
		historyRepository: HistoryRepository
		historyEnricher: HistoryEnricher
	}) {
		super()
		this.historyRepository = historyRepository
		this.historyEnricher = historyEnricher
	}

	/**
	 * @description Executes the history search and enrichment.
	 * @param {Criteria} criteria - The criteria for filtering and pagination.
	 * @returns {Promise<ResponseService<HistoryDto>>} A paginated response of enriched history DTOs.
	 */
	async run(criteria: Criteria): Promise<ResponseService<HistoryDto>> {
		const { data, total } = await this.historyRepository.searchAll(criteria)

		if (data.length === 0) {
			return this.response({ data: [], total: 0, pageNumber: criteria.pageNumber, pageSize: criteria.pageSize })
		}

		// Delegate enrichment to the reusable service
		const mappedData = await this.historyEnricher.execute(data)

		return this.response({
			data: mappedData,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}

import { GetAllBaseService } from '../../Shared/methods/getAll.abstract'
import { type ResponseService } from '../../Shared/domain/ResponseType'
import { type HistoryDto } from '../domain/History.dto'
import { type Criteria } from '../../Shared/domain/criteria/Criteria'
import { type HistoryRepository } from '../domain/HistoryRepository'

export class HistoryFinderAll extends GetAllBaseService<HistoryDto> {
	constructor(private readonly historyRepository: HistoryRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<HistoryDto>> {
		const { data, total } = await this.historyRepository.searchAll(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}

import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type ModelSeriesDto } from '../domain/ModelSeries.dto'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesSearchByCriteria extends GetAllBaseService<ModelSeriesDto> {
	constructor(private readonly modelSeriesRepository: ModelSeriesRepository) {
		super()
	}

	async run(criteria: Criteria): Promise<ResponseService<ModelSeriesDto>> {
		const { data, total } = await this.modelSeriesRepository.matching(criteria)

		return this.response({
			data,
			total,
			pageNumber: criteria.pageNumber,
			pageSize: criteria.pageSize
		})
	}
}

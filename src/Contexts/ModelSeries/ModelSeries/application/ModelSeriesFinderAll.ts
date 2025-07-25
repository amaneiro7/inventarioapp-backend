import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type ModelSeriesDto } from '../domain/ModelSeries.dto'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesFinderAll extends GetAllBaseService<ModelSeriesDto> {
	private readonly modelSeriesRepository: ModelSeriesRepository
	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesRepository }) {
		super()
		this.modelSeriesRepository = modelSeriesRepository
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

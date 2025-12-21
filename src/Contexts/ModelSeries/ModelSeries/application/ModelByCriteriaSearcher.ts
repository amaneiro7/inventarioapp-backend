import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseService } from '../../../Shared/domain/ResponseType'
import { type ModelSeriesDto } from '../domain/dto/ModelSeries.dto'
import { type ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'

/**
 * @description Use case for retrieving all ModelSeries entities that match a specific set of criteria.
 */
export class ModelSeriesSearchByCriteria extends GetAllBaseService<ModelSeriesDto> {
	private readonly modelSeriesRepository: ModelSeriesRepository

	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesRepository }) {
		super()
		this.modelSeriesRepository = modelSeriesRepository
	}

	/**
	 * @description Executes the process of finding all model series that match the given criteria.
	 * @param {Criteria} criteria The criteria object for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseService<ModelSeriesDto>>} A paginated response of model series.
	 */
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

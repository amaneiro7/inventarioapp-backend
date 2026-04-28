import type { Criteria } from '../../../Shared/domain/criteria/Criteria'
import type { ModelSeriesRepository } from '../domain/repository/ModelSeriesRepository'

/**
 * @description Service for generating an Excel file (Buffer) containing model series data.
 */
export class ModelSeriesExcelService {
	private readonly modelSeriesRepository: ModelSeriesRepository

	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesRepository }) {
		this.modelSeriesRepository = modelSeriesRepository
	}

	/**
	 * @description Executes the Excel file generation process.
	 * @param {Criteria} criteria The criteria object containing filters and orderings.
	 * @returns {Promise<Buffer>} A promise that resolves to a Buffer containing the Excel file data.
	 */
	async run(criteria: Criteria): Promise<Buffer> {
		const criteriaAll = criteria.withoutPagination()

		return this.modelSeriesRepository.donwload(criteriaAll)
	}
}

import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { Order } from '../../../Shared/domain/criteria/Order'
import { Filter } from '../../../Shared/domain/criteria/Filter'
import { FilterField } from '../../../Shared/domain/criteria/FilterField'
import { FilterValue } from '../../../Shared/domain/criteria/FilterValue'
import { FilterOperator } from '../../../Shared/domain/criteria/FilterOperator'
import { type SearchByCriteriaQuery } from '../../../Shared/domain/SearchByCriteriaQuery'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

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
	 * @param {SearchByCriteriaQuery} query The query containing filters and orderings.
	 * @returns {Promise<Buffer>} A promise that resolves to a Buffer containing the Excel file data.
	 */
	async run(query: SearchByCriteriaQuery): Promise<Buffer> {
		const filters = query.filters.map(
			filter =>
				new Filter(
					new FilterField(filter.field),
					FilterOperator.fromValue(filter.operator),
					new FilterValue(filter.value)
				)
		)
		const order = Order.fromValues(query.orderBy ?? 'categoryId', query.orderType)
		const criteria = new Criteria(new Filters(filters), order)

		return this.modelSeriesRepository.donwload(criteria)
	}
}

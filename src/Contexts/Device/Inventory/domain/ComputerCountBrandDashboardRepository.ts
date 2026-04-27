import type { AggregatedBrandData } from '../infra/sequelize/dashboard/types'
import type { Criteria } from '../../../Shared/domain/criteria/Criteria'
import type { ResponseDB } from '../../../Shared/domain/ResponseType'

export abstract class ComputerCountBrandDashboardRepository {
	/**
	 * @abstract
	 * @method countByBrand
	 * @description Retrieves and aggregates the count of computers, grouped by brand, model, and type of site.
	 * @returns {Promise<AggregatedBrandData[]>} A promise that resolves to an array of aggregated brand data.
	 */
	abstract run(criteria: Criteria): Promise<ResponseDB<AggregatedBrandData>>
}

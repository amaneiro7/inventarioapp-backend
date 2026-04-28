import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { MainCategoryList } from '../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { StatusOptions } from '../../Status/domain/StatusOptions'
import { Filter } from '../../../Shared/domain/criteria/Filter'
import { FilterField } from '../../../Shared/domain/criteria/FilterField'
import { FilterOperator, Operator } from '../../../Shared/domain/criteria/FilterOperator'
import { FilterValue } from '../../../Shared/domain/criteria/FilterValue'
import type { Criteria } from '../../../Shared/domain/criteria/Criteria'
import type { ComputerCountBrandDashboardRepository } from '../domain/ComputerCountBrandDashboardRepository'
import type { AggregatedBrandData } from '../infra/sequelize/dashboard/types'
import type { ResponseService } from '../../../Shared/domain/ResponseType'

/**
 * @class ComputerDashboard
 * @description Application service to orchestrate the fetching of all data required for the computer-specific dashboard.
 * It gathers data from multiple repositories and aggregates it into a single response.
 */
export class ComputerCountBrandDashboard extends GetAllBaseService<AggregatedBrandData> {
	private readonly computerCountBrandDashboardRepository: ComputerCountBrandDashboardRepository
	constructor({
		computerCountBrandDashboardRepository
	}: {
		computerCountBrandDashboardRepository: ComputerCountBrandDashboardRepository
	}) {
		super()
		this.computerCountBrandDashboardRepository = computerCountBrandDashboardRepository
	}

	async run(criteria: Criteria): Promise<ResponseService<AggregatedBrandData>> {
		// Aplicamos Reglas de Negocio:
		// 1. Siempre filtrar por categoría Computadoras si no viene una.
		// 2. Por defecto excluir desincorporados si no hay un filtro de status explícito.
		const mandatoryFilters = [
			new Filter(
				new FilterField('mainCategoryId'),
				new FilterOperator(Operator.EQUAL),
				new FilterValue(MainCategoryList.COMPUTER)
			)
		]

		if (!criteria.searchValueInArray('statusId')) {
			mandatoryFilters.push(
				new Filter(
					new FilterField('statusId'),
					new FilterOperator(Operator.NOT_EQUAL),
					new FilterValue(StatusOptions.DESINCORPORADO)
				),
				new Filter(
					new FilterField('statusId'),
					new FilterOperator(Operator.NOT_EQUAL),
					new FilterValue(StatusOptions.PORDESINCORPORAR)
				)
			)
		}

		const enrichedCriteria = criteria.withFilters(mandatoryFilters)

		const { data, total } = await this.computerCountBrandDashboardRepository.run(enrichedCriteria)

		return this.response({
			data,
			total,
			pageSize: enrichedCriteria.pageSize,
			pageNumber: enrichedCriteria.pageNumber
		})
	}
}

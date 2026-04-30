import { GetAllBaseService } from '../../../Shared/methods/getAll.abstract'
import { MainCategoryList } from '../../../Category/MainCategory/domain/MainCategoryDefaultData'
import { StatusOptions } from '../../Status/domain/StatusOptions'
import { Filter } from '../../../Shared/domain/criteria/Filter'
import { FilterField } from '../../../Shared/domain/criteria/FilterField'
import { FilterOperator, Operator } from '../../../Shared/domain/criteria/FilterOperator'
import { FilterValue } from '../../../Shared/domain/criteria/FilterValue'
import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Order } from '../../../Shared/domain/criteria/Order'
import { OrderTypes } from '../../../Shared/domain/criteria/OrderType'
import type { ComputerCountBrandDashboardRepository } from '../domain/ComputerCountBrandDashboardRepository'
import type { AggregatedBrandData, ModelData } from '../infra/sequelize/dashboard/types'
import type { ResponseService } from '../../../Shared/domain/ResponseType'
import { TypeOfSiteOptionsByName } from '../../../Location/TypeOfSite/domain/TypeOfSiteList'

/**
 * @class ComputerCountBrandDashboard
 * @description Servicio de aplicación encargado de generar el reporte de dispositivos por marca y modelo.
 * Orquestra el filtrado obligatorio, la agregación de datos y el ordenamiento manual de campos calculados.
 */
export class ComputerCountBrandDashboard extends GetAllBaseService<ModelData> {
	/** Umbral por defecto para determinar el estado de stock */
	private static readonly STOCK_THRESHOLD = 10

	private readonly computerCountBrandDashboardRepository: ComputerCountBrandDashboardRepository
	constructor({
		computerCountBrandDashboardRepository
	}: {
		computerCountBrandDashboardRepository: ComputerCountBrandDashboardRepository
	}) {
		super()
		this.computerCountBrandDashboardRepository = computerCountBrandDashboardRepository
	}

	/**
	 * Ejecuta la lógica para obtener los datos del dashboard.
	 * @param criteria Criterios de filtrado y ordenamiento recibidos desde la API.
	 * @returns Una respuesta estructurada con los datos transformados, ordenados y paginados.
	 */
	async run(criteria: Criteria): Promise<ResponseService<ModelData>> {
		const mandatoryFilters = this.getMandatoryFilters(criteria)
		const enrichedCriteria = criteria.withFilters(mandatoryFilters)

		// Identificamos si el campo de orden es uno de los campos calculados en memoria
		const manualOrderFields = ['count', 'inUse', 'inAlmacen']
		const isManualOrder =
			manualOrderFields.includes(enrichedCriteria.order.orderBy.value) || !enrichedCriteria.hasOrder()

		// 1. Enriquecemos con los filtros obligatorios

		// 2. Si el orden es manual, enviamos al repositorio un criteria sin orden
		// para que la base de datos no intente procesar campos inexistentes/agregados
		const repoCriteria = isManualOrder
			? new Criteria(
					enrichedCriteria.filters,
					Order.none(),
					enrichedCriteria.pageSize,
					enrichedCriteria.pageNumber
				)
			: enrichedCriteria

		// 3. Obtenemos los datos brutos.
		// Se usa .withoutPagination() para obtener el universo total y poder ordenar correctamente en memoria.
		const { data, total } = await this.computerCountBrandDashboardRepository.run(repoCriteria.withoutPagination())

		// 4. Transformamos y aplicamos el ordenamiento manual si corresponde
		let transformedData = this.transformData(data)
		if (isManualOrder) {
			transformedData = this.applyManualSort(
				transformedData,
				enrichedCriteria.order.orderBy.value,
				enrichedCriteria.order.orderType.value
			)
		}

		// 5. Devolvemos la respuesta mapeada
		return this.response({
			data: transformedData,
			total,
			pageSize: enrichedCriteria.pageSize,
			pageNumber: enrichedCriteria.pageNumber || 1
		})
	}

	/**
	 * Genera los filtros obligatorios por reglas de negocio.
	 * 1. Siempre filtra por la categoría principal 'COMPUTER'.
	 * 2. Excluye equipos desincorporados a menos que el usuario pida explícitamente un estado.
	 */
	private getMandatoryFilters(criteria: Criteria): Filter[] {
		const filters = [
			new Filter(
				new FilterField('mainCategoryId'),
				new FilterOperator(Operator.EQUAL),
				new FilterValue(MainCategoryList.COMPUTER)
			)
		]

		if (!criteria.searchValueInArray('statusId')) {
			filters.push(
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
		return filters
	}

	/**
	 * Transforma los datos agregados por marca de Sequelize al formato de tabla de dashboard.
	 * Calcula los totales de 'En Uso' y 'En Almacén' basándose en el tipo de sitio.
	 */
	private transformData(data: AggregatedBrandData[]): ModelData[] {
		const result = data.flatMap(brand =>
			brand.model.map(model => {
				const { inAlmacen, inUse } = model.typeOfSite.reduce(
					(acc, site) => {
						if (site.name === TypeOfSiteOptionsByName.ALMACEN) {
							acc.inAlmacen += site.count
						} else {
							acc.inUse += site.count
						}
						return acc
					},
					{ inAlmacen: 0, inUse: 0 }
				)

				return {
					id: `${brand.name}-${model.name}-${model.category}`,
					name: model.name,
					category: model.category,
					brand: brand.name,
					count: model.count,
					inUse,
					inAlmacen,
					status: this.calculateStatus(inAlmacen, ComputerCountBrandDashboard.STOCK_THRESHOLD)
				}
			})
		)

		return result
	}

	/**
	 * Determina visualmente el estado del stock según el umbral definido.
	 */
	private calculateStatus(count: number, threshold: number): 'In Stock' | 'Low Stock' | 'Out of Stock' {
		if (count === 0 || count === undefined) {
			return 'Out of Stock'
		} else if (count < threshold) {
			return 'Low Stock'
		} else {
			return 'In Stock'
		}
	}

	/**
	 * Realiza un ordenamiento en memoria para campos que no existen directamente en la base de datos
	 * o que son producto de una suma/agregación post-query.
	 */
	private applyManualSort(data: ModelData[], orderBy: string, orderType: string): ModelData[] {
		const field = (['count', 'inUse', 'inAlmacen'].includes(orderBy) ? orderBy : 'count') as keyof Pick<
			ModelData,
			'count' | 'inUse' | 'inAlmacen'
		>
		const isAsc = orderType === OrderTypes.ASC

		return data.sort((a, b) => {
			const valueA = a[field]
			const valueB = b[field]

			if (valueA < valueB) return isAsc ? -1 : 1
			if (valueA > valueB) return isAsc ? 1 : -1
			return 0
		})
	}
}

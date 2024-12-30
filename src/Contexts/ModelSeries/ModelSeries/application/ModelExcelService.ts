import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { Order } from '../../../Shared/domain/criteria/Order'
import { Filter } from '../../../Shared/domain/criteria/Filter'
import { FilterField } from '../../../Shared/domain/criteria/FilterField'
import { FilterValue } from '../../../Shared/domain/criteria/FilterValue'
import { FilterOperator } from '../../../Shared/domain/criteria/FilterOperator'
import { type SearchByCriteriaQuery } from '../../../Shared/domain/SearchByCriteriaQuery'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelExcelService {
    constructor(private readonly repository: ModelSeriesRepository) { }
    async run(query: SearchByCriteriaQuery): Promise<{}> {

        // Recuperar los datos de la base de datos usando Sequelize
        const filters = query.filters.map((filter) => {
            return new Filter(
                new FilterField(filter.field),
                FilterOperator.fromValue(filter.operator),
                new FilterValue(filter.value))
        })
        const order = Order.fromValues(
            query.orderBy ?? 'categoryId',
            query.orderType
        )
        const criteria = new Criteria(new Filters(filters), order)

        return await this.repository.donwload(criteria)
    }

}

import { isSuperAdmin } from '../../Role/application/isSuperAdmin'
import { RoleId } from '../../Role/domain/RoleId'
import { SearchByCriteriaQuery } from '../../../Shared/domain/SearchByCriteriaQuery'
import { Filter } from '../../../Shared/domain/criteria/Filter'
import { FilterField } from '../../../Shared/domain/criteria/FilterField'
import { FilterOperator } from '../../../Shared/domain/criteria/FilterOperator'
import { FilterValue } from '../../../Shared/domain/criteria/FilterValue'
import { Order } from '../../../Shared/domain/criteria/Order'
import { Criteria } from '../../../Shared/domain/criteria/Criteria'
import { Filters } from '../../../Shared/domain/criteria/Filters'
import { type JwtPayloadUser } from '../../../Auth/domain/GenerateToken'
import { type UserPrimitivesOptional } from '../domain/User'
import { type UserRepository } from '../domain/UserRepository'

export class UserSearchByCriteria {
	constructor(private readonly userRepository: UserRepository) {}

	async run({
		user,
		query
	}: {
		user?: JwtPayloadUser
		query: SearchByCriteriaQuery
	}): Promise<UserPrimitivesOptional[]> {
		isSuperAdmin({ user })
		const filters = query.filters.map(filter => {
			return new Filter(
				new FilterField(filter.field),
				FilterOperator.fromValue(filter.operator),
				new FilterValue(filter.value)
			)
		})
		const order = Order.fromValues(query.orderBy, query.orderType)

		const criteria = new Criteria(new Filters(filters), order, query.limit, query.offset)

		const users = await this.userRepository
			.matching(criteria)
			// Se bloquea exponer los datos del usuario admin
			.then(res => res.filter(user => user.roleId !== RoleId.Options.ADMIN))
			// Se elimina la propiedad password, por alguna razon con sequelize
			.then(res =>
				res.map(user => {
					const { password, ...rest } = user
					return rest
				})
			)

		return users
	}
}

import { RolesModel } from './RolesSchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RoleRepository } from '../../domain/RoleRepository'
import { type RoleId } from '../../domain/RoleId'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type RoleDto } from '../../domain/Role.dto'

export class SequelizeRolesRepository extends CriteriaToSequelizeConverter implements RoleRepository {
	private readonly cacheKey: string = 'roles'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<RoleDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			criteria,
			cacheKey: this.cacheKey,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await RolesModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}
	async searchById(id: Primitives<RoleId>): Promise<RoleDto | null> {
		return (await RolesModel.findByPk(id)) ?? null
	}
}

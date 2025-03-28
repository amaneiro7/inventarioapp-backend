import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type RolePrimitives } from '../../domain/Role'
import { type RoleRepository } from '../../domain/RoleRepository'
import { RoleId } from '../../domain/RoleId'
import { RolesModel } from './RolesSchema'

export class SequelizeRolesRepository implements RoleRepository {
	private readonly cacheKey: string = 'roles'
	constructor(private readonly cache: CacheService) {}
	async searchById(id: Primitives<RoleId>): Promise<RolePrimitives | null> {
		return (await RolesModel.findByPk(id)) ?? null
	}

	async searchAll(): Promise<RolePrimitives[]> {
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			fetchFunction: async () => {
				return await RolesModel.findAll()
			}
		})
	}
}

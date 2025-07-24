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

/**
 * @class SequelizeRolesRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {RoleRepository}
 * @description Concrete implementation of the RoleRepository using Sequelize.
 * Handles data persistence for Role entities, including caching mechanisms.
 */
export class SequelizeRolesRepository extends CriteriaToSequelizeConverter implements RoleRepository {
	private readonly cacheKey: string = 'roles'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Role entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<RoleDto>>} A promise that resolves to a paginated response containing Role DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<RoleDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData<ResponseDB<RoleDto>>({
			criteria,
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			ex: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await RolesModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Role entity by its unique identifier.
	 * @param {Primitives<RoleId>} id - The ID of the Role to search for.
	 * @returns {Promise<RoleDto | null>} A promise that resolves to the Role DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<RoleId>): Promise<RoleDto | null> {
		return await this.cache.getCachedData<RoleDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const role = await RolesModel.findByPk(id)
				return role ? role.get({ plain: true }) : null
			}
		})
	}
}

import { Op } from 'sequelize'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { PermissionAssociation } from './PermissionAssociation'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { PermissionModel } from './PermissionSchema'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionRepository } from '../../domain/repository/PermissionRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type PermissionDto, type PermissionPrimitives } from '../../domain/entity/Permission.dto'
import { type PermissionId } from '../../domain/valueObject/PermissionId'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

/**
 * @class SequelizePermissionRepository
 * @extends SequelizeCriteriaConverter
 * @implements {PermissionRepository}
 * @description Concrete implementation of the `PermissionRepository` using Sequelize for data persistence.
 * It handles all database operations for the Permission entity and includes caching to improve performance.
 */
export class SequelizePermissionRepository
	extends SequelizeCriteriaConverter
	implements PermissionRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'permissions'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of permissions based on specified criteria.
	 * Caches the results to optimize performance for repeated queries.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<PermissionDto>>} A promise resolving to a paginated response of permission DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<PermissionDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = PermissionAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:lists:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<PermissionDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await PermissionModel.findAndCountAll({ ...finalOptions, distinct: true })
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * @method search
	 * @description Retrieves a paginated list of permissions based on specified criteria.
	 * Caches the results to optimize performance for repeated queries.
	 * @returns {Promise<PermissionDto[]>} A promise resolving to a paginated response of permission DTOs.
	 */
	async search(): Promise<PermissionDto[]> {
		const cacheKey = `${this.cacheKeyPrefix}:all`
		return this.cache.getCachedData<PermissionDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const permissions = await PermissionModel.findAll()
				return permissions.map(permission => permission.get({ plain: true }))
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single permission by its unique identifier.
	 * Caches the result for faster subsequent lookups.
	 * @param {string} id The ID of the permission to find.
	 * @returns {Promise<PermissionDto | null>} A promise resolving to the permission DTO if found, otherwise null.
	 */
	async findById(id: string): Promise<PermissionDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<PermissionDto | null>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const permission = await PermissionModel.findByPk(id)
				return permission ? permission.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple permissions by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and currently does not use caching.
	 * @param {string[]} ids An array of permission IDs to find.
	 * @returns {Promise<PermissionDto[]>} A promise resolving to an array of found permission DTOs.
	 * The array will be empty if no permissions match the given IDs.
	 */
	async findByIds(ids: string[]): Promise<PermissionDto[]> {
		return this.cache.getCachedData<PermissionDto[]>({
			cacheKey: `${this.cacheKeyPrefix}:ids:${ids.join(',')}`,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const permissions = await PermissionModel.findAll({
					where: {
						id: {
							[Op.in]: ids
						}
					},
					raw: true
				})
				return permissions as PermissionDto[]
			}
		})
	}

	/**
	 * @method findByName
	 * @description Retrieves a single brand by its name.
	 * Caches the result for faster subsequent lookups. It's crucial for validation.
	 * @param {string} name The name of the permission to find.
	 * @returns {Promise<PermissionDto | null>} A promise resolving to the permission DTO if found, otherwise null.
	 */
	async findByName(name: string): Promise<PermissionDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`
		return this.cache.getCachedData<PermissionDto | null>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const permission = await PermissionModel.findOne({ where: { name } })
				return permission ? permission.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a permission entity (creates or updates) to the database.
	 * After saving, it invalidates relevant cache entries to ensure data consistency.
	 * @param {PermissionPrimitives} payload The primitive permission data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails.
	 */
	async save(payload: PermissionPrimitives): Promise<void> {
		await PermissionModel.upsert(payload)
	}

	/**
	 * @method remove
	 * @description Deletes a permission from the database by its ID.
	 * After deletion, it invalidates relevant cache entries.
	 * @param {string} id The ID of the permission to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		await PermissionModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidatePermissionCache
	 * @description Invalidates all permissions-related cache entries.
	 * Implements PermissionCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<PermissionId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}

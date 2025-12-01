import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { PermissionGroupAssociation } from './PermissionGroupAssociation'
import { PermissionGroupModel } from './PermissionGroupSchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type PermissionGroupDto, type PermissionGroupPrimitives } from '../../domain/entity/PermissionGroup.dto'
import { type PermissionGroupRepository } from '../../domain/repository/PermissionGroupRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type PermissionGroupId } from '../../domain/valueObject/PermissionGroupId'
import { type PermissionGroupName } from '../../domain/valueObject/PermissionGroupName'
import { Op } from 'sequelize'

/**
 * @class SequelizePermissionGroupRepository
 * @extends SequelizeCriteriaConverter
 * @implements {PermissionGroupRepository}
 * @description Concrete implementation of the `PermissionGroupRepository` using Sequelize.
 */
export class SequelizePermissionGroupRepository
	extends SequelizeCriteriaConverter
	implements PermissionGroupRepository
{
	private readonly cacheKeyPrefix = 'permissionGroups'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of permission groups based on specified criteria.
	 * Caches the results to optimize performance for repeated queries.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<PermissionGroupDto>>} A promise resolving to a paginated response of permission group DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<PermissionGroupDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = PermissionGroupAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<PermissionGroupDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await PermissionGroupModel.findAndCountAll({ ...finalOptions, distinct: true })
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as unknown as ResponseDB<PermissionGroupDto>
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single permission group by its unique identifier.
	 * Caches the result for faster subsequent lookups.
	 * @param {Primitives<PermissionGroupId>} id The ID of the permission group to find.
	 * @returns {Promise<PermissionGroupDto | null>} A promise resolving to the permission group DTO if found, otherwise null.
	 */
	async findById(id: Primitives<PermissionGroupId>): Promise<PermissionGroupDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<PermissionGroupDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const permissionGroup = await PermissionGroupModel.findByPk(id, {
					include: [
						{
							association: 'permissions',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})

				if (!permissionGroup) {
					return null
				}

				return permissionGroup.get({ plain: true }) as unknown as PermissionGroupDto
			}
		})
	}

	/**
	 * @method findByName
	 * @description Retrieves a single permission group by its unique name.
	 * Caches the result for faster subsequent lookups.
	 * @param {Primitives<PermissionGroupName>} name The name of the permission group to find.
	 * @returns {Promise<PermissionGroupDto | null>} A promise resolving to the permission group DTO if found, otherwise null.
	 */
	async findByName(name: Primitives<PermissionGroupName>): Promise<PermissionGroupDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`
		return this.cache.getCachedData<PermissionGroupDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const permissionGroup = await PermissionGroupModel.findOne({
					where: { name },
					include: [
						{
							association: 'permissions',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})

				if (!permissionGroup) {
					return null
				}

				return permissionGroup.get({ plain: true }) as unknown as PermissionGroupDto
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple permissions groups by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of permission group IDs to find.
	 * @returns {Promise<PermissionGroupDto[]>} A promise resolving to an array of found permission group DTOs.
	 */
	async findByIds(ids: string[]): Promise<PermissionGroupDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<PermissionGroupDto[]>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const permissionGroups = await PermissionGroupModel.findAll({
					where: { id: { [Op.in]: sortedIds } },
					include: [
						{
							association: 'permissions',
							attributes: ['id'],
							through: { attributes: [] }
						}
					]
				})
				return permissionGroups.map(group => group.get({ plain: true })) as PermissionGroupDto[]
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a permission group entity (creates or updates) and its associated permissions to the database.
	 * After saving, it invalidates relevant cache entries to ensure data consistency.
	 * @param {PermissionGroupPrimitives} payload The primitive permission group data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails.
	 */
	async save(payload: PermissionGroupPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { permissions, ...restPayload } = payload
			const [groupInstance] = await PermissionGroupModel.upsert(restPayload, { transaction, returning: true })

			if (groupInstance) {
				await groupInstance.setPermissions(permissions, { transaction })
			}

			await transaction.commit()
			await this.invalidateCache(payload.id, payload.name)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving permission group: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	/**
	 * @method remove
	 * @description Deletes a permission group from the database by its ID.
	 * After deletion, it invalidates relevant cache entries.
	 * @param {Primitives<PermissionGroupId>} id The ID of the permission group to remove.
	 */
	async remove(id: Primitives<PermissionGroupId>): Promise<void> {
		const groupToRemove = await PermissionGroupModel.findByPk(id, { attributes: ['name'] })
		const groupName = groupToRemove?.name

		await PermissionGroupModel.destroy({ where: { id } })

		if (groupName) {
			await this.invalidateCache(id, groupName)
		}
	}

	/**
	 * @private
	 * @method invalidateCache
	 * @description Invalidates all relevant cache entries for a given permission group.
	 * @param {string} id The ID of the permission group.
	 * @param {string} name The name of the permission group.
	 */
	private async invalidateCache(id: string, name: string): Promise<void> {
		const cacheKeysToRemove: string[] = [`${this.cacheKeyPrefix}*`, `${this.cacheKeyPrefix}:id:${id}`]
		if (name) {
			cacheKeysToRemove.push(`${this.cacheKeyPrefix}:name:${name}`)
		}
		await Promise.all(cacheKeysToRemove.map(async key => this.cache.removeCachedData({ cacheKey: key })))
	}
}

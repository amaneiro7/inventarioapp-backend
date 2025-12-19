import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { AccessPolicyAssociation } from './AccesspolicyAssociation'
import { AccessPolicyModel } from './AccessPolicySchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type AccessPolicyDto, type AccessPolicyPrimitives } from '../../domain/entity/AccessPolicy.dto'
import { type AccessPolicyRepository } from '../../domain/repository/AccessPolicyRepository'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type AccessPolicyName } from '../../domain/valueObject/AccessPolicyName'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

/**
 * @class SequelizeAccessPolicyRepository
 * @extends SequelizeCriteriaConverter
 * @implements {AccessPolicyRepository}
 * @description Concrete implementation of the `AccessPolicyRepository` using Sequelize for data persistence.
 * It handles all database operations for the AccessPolicy entity and includes caching to improve performance.
 */
export class SequelizeAccessPolicyRepository extends SequelizeCriteriaConverter implements AccessPolicyRepository {
	private readonly cacheKeyPrefix = 'accessPolicies'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}
	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of access policies based on specified criteria.
	 * Caches the results to optimize performance for repeated queries.
	 * @param {Criteria} criteria The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<AccessPolicyDto>>} A promise resolving to a paginated response of access policy DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<AccessPolicyDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = AccessPolicyAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<AccessPolicyDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				// Añadir `distinct: true` es crucial para que `findAndCountAll` devuelva un conteo correcto
				// cuando se usan `include` que generan JOINs con relaciones de muchos a muchos.
				// Esto asegura que se cuenten las filas del modelo principal (AccessPolicyModel) de forma única.
				const { count, rows } = await AccessPolicyModel.findAndCountAll({ ...finalOptions, distinct: true })
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as unknown as ResponseDB<AccessPolicyDto>
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single access policy by its unique identifier.
	 * Caches the result for faster subsequent lookups.
	 * @param {string} id The ID of the access policy to find.
	 * @returns {Promise<AccessPolicyDto | null>} A promise resolving to the access policy DTO if found, otherwise null.
	 */
	async findById(id: string): Promise<AccessPolicyDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`
		return this.cache.getCachedData<AccessPolicyDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const accessPolicy = await AccessPolicyModel.findByPk(id, {
					include: [
						{
							association: 'permissionsGroups',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				if (!accessPolicy) {
					return null
				}
				return accessPolicy.get({ plain: true }) as unknown as AccessPolicyDto
			}
		})
	}

	/**
	 * @method findByName
	 * @description Retrieves a single access policy by its unique identifier.
	 * Caches the result for faster subsequent lookups.
	 * @param {string} id The ID of the access policy to find.
	 * @returns {Promise<AccessPolicyDto | null>} A promise resolving to the access policy DTO if found, otherwise null.
	 */
	async findByName(name: Primitives<AccessPolicyName>): Promise<AccessPolicyDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`
		return this.cache.getCachedData<AccessPolicyDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const accessPolicy = await AccessPolicyModel.findOne({
					where: { name },
					include: [
						{
							association: 'permissionsGroups',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				if (!accessPolicy) {
					return null
				}
				return accessPolicy.get({ plain: true }) as unknown as AccessPolicyDto
			}
		})
	}

	/**
	 * @method search
	 * @description Retrieves a list of access policies based on specified criteria, without pagination.
	 * Caches the results to optimize performance for repeated queries.
	 * @param {Criteria} criteria The criteria for filtering and sorting.
	 * @returns {Promise<AccessPolicyDto[]>} A promise resolving to a list of access policy DTOs.
	 */
	async search(criteria: Criteria): Promise<AccessPolicyDto[]> {
		const sequelizeOptions = this.convert(criteria)
		sequelizeOptions.include = [
			{
				association: 'permissionsGroups',
				attributes: ['id', 'name'],
				through: { attributes: [] }
			}
		]
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<AccessPolicyDto[]>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const rows = await AccessPolicyModel.findAll(sequelizeOptions)
				return rows.map(row => row.get({ plain: true })) as unknown as AccessPolicyDto[]
			}
		})
	}

	/**
	 * @method save
	 * @description Saves an access policy entity (creates or updates) to the database.
	 * After saving, it invalidates relevant cache entries to ensure data consistency.
	 * @param {AccessPolicyPrimitives} payload The primitive access policy data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 * @throws {Error} If the save operation fails.
	 */
	async save(payload: AccessPolicyPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { permissionsGroups, ...restPayload } = payload
			const [accessPolicyInstance] = await AccessPolicyModel.upsert(restPayload, { transaction, returning: true })
			if (accessPolicyInstance) {
				await accessPolicyInstance.setPermissionsGroups(permissionsGroups, { transaction })
			}
			await transaction.commit()
			await this.invalidateAccessPolicyCache(payload.id)
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving access policy: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	/**
	 * @method remove
	 * @description Deletes an access policy from the database by its ID.
	 * After deletion, it invalidates relevant cache entries.
	 * @param {string} id The ID of the access policy to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		const rowCount = await AccessPolicyModel.destroy({ where: { id } })

		// Invalidate cache to reflect deletion
		if (rowCount > 0) {
			await this.invalidateAccessPolicyCache(id)
		}
	}

	/**
	 * @private
	 * @method invalidateAccessPolicyCache
	 * @description Invalidates all relevant cache entries for a given access policy.
	 * @param {string} id The ID of the access policy.
	 */
	private async invalidateAccessPolicyCache(id: string): Promise<void> {
		const cacheKeysToRemove: string[] = [`${this.cacheKeyPrefix}:*`, `${this.cacheKeyPrefix}:id:${id}`]
		await Promise.all(cacheKeysToRemove.map(async key => this.cache.removeCachedData({ cacheKey: key })))
	}
}

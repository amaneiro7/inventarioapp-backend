import { UserPrimitivesOptional, type UserPrimitives } from '../../../domain/User'
import { UserModel } from './UserSchema'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { UsersAssociation } from './UsersAssociation'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type UserRepository } from '../../../domain/UserRepository'
import { type UserId } from '../../../domain/UserId'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'

/**
 * @class SequelizeUserRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {UserRepository}
 * @description Concrete implementation of the UserRepository using Sequelize.
 * Handles data persistence for User entities, including caching mechanisms and refresh token JTI management.
 */
export class SequelizeUserRepository extends CriteriaToSequelizeConverter implements UserRepository {
	private readonly cacheKey: string = 'users'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of User entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<UserPrimitivesOptional>>} A promise that resolves to a paginated response containing User DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<UserPrimitivesOptional>> {
		const options = this.convert(criteria)
		const opt = UsersAssociation.converFilter(criteria, options)

		return await this.cache.getCachedData<ResponseDB<UserPrimitivesOptional>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await UserModel.findAndCountAll(opt)

				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				}
			}
		})
	}

	/**
	 * @method searchByEmail
	 * @description Retrieves a single User entity by its email address.
	 * Utilizes caching for direct email lookups.
	 * @param {string} userEmail - The email address of the User to search for.
	 * @returns {Promise<UserPrimitives | null>} A promise that resolves to the User DTO if found, or null otherwise.
	 */
	async searchByEmail(userEmail: string): Promise<UserPrimitives | null> {
		return await this.cache.getCachedData<UserPrimitives | null>({
			cacheKey: `${this.cacheKey}:email:${userEmail}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findOne({
					where: { email: userEmail },
					include: ['role']
				})
				const plainUser = user ? user.get({ plain: true }) : null
				return plainUser
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single User entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<UserId>} id - The ID of the User to search for.
	 * @returns {Promise<UserPrimitives | null>} A promise that resolves to the User DTO if found, or null otherwise.
	 */
	async searchById(id: Primitives<UserId>): Promise<UserPrimitives | null> {
		return await this.cache.getCachedData<UserPrimitives | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findByPk(id, {
					include: ['role']
				})
				const plainUser = user ? user.get({ plain: true }) : null
				return plainUser
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a User entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {UserPrimitives} payload - The User data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: UserPrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await UserModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
		if (payload.email) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:email:${payload.email}` })
		}
	}

	/**
	 * @method delete
	 * @description Deletes a User entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<UserId>} id - The ID of the User to delete.
	 * @returns {Promise<void>} A promise that resolves when the delete operation is complete.
	 */
	async delete(id: Primitives<UserId>): Promise<void> {
		// Retrieve the user to get its email for cache invalidation
		const userToRemove = await UserModel.findByPk(id)

		await UserModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (userToRemove && userToRemove.email) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:email:${userToRemove.email}` })
		}
	}
}

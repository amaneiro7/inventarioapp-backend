import { type UserPrimitivesOptional, type UserPrimitives } from '../../domain/User'
import { UserModel } from './UserSchema'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { UsersAssociation } from './UsersAssociation'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type UserRepository } from '../../domain/UserRepository'
import { type UserId } from '../../domain/UserId'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { Op } from 'sequelize'

/**
 * @description Sequelize implementation of the UserRepository.
 */
export class SequelizeUserRepository extends SequelizeCriteriaConverter implements UserRepository {
	private readonly cacheKeyPrefix = 'users'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<UserPrimitivesOptional>> {
		const options = this.convert(criteria)
		const opt = UsersAssociation.converFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<UserPrimitivesOptional>>({
			cacheKey,
			ttl: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await UserModel.findAndCountAll(opt)
				return { total: count, data: rows.map(row => row.get({ plain: true })) }
			}
		})
	}

	async searchByEmail(userEmail: string): Promise<UserPrimitives | null> {
		const cacheKey = `${this.cacheKeyPrefix}:email:${userEmail}`

		return this.cache.getCachedData<UserPrimitives | null>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const user = await UserModel.findOne({ where: { email: { [Op.iLike]: userEmail } }, include: ['role'] })
				return user ? user.get({ plain: true }) : null
			}
		})
	}

	async searchById(id: Primitives<UserId>): Promise<UserPrimitives | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<UserPrimitives | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findByPk(id, { include: ['role'] })
				return user ? user.get({ plain: true }) : null
			}
		})
	}

	async save(payload: UserPrimitives): Promise<void> {
		await UserModel.upsert(payload)
		await this.invalidateCache(payload)
	}

	async delete(id: Primitives<UserId>): Promise<void> {
		const userToRemove = await UserModel.findByPk(id)
		await UserModel.destroy({ where: { id } })
		if (userToRemove) {
			await this.invalidateCache(userToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(userData: Partial<UserPrimitives>): Promise<void> {
		const { id, email } = userData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (email) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:email:${email}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}

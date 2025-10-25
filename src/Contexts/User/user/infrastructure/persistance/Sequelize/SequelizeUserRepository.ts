import { UserModel } from './UserSchema'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
// import { UsersAssociation } from './UsersAssociation'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type UserRepository } from '../../../domain/Repository/UserRepository'
import { type UserId } from '../../../domain/valueObject/UserId' // Corrected path for UserId
// import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
// import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { UserDto, UserPrimitives } from '../../../domain/entity/User.dto'
import { EmployeeId } from '../../../../../employee/Employee/domain/valueObject/EmployeeId'

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

	// async searchAll(criteria: Criteria): Promise<ResponseDB<UserDto>> {
	// 	const options = this.convert(criteria)
	// 	const opt = UsersAssociation.converFilter(criteria, options)
	// 	const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

	// 	return this.cache.getCachedData<ResponseDB<UserDto>>({
	// 		cacheKey,
	// 		ttl: TimeTolive.TOO_SHORT,
	// 		fetchFunction: async () => {
	// 			const { count, rows } = await UserModel.findAndCountAll(opt)
	// 			// Ensure that 'password' is omitted from the returned data
	// 			const dataWithoutPassword = rows.map(row => {
	// 				const { password, ...rest } = row.get({ plain: true })
	// 				return rest
	// 			})
	// 			return { total: count, data: dataWithoutPassword }
	// 		}
	// 	})
	// }

	// Removed searchByEmail as User entity no longer has an email field.
	// async searchByEmail(userEmail: string): Promise<UserPrimitives | null> { ... }

	async searchByEmployeeId(employeeId: Primitives<EmployeeId>): Promise<UserDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:employeeId:${employeeId}`

		return this.cache.getCachedData<UserDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findOne({ where: { employeeId }, include: ['role', 'employee'] }) // Include employee
				return user ? user.get({ plain: true }) : null
			}
		})
	}

	async searchById(id: Primitives<UserId>): Promise<UserDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<UserDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findByPk(id, { include: ['role', 'employee'] }) // Include employee
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
		const { id, employeeId } = userData // Removed email
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (employeeId) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:employeeId:${employeeId}`) // Add employeeId cache key

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}

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
import { User, UserPrimitives } from '../../../domain/entity/User.dto'
import { EmployeeId } from '../../../../../employee/Employee/domain/valueObject/EmployeeId'
import { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { UsersAssociation } from './UsersAssociation'

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

	async searchAll(criteria: Criteria): Promise<ResponseDB<User>> {
		const options = this.convert(criteria)
		const opt = UsersAssociation.converFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<User>>({
			cacheKey,
			ttl: TimeTolive.TOO_SHORT,
			fetchFunction: async () => {
				const { count, rows } = await UserModel.findAndCountAll(opt)
				return { total: count, data: rows.map(row => row.get({ plain: true }) as User) } as ResponseDB<User>
			}
		})
	}

	// Removed searchByEmail as User entity no longer has an email field.
	// async searchByEmail(userEmail: string): Promise<UserPrimitives | null> { ... }

	async searchByEmployeeId(employeeId: Primitives<EmployeeId>): Promise<User | null> {
		const cacheKey = `${this.cacheKeyPrefix}:employeeId:${employeeId}`

		return this.cache.getCachedData<User | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findOne({ where: { employeeId }, include: ['role', 'employee'] }) // Include employee
				return user ? (user.get({ plain: true }) as User) : null
			}
		})
	}

	async searchById(id: Primitives<UserId>): Promise<User | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<User | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const user = await UserModel.findByPk(id, { include: ['role', 'employee'] }) // Include employee
				return user ? (user.get({ plain: true }) as User) : null
			}
		})
	}

	async save(payload: UserPrimitives): Promise<User> {
		// Paso 1: Realizar el upsert. La opción 'include' es ignorada por upsert, así que la quitamos.
		// 'returning: true' nos devuelve la instancia base (sin asociaciones).
		const [userInstance] = await UserModel.upsert(payload, { returning: true })

		// Paso 2: Invalidar la caché inmediatamente después de la escritura.
		await this.invalidateCache(payload)

		// Paso 3: Volver a buscar el usuario por su ID para cargar las asociaciones ('role' y 'employee').
		// Esto garantiza que devolvemos el objeto completo y actualizado.
		return (await this.searchById(userInstance.id)) as User
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

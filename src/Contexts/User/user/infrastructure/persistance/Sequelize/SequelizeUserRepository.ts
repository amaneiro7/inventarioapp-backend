import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type UserRepository } from '../../../domain/UserRepository'
import { type UserId } from '../../../domain/UserId'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { UserPrimitivesOptional, type UserPrimitives } from '../../../domain/User'

import { UserModel } from './UserSchema'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { UsersAssociation } from './UsersAssociation'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'

export class SequelizeUserRepository extends CriteriaToSequelizeConverter implements UserRepository {
	private readonly cacheKey: string = 'users'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<UserPrimitivesOptional>> {
		const options = this.convert(criteria)
		options.include = ['role']
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			fetchFunction: async () => {
				const { count, rows } = await UserModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchByEmail(userEmail: string): Promise<UserPrimitives | null> {
		return (
			(await UserModel.findOne({
				where: { email: userEmail },
				include: ['role']
			}).then(user => JSON.parse(JSON.stringify(user)))) ?? null
		)
	}

	async searchById(id: Primitives<UserId>): Promise<UserPrimitives | null> {
		return (
			(await UserModel.findByPk(id, {
				include: ['role']
			}).then(user => JSON.parse(JSON.stringify(user)))) ?? null
		)
	}

	async save(payload: UserPrimitives): Promise<void> {
		const { id } = payload
		const user = (await UserModel.findByPk(id)) ?? null
		if (user === null) {
			await UserModel.create({ ...payload })
		} else {
			user.set({ ...payload })
			await user.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async delete(id: Primitives<UserId>): Promise<void> {
		await UserModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}

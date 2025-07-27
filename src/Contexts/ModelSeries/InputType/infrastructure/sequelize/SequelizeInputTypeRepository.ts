import { InputTypeModel } from './InputTypeSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type InputTypeRepository } from '../../domain/InputTypeRepository'
import { type InputTypeDto } from '../../domain/InputType.dto'
import { type InputTypeId } from '../../domain/InputTypeId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'

/**
 * @description Sequelize implementation of the InputTypeRepository.
 */
export class SequelizeInputTypeRepository extends SequelizeCriteriaConverter implements InputTypeRepository {
	private readonly cacheKeyPrefix = 'inputTypes'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<InputTypeDto>> {
		const options = this.convert(criteria)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<InputTypeDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await InputTypeModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count }
			}
		})
	}

	async searchById(id: Primitives<InputTypeId>): Promise<InputTypeDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<InputTypeDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const inputType = await InputTypeModel.findByPk(id)
				return inputType ? inputType.get({ plain: true }) : null
			}
		})
	}
}

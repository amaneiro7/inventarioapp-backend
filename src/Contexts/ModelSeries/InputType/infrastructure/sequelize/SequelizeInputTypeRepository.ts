import { InputTypeModel } from './InputTypeSchema'
import { type InputTypeRepository } from '../../domain/InputTypeRepository'
import { type InputTypeDto } from '../../domain/InputType.dto'
import { type InputTypeId } from '../../domain/InputTypeId'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeInputTypeRepository extends CriteriaToSequelizeConverter implements InputTypeRepository {
	private readonly cacheKey: string = 'inputTypes'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<InputTypeDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.TOO_LONG,
			fetchFunction: async () => {
				const { count, rows } = await InputTypeModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: Primitives<InputTypeId>): Promise<InputTypeDto | null> {
		return (await InputTypeModel.findByPk(id)) ?? null
	}
}

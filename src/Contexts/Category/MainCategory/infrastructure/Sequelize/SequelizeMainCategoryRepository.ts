import { MainCategoryModel } from './MainCategorySchema'
import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryRepository } from '../../domain/MainCategoryRepository'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type MainCategoryDto } from '../../domain/MainCategory.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeMainCategoryRepository
	extends CriteriaToSequelizeConverter
	implements MainCategoryRepository
{
	private readonly cacheKey: string = 'mainCategories'
	constructor(private readonly cache: CacheService) {
		super()
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<MainCategoryDto>> {
		const options = this.convert(criteria)
		options.include = [
			{
				include: ['category']
			}
		]
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria: criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await MainCategoryModel.findAndCountAll(
					options
				)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(
		id: Primitives<MainCategoryId>
	): Promise<MainCategoryDto | null> {
		return (await MainCategoryModel.findByPk(id)) ?? null
	}
}

import { MainCategoryModel } from './MainCategorySchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type MainCategoryPrimitives } from '../../domain/MainCategory'
import { type MainCategoryId } from '../../domain/MainCategoryId'
import { type MainCategoryRepository } from '../../domain/MainCategoryRepository'

export class SequelizeMainCategoryRepository implements MainCategoryRepository {
	private readonly cacheKey: string = 'mainCategories'
	constructor(private readonly cache: CacheService) {}

	async searchAll(): Promise<MainCategoryPrimitives[]> {
		return await this.cache.getCachedData(this.cacheKey, async () => {
			return await MainCategoryModel.findAll({
				include: ['category'],
				order: [['name', 'ASC']]
			})
		})
	}

	async searchById(
		id: Primitives<MainCategoryId>
	): Promise<MainCategoryPrimitives | null> {
		return (await MainCategoryModel.findByPk(id)) ?? null
	}
}

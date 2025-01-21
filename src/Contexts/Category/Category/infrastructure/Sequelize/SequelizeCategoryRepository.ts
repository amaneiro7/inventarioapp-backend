import { CategoryModel } from './CategorySchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryPrimitives } from '../../domain/Category'
import { type CategoryId } from '../../domain/CategoryId'
import { type CategoryName } from '../../domain/CategoryName'
import { type CategoryRepository } from '../../domain/CategoryRepository'

export class SequelizeCategoryRepository implements CategoryRepository {
	private readonly cacheKey: string = 'categories'
	constructor(private readonly cache: CacheService) {}
	async searchAll(): Promise<CategoryPrimitives[]> {
		return await this.cache.getCachedData(this.cacheKey, async () => {
			return await CategoryModel.findAll({
				include: ['mainCategory'],
				order: [['name', 'ASC']]
			})
		})
	}

	async searchById(
		id: Primitives<CategoryId>
	): Promise<CategoryPrimitives | null> {
		return (await CategoryModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<CategoryName>
	): Promise<CategoryPrimitives | null> {
		return (await CategoryModel.findOne({ where: { name } })) ?? null
	}
}

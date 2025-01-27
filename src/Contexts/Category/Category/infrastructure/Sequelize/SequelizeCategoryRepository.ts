import { CategoryModel } from './CategorySchema'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CategoryId } from '../../domain/CategoryId'
import { type CategoryName } from '../../domain/CategoryName'
import { type CategoryRepository } from '../../domain/CategoryRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { ResponseDB } from '../../../../Shared/domain/ResponseType'
import { CategoryDto } from '../../domain/Category.dto'

export class SequelizeCategoryRepository
	extends SequelizeCriteriaConverter
	implements CategoryRepository
{
	private readonly cacheKey: string = 'categories'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<CategoryDto>> {
		const options = this.convert(criteria)
		options.include = ['mainCategory']
		const { count, rows } = await CategoryModel.findAndCountAll(options)

		return {
			data: rows,
			total: count
		}
	}

	async searchById(id: Primitives<CategoryId>): Promise<CategoryDto | null> {
		return (await CategoryModel.findByPk(id)) ?? null
	}

	async searchByName(
		name: Primitives<CategoryName>
	): Promise<CategoryDto | null> {
		return (await CategoryModel.findOne({ where: { name } })) ?? null
	}
}

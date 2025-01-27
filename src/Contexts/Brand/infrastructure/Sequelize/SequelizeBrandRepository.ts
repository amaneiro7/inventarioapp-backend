import { type BrandRepository } from '../../domain/BrandRepository'
import { type CacheService } from '../../../Shared/domain/CacheService'
import { type BrandDto } from '../../domain/Brand.dto'
import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { BrandModel } from './BrandSchema'
import { SequelizeCriteriaConverter } from '../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'

export class SequelizeBrandRepository
	extends SequelizeCriteriaConverter
	implements BrandRepository
{
	private readonly cacheKey: string = 'brands'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(
		criteria: Criteria
	): Promise<{ total: number; data: BrandDto[] }> {
		const options = this.convert(criteria)

		const { count, rows } = await BrandModel.findAndCountAll(options)

		return {
			total: count,
			data: rows
		}
	}

	async searchById(id: string): Promise<BrandDto | null> {
		return (await BrandModel.findByPk(id)) ?? null
	}

	async searchByName(name: string): Promise<BrandDto | null> {
		return (await BrandModel.findOne({ where: { name } })) ?? null
	}

	async save(payload: BrandDto): Promise<void> {
		const { id } = payload
		const brand = (await BrandModel.findByPk(id)) ?? null
		if (brand === null) {
			await BrandModel.create({ ...payload })
		} else {
			brand.set({ ...payload })
			await brand.save()
		}
		await this.cache.removeCachedData(this.cacheKey)
		// await this.searchAll()
	}

	async remove(id: string): Promise<void> {
		await BrandModel.destroy({ where: { id } })
		await this.cache.removeCachedData(this.cacheKey)
		// await this.searchAll()
	}
}

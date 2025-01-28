import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { CriteriaToSequelizeConverter } from '../../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import {
	type ProcessorDto,
	type ProcessorPrimitives
} from '../../domain/Processor.dto'
import { type ProcessorNumberModel } from '../../domain/ProcessorNumberModel'
import { type ProcessorRepository } from '../../domain/ProcessorRepository'
import { ProcessorModel } from './ProcessorSchema'

export class SequelizeProcessorRepository
	extends CriteriaToSequelizeConverter
	implements ProcessorRepository
{
	private readonly cacheKey: string = 'processors'
	constructor(private readonly cache: CacheService) {
		super()
	}
	async searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorDto>> {
		const options = this.convert(criteria)
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await ProcessorModel.findAndCountAll(
					options
				)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: string): Promise<ProcessorDto | null> {
		return (await ProcessorModel.findByPk(id)) ?? null
	}

	async searchByNumberModel(
		numberModel: Primitives<ProcessorNumberModel>
	): Promise<ProcessorDto | null> {
		return (
			(await ProcessorModel.findOne({ where: { numberModel } })) ?? null
		)
	}

	async save(payload: ProcessorPrimitives): Promise<void> {
		const { id } = payload
		const processor = (await ProcessorModel.findByPk(id)) ?? null
		if (processor === null) {
			await ProcessorModel.create({ ...payload })
		} else {
			processor.set({ ...payload })
			await processor.save()
		}
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async remove(id: string): Promise<void> {
		await ProcessorModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}
}

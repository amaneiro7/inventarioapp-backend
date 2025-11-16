import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { ProcessorModel } from './ProcessorSchema'
import { type CacheService } from '../../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { type ProcessorDto, type ProcessorPrimitives } from '../../domain/Processor.dto'
import { type ProcessorNumberModel } from '../../domain/ProcessorNumberModel'
import { type ProcessorRepository } from '../../domain/ProcessorRepository'
import { ProcessorAssociation } from './ProcessorAssociation'

/**
 * @description Sequelize implementation of the ProcessorRepository.
 */
export class SequelizeProcessorRepository extends SequelizeCriteriaConverter implements ProcessorRepository {
	private readonly cacheKeyPrefix = 'processors'
	private readonly cache: CacheService

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorDto>> {
		const sequelizeOptions = this.convert(criteria)
		const finalOptions = ProcessorAssociation.convertFilter(criteria, sequelizeOptions)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<ProcessorDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await ProcessorModel.findAndCountAll(finalOptions)
				return { total: count, data: rows.map(row => row.get({ plain: true })) }
			}
		})
	}

	async findById(id: string): Promise<ProcessorDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<ProcessorDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processor = await ProcessorModel.findByPk(id)
				return processor ? processor.get({ plain: true }) : null
			}
		})
	}

	async searchByNumberModel(numberModel: Primitives<ProcessorNumberModel>): Promise<ProcessorDto | null> {
		const cacheKey = `${this.cacheKeyPrefix}:numberModel:${numberModel}`

		return this.cache.getCachedData<ProcessorDto | null>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const processor = await ProcessorModel.findOne({ where: { numberModel } })
				return processor ? processor.get({ plain: true }) : null
			}
		})
	}

	async save(payload: ProcessorPrimitives): Promise<void> {
		await ProcessorModel.upsert(payload)
		await this.invalidateCache(payload)
	}

	async remove(id: string): Promise<void> {
		const processorToRemove = await ProcessorModel.findByPk(id)
		await ProcessorModel.destroy({ where: { id } })
		if (processorToRemove) {
			await this.invalidateCache(processorToRemove.get({ plain: true }))
		}
	}

	private async invalidateCache(processorData: Partial<ProcessorDto>): Promise<void> {
		const { id, numberModel } = processorData
		const cacheKeysToRemove = [`${this.cacheKeyPrefix}*`]
		if (id) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:id:${id}`)
		if (numberModel) cacheKeysToRemove.push(`${this.cacheKeyPrefix}:numberModel:${numberModel}`)

		await Promise.all(cacheKeysToRemove.map(key => this.cache.removeCachedData({ cacheKey: key })))
	}
}

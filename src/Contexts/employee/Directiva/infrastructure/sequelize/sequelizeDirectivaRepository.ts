import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { DirectivaModel } from './DirectivaSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type DirectivaCacheInvalidator } from '../../domain/repository/DirectivaCacheInvalidator'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartmentName } from '../../../IDepartment/DepartmentName'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DirectivaDto, type DirectivaPrimitives } from '../../domain/entity/Directiva.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type DirectivaRepository } from '../../domain/repository/DirectivaRepository'
import { type DirectivaId } from '../../domain/valueObject/DirectivaId'

/**
 * @description Concrete implementation of the DirectivaRepository using Sequelize.
 */
export class SequelizeDirectivaRepository
	extends SequelizeCriteriaConverter
	implements DirectivaRepository, DirectivaCacheInvalidator
{
	private readonly cacheKeyPrefix = 'directiva'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DirectivaDto>> {
		const options = this.convert(criteria)

		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<DirectivaDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await DirectivaModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<DirectivaDto>
			}
		})
	}

	async findById(id: Primitives<DirectivaId>): Promise<Nullable<DirectivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<DirectivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const directiva = await DirectivaModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return directiva ? (directiva.get({ plain: true }) as DirectivaDto) : null
			}
		})
	}

	async findByName(name: Primitives<DepartmentName>): Promise<Nullable<DirectivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<DirectivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const directiva = await DirectivaModel.findOne({ where: { name } })
				return directiva ? (directiva.get({ plain: true }) as DirectivaDto) : null
			}
		})
	}

	async save(payload: DirectivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [directivaInstance] = await DirectivaModel.upsert(restPayload, { transaction, returning: true })

			if (cargos && cargos.length > 0) {
				await directivaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await directivaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Directiva: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<DirectivaId>): Promise<void> {
		await DirectivaModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateLocationCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements LocationCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<DirectivaId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}

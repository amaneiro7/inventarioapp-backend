import { Op } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { VicepresidenciaModel } from './VicepresidenciaSchema'
import { VicepresidenciaAssociation } from './VicepresidenciaAssociation'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type VicepresidenciaDto, type VicepresidenciaPrimitives } from '../../domain/entity/Vicepresidencia.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type VicepresidenciaRepository } from '../../domain/repository/VicepresidenciaRepository'
import { type VicepresidenciaId } from '../../domain/valueObject/VicepresidenciaId'
import { type VicepresidenciaName } from '../../domain/valueObject/VicepresidenciaName'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

/**
 * @description Concrete implementation of the VicepresidenciaRepository using Sequelize.
 */
export class SequelizeVicepresidenciaRepository
	extends SequelizeCriteriaConverter
	implements VicepresidenciaRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'vicepresidencia'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaDto>> {
		const options = this.convert(criteria)
		const opt = VicepresidenciaAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<VicepresidenciaDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<VicepresidenciaDto>
			}
		})
	}

	async findById(id: Primitives<VicepresidenciaId>): Promise<Nullable<VicepresidenciaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<VicepresidenciaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidencia = await VicepresidenciaModel.findByPk(id, {
					include: [
						{
							association: 'vicepresidenciaEjecutiva',
							attributes: ['id', 'name'],
							include: [
								{
									association: 'directiva',
									attributes: ['id', 'name']
								}
							]
						},
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return vicepresidencia ? (vicepresidencia.get({ plain: true }) as VicepresidenciaDto) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple vicepresidencias by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<VicepresidenciaDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<VicepresidenciaDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<VicepresidenciaDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const vicepresidencias = await VicepresidenciaModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return vicepresidencias.map(cargo => cargo.get({ plain: true })) as VicepresidenciaDto[]
			}
		})
	}

	async findByName(name: Primitives<VicepresidenciaName>): Promise<Nullable<VicepresidenciaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<VicepresidenciaDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const vicepresidencia = await VicepresidenciaModel.findOne({ where: { name } })
				return vicepresidencia ? (vicepresidencia.get({ plain: true }) as VicepresidenciaDto) : null
			}
		})
	}

	async save(payload: VicepresidenciaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [vicepresidenciaInstance] = await VicepresidenciaModel.upsert(restPayload, {
				transaction,
				returning: true
			})

			if (cargos && cargos.length > 0) {
				await vicepresidenciaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await vicepresidenciaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Vicepresidencia: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<VicepresidenciaId>): Promise<void> {
		await VicepresidenciaModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateVicepresidenciaCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements VicepresidenciaCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<VicepresidenciaId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}

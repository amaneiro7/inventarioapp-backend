import { Op } from 'sequelize'
import { DepartamentoModel } from './DepartamentoSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { DepartamentoAssociation } from './DepartamentoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type DepartamentoName } from '../../domain/valueObject/DepartamentoName'
import { type DepartamentoId } from '../../domain/valueObject/DepartamentoId'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type DepartamentoDto, type DepartamentoPrimitives } from '../../domain/entity/Departamento.dto'
import { type DepartamentoRepository } from '../../domain/repository/DepartamentoRepository'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

/**
 * @description Concrete implementation of the DepartamentoRepository using Sequelize.
 */
export class SequelizeDepartamentoRepository
	extends SequelizeCriteriaConverter
	implements DepartamentoRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'departamento'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<DepartamentoDto>> {
		const options = this.convert(criteria)
		const opt = DepartamentoAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:lists:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<DepartamentoDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { count, rows } = await DepartamentoModel.findAndCountAll({ ...opt, distinct: true })
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<DepartamentoDto>
			}
		})
	}

	async findById(id: Primitives<DepartamentoId>): Promise<Nullable<DepartamentoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<DepartamentoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const departamento = await DepartamentoModel.findByPk(id, {
					include: [
						{
							association: 'vicepresidencia',
							attributes: ['id', 'name'],
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
								}
							]
						},
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
						// 'employee'
					]
				})
				return departamento ? (departamento.get({ plain: true }) as DepartamentoDto) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple departamentos by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<DepartamentoDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<DepartamentoDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<DepartamentoDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const departamentos = await DepartamentoModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return departamentos.map(cargo => cargo.get({ plain: true })) as DepartamentoDto[]
			}
		})
	}

	async findByName(name: Primitives<DepartamentoName>): Promise<Nullable<DepartamentoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<DepartamentoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const departamento = await DepartamentoModel.findOne({ where: { name } })
				return departamento ? (departamento.get({ plain: true }) as DepartamentoDto) : null
			}
		})
	}

	async save(payload: DepartamentoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [departamentoInstance] = await DepartamentoModel.upsert(restPayload, { transaction, returning: true })

			if (cargos && cargos.length > 0) {
				await departamentoInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await departamentoInstance.setCargos([], { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Departamento: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<DepartamentoId>): Promise<void> {
		await DepartamentoModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateDepartamentoCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements DepartamentoCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<DepartamentoId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}

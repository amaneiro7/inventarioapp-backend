import { Op } from 'sequelize'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { VicepresidenciaEjecutivaModel } from './VicepresidenciaEjecutivaSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'

import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaPrimitives
} from '../../domain/entity/VicepresidenciaEjecutiva.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type VicepresidenciaEjecutivaRepository } from '../../domain/repository/VicepresidenciaEjecutivaRepository'
import { type VicepresidenciaEjecutivaId } from '../../domain/valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaEjecutivaName } from '../../domain/valueObject/VicepresidenciaEjecutivaName'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

/**
 * @description Concrete implementation of the VicepresidenciaEjecutivaRepository using Sequelize.
 */
export class SequelizeVicepresidenciaEjecutivaRepository
	extends SequelizeCriteriaConverter
	implements VicepresidenciaEjecutivaRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'vicepresidenciaEjecutiva'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<VicepresidenciaEjecutivaDto>> {
		const options = this.convert(criteria)
		options.include = ['directiva']
		const cacheKey = `${this.cacheKeyPrefix}:lists:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<VicepresidenciaEjecutivaDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await VicepresidenciaEjecutivaModel.findAndCountAll(options)

				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<VicepresidenciaEjecutivaDto>
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple vicepresidenciasEjecutivas by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<VicepresidenciaEjecutivaDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<VicepresidenciaEjecutivaDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<VicepresidenciaEjecutivaDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const vicepresidenciasEjecutivas = await VicepresidenciaEjecutivaModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return vicepresidenciasEjecutivas.map(cargo =>
					cargo.get({ plain: true })
				) as VicepresidenciaEjecutivaDto[]
			}
		})
	}

	async findById(id: Primitives<VicepresidenciaEjecutivaId>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<VicepresidenciaEjecutivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidenciaEjecutiva = await VicepresidenciaEjecutivaModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						'employee'
					]
				})
				return vicepresidenciaEjecutiva
					? (vicepresidenciaEjecutiva.get({ plain: true }) as VicepresidenciaEjecutivaDto)
					: null
			}
		})
	}

	async findByName(name: Primitives<VicepresidenciaEjecutivaName>): Promise<Nullable<VicepresidenciaEjecutivaDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<VicepresidenciaEjecutivaDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const vicepresidenciaEjecutiva = await VicepresidenciaEjecutivaModel.findOne({ where: { name } })
				return vicepresidenciaEjecutiva
					? (vicepresidenciaEjecutiva.get({ plain: true }) as VicepresidenciaEjecutivaDto)
					: null
			}
		})
	}

	async save(payload: VicepresidenciaEjecutivaPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [vicepresidenciaEjecutivaInstance] = await VicepresidenciaEjecutivaModel.upsert(restPayload, {
				transaction,
				returning: true
			})

			if (cargos && cargos.length > 0) {
				await vicepresidenciaEjecutivaInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await vicepresidenciaEjecutivaInstance.setCargos([], { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new Error(
				`Error saving Vicepresidencia Ejecutiva: ${error instanceof Error ? error.message : String(error)}`
			)
		}
	}

	async remove(id: Primitives<VicepresidenciaEjecutivaId>): Promise<void> {
		await VicepresidenciaEjecutivaModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateVicepresidenciaEjecutivaCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements VicepresidenciaEjecutivaCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<VicepresidenciaEjecutivaId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}

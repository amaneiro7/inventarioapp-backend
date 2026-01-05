import { Op } from 'sequelize'
import { CargoModel } from './CargoSchema'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { CargoAssociation } from './CargoAssociation'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../../domain/valueObject/CargoId'
import { type CargoRepository } from '../../domain/repository/CargoRepository'
import { type CargoName } from '../../domain/valueObject/CargoName'
import { type CargoDto, type CargoPrimitives } from '../../domain/entity/Cargo.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type CargoCacheInvalidator } from '../../domain/repository/CargoCacheInvalidator'

/**
 * @description Concrete implementation of the CargoRepository using Sequelize.
 */
export class SequelizeCargoRepository
	extends SequelizeCriteriaConverter
	implements CargoRepository, CargoCacheInvalidator
{
	private readonly cacheKeyPrefix = 'cargos'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<CargoDto>> {
		const options = this.convert(criteria)
		const opt = CargoAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<CargoDto>>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await CargoModel.findAndCountAll(opt)
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<CargoDto>
			}
		})
	}

	async findById(id: Primitives<CargoId>): Promise<Nullable<CargoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<CargoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const cargo = await CargoModel.findByPk(id, {
					include: [
						{
							association: 'departamentos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						'employee'
					]
				})
				return cargo ? (cargo.get({ plain: true }) as CargoDto) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple cargos by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<CargoDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<CargoDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<CargoDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const cargos = await CargoModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return cargos.map(cargo => cargo.get({ plain: true })) as CargoDto[]
			}
		})
	}

	async findByName(name: Primitives<CargoName>): Promise<Nullable<CargoDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<CargoDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const cargo = await CargoModel.findOne({ where: { name } })
				return cargo ? (cargo.get({ plain: true }) as CargoDto) : null
			}
		})
	}

	async save(payload: CargoPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { departamentos, directivas, vicepresidenciasEjecutivas, vicepresidencias, ...restPayload } = payload

			const [cargoInstance] = await CargoModel.upsert(restPayload, { transaction, returning: true })

			if (departamentos) {
				await cargoInstance.setDepartamentos(departamentos, { transaction })
			}
			if (directivas) {
				await cargoInstance.setDirectivas(directivas, { transaction })
			}
			if (vicepresidenciasEjecutivas) {
				await cargoInstance.setVicepresidenciaEjecutivas(vicepresidenciasEjecutivas, { transaction })
			}
			if (vicepresidencias) {
				await cargoInstance.setVicepresidencias(vicepresidencias, { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new Error(`Error saving Cargo: ${error instanceof Error ? error.message : String(error)}`)
		}
	}

	async remove(id: Primitives<CargoId>): Promise<void> {
		await CargoModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateCargoCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements CargoCacheInvalidator interface.
	 */
	async invalidate(id?: Primitives<CargoId>): Promise<void> {
		await this.cacheInvalidator.invalidate(id)
	}
}

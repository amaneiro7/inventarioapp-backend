import { Op, QueryTypes } from 'sequelize'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { UnidadModel } from './UnidadSchema'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { InvalidArgumentError } from '../../../../Shared/domain/errors/ApiError'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type UnidadDto, type UnidadPrimitives } from '../../domain/entity/Unidad.dto'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type UnidadRepository } from '../../domain/repository/UnidadRepository'
import { type UnidadId } from '../../domain/valueObject/UnidadId'
import { type CodigoInterno } from '../../domain/valueObject/CodigoInterno'
import { type CentroDeCosto } from '../../domain/valueObject/CentroDeCosto'
import { type UnidadName } from '../../domain/valueObject/UnidadName'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'

/**
 * @description Concrete implementation of the UnidadRepository using Sequelize.
 */
export class SequelizeUnidadRepository
	extends SequelizeCriteriaConverter
	implements UnidadRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'unidad'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async searchAll(criteria: Criteria): Promise<ResponseDB<UnidadDto>> {
		const options = this.convert(criteria)

		const cacheKey = `${this.cacheKeyPrefix}:lists:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<UnidadDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await UnidadModel.findAndCountAll(options)
				return { data: rows.map(row => row.get({ plain: true })), total: count } as ResponseDB<UnidadDto>
			}
		})
	}

	async findById(id: Primitives<UnidadId>): Promise<Nullable<UnidadDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<UnidadDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const unidad = await UnidadModel.findByPk(id, {
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						},
						{
							association: 'parent',
							attributes: ['id', 'name']
						}
					]
				})
				return unidad ? (unidad.get({ plain: true }) as UnidadDto) : null
			}
		})
	}
	async findByCodigoInterno(code: Primitives<CodigoInterno>): Promise<Nullable<UnidadDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:codigoInterno:${code}`

		return this.cache.getCachedData<Nullable<UnidadDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const unidad = await UnidadModel.findOne({
					where: { codigoInterno: code },
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return unidad ? (unidad.get({ plain: true }) as UnidadDto) : null
			}
		})
	}
	async findByCentroDeCosto(costCenter: Primitives<CentroDeCosto>): Promise<Nullable<UnidadDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:centroDeCosto:${costCenter}`

		return this.cache.getCachedData<Nullable<UnidadDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const unidad = await UnidadModel.findOne({
					where: { centroDeCosto: costCenter },
					include: [
						{
							association: 'cargos',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return unidad ? (unidad.get({ plain: true }) as UnidadDto) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple Unidads by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<UnidadDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<UnidadDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<UnidadDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const unidads = await UnidadModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return unidads.map(unidad => unidad.get({ plain: true })) as UnidadDto[]
			}
		})
	}

	async findByName(name: Primitives<UnidadName>): Promise<Nullable<UnidadDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:name:${name}`

		return this.cache.getCachedData<Nullable<UnidadDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const unidad = await UnidadModel.findOne({ where: { name } })
				return unidad ? (unidad.get({ plain: true }) as UnidadDto) : null
			}
		})
	}

	async save(payload: UnidadPrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { cargos, ...restPayload } = payload

			const [unidadInstance] = await UnidadModel.upsert(restPayload, { transaction, returning: true })

			if (cargos && cargos.length > 0) {
				await unidadInstance.setCargos(cargos, { transaction })
			} else if (cargos && cargos.length === 0) {
				await unidadInstance.setCargos([], { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new InvalidArgumentError(
				`Error saving Unidad: ${error instanceof Error ? error.message : String(error)}`
			)
		}
	}

	async remove(id: Primitives<UnidadId>): Promise<void> {
		await UnidadModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateUnidadCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements UnidadCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<UnidadId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}

	/**
	 * Obtiene todas las unidades con su código jerárquico calculado dinámicamente (1.2.4)
	 */
	async getTree(): Promise<Array<UnidadDto & { codigo_hie: string }>> {
		const query = `
			WITH RECURSIVE unidad_hierarchy AS (
				-- Caso base: Unidades raíz (sin padre)
				SELECT 
					id, name, parent_id, tipo_unidad, range_level, centro_de_costo, codigo_interno, is_unit_active,
					CAST(ROW_NUMBER() OVER (ORDER BY name) AS TEXT) as codigo_hie
				FROM unidades
				WHERE parent_id IS NULL AND deleted_at IS NULL

				UNION ALL

				-- Paso recursivo: Unir hijos con padres
				SELECT 
					u.id, u.name, u.parent_id, u.tipo_unidad, u.range_level, u.centro_de_costo, u.codigo_interno, u.is_unit_active,
					uh.codigo_hie || '.' || CAST(ROW_NUMBER() OVER (PARTITION BY u.parent_id ORDER BY u.name) AS TEXT)
				FROM unidades u
				INNER JOIN unidad_hierarchy uh ON u.parent_id = uh.id
				WHERE u.deleted_at IS NULL
			)
			SELECT * FROM unidad_hierarchy ORDER BY codigo_hie;
		`

		const cacheKey = `${this.cacheKeyPrefix}:tree`

		return this.cache.getCachedData<Array<UnidadDto & { codigo_hie: string }>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const results = await sequelize.query(query, {
					type: QueryTypes.SELECT,
					raw: true
				})
				return results as Array<UnidadDto & { codigo_hie: string }>
			}
		})
	}
}

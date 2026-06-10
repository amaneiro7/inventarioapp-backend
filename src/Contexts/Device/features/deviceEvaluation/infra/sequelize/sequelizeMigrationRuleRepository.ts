import { Op } from 'sequelize'
import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { GenericCacheInvalidator } from '../../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { MigrationRuleModel } from './MigrationRuleSchema'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { InvalidArgumentError } from '../../../../../Shared/domain/errors/ApiError'
import { MigrationRuleAssociation } from './MigrationRuleAssociation'
import type { CacheService } from '../../../../../Shared/domain/CacheService'
import type { MigrationRuleRepository } from '../../domain/repository/MigrationRuleRepository'
import type { CacheInvalidator } from '../../../../../Shared/domain/repository/CacheInvalidator'
import type { ResponseDB } from '../../../../../Shared/domain/ResponseType'
import type { MigrationRuleDto, MigrationRulePrimitives } from '../../domain/entity/MigrationRule.dto'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import type { Nullable } from '../../../../../Shared/domain/Nullable'
import type { Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import type { MigrationRuleId } from '../../domain/valueObject/MigrationRuleId'

/**
 * @description Concrete implementation of the MigrationRuleRepository using Sequelize.
 */
export class SequelizeMigrationRuleRepository
	extends SequelizeCriteriaConverter
	implements MigrationRuleRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'migrationRule'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	async findByName(_name: string): Promise<Nullable<MigrationRuleDto>> {
		// MigrationRule no posee un campo 'name' en su esquema actual.
		// Se retorna null para cumplir con el contrato de la interfaz sin lanzar excepciones.
		return null
	}

	async findActiveRule(): Promise<Nullable<MigrationRuleDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:active`

		return this.cache.getCachedData<Nullable<MigrationRuleDto>>({
			cacheKey,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const migrationRule = await MigrationRuleModel.findOne({
					where: { isActive: true },
					include: [
						{
							association: 'approvedProcessor',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return migrationRule ? (migrationRule.get({ plain: true }) as MigrationRuleDto) : null
			}
		})
	}

	/**
	 * @method searchAll
	 * @description Recupera una lista paginada de reglas de migración basada en criterios,
	 * enriqueciendo cada registro con su jerarquía ascendente completa (full_chain).
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<MigrationRuleDto>> {
		const options = this.convert(criteria)
		const modelOptions = MigrationRuleAssociation.convertFilter(criteria, options)
		const cacheKey = `${this.cacheKeyPrefix}:lists:${criteria.hash()}`

		return this.cache.getCachedData<ResponseDB<MigrationRuleDto>>({
			cacheKey,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { rows, count } = await MigrationRuleModel.findAndCountAll(modelOptions)

				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<MigrationRuleDto>
			}
		})
	}

	async findById(id: Primitives<MigrationRuleId>): Promise<Nullable<MigrationRuleDto>> {
		const cacheKey = `${this.cacheKeyPrefix}:id:${id}`

		return this.cache.getCachedData<Nullable<MigrationRuleDto>>({
			cacheKey,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const migrationRule = await MigrationRuleModel.findByPk(id, {
					include: [
						{
							association: 'approvedProcessor',
							attributes: ['id', 'name'],
							through: { attributes: [] }
						}
					]
				})
				return migrationRule ? (migrationRule.get({ plain: true }) as MigrationRuleDto) : null
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple migrationRules by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {string[]} ids An array of cargo IDs to find.
	 * @returns {Promise<MigrationRuleDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: string[]): Promise<MigrationRuleDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKeyPrefix}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<MigrationRuleDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const migrationRules = await MigrationRuleModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return migrationRules.map(unidad => unidad.get({ plain: true })) as MigrationRuleDto[]
			}
		})
	}

	async save(payload: MigrationRulePrimitives): Promise<void> {
		const transaction = await sequelize.transaction()
		try {
			const { approvedProcessor, ...restPayload } = payload

			const [unidadInstance] = await MigrationRuleModel.upsert(restPayload, { transaction, returning: true })

			if (approvedProcessor) {
				await unidadInstance.setProcessors(approvedProcessor, { transaction })
			} else {
				await unidadInstance.setProcessors([], { transaction })
			}

			await transaction.commit()
		} catch (error) {
			await transaction.rollback()
			throw new InvalidArgumentError(
				`Error saving MigrationRule: ${error instanceof Error ? error.message : String(error)}`
			)
		}
	}

	async remove(id: Primitives<MigrationRuleId>): Promise<void> {
		await MigrationRuleModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateMigrationRuleCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements MigrationRuleCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<MigrationRuleId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}

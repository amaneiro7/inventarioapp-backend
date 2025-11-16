import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type StateDto } from '../../domain/State.dto'
import { type StateId } from '../../domain/StateId'
import { type StateRepository } from '../../domain/StateRepository'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { StateModel } from './StateSchema'
import { StateAssociation } from './StateAssociation'

/**
 * @class SequelizeStateRepository
 * @extends SequelizeCriteriaConverter
 * @implements {StateRepository}
 * @description Concrete implementation of the StateRepository using Sequelize.
 * Handles data persistence for State entities, including caching mechanisms.
 */
export class SequelizeStateRepository extends SequelizeCriteriaConverter implements StateRepository {
	private readonly cacheKey: string = 'states'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of State entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<StateDto>>} A promise that resolves to a paginated response containing State DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<StateDto>> {
		const options = StateAssociation.converFilter(criteria, this.convert(criteria))

		return await this.cache.getCachedData<ResponseDB<StateDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const { rows, count } = await StateModel.findAndCountAll(options)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<StateDto>
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single State entity by its unique identifier.
	 * Utilizes caching for direct ID lookups.
	 * @param {Primitives<StateId>} id - The ID of the State to search for.
	 * @returns {Promise<StateDto | null>} A promise that resolves to the State DTO if found, or null otherwise.
	 */
	async findById(id: Primitives<StateId>): Promise<StateDto | null> {
		return await this.cache.getCachedData<StateDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const state = await StateModel.findByPk(id)
				return state ? (state.get({ plain: true }) as StateDto) : null
			}
		})
	}
}

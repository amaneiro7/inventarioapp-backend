import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type CityId } from '../valueObject/CityId'
import { type CityDto, type CityParams } from '../entity/City.dto'

/**
 * Abstract class defining the contract for City data access.
 * Implementations will provide methods for saving, searching, and removing cities.
 */
export abstract class CityRepository implements GenericRepository<CityDto> {
	/**
	 * Saves a new city or updates an existing one.
	 * @param {CityParams} payload - The city data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract save(payload: CityParams): Promise<void>

	/**
	 * Searches for all cities based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<CityDto>>} A promise that resolves to a paginated response of city DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<CityDto>>

	/**
	 * Searches for a single city by its unique identifier.
	 * @param {Primitives<CityId>} id - The ID of the city to search for.
	 * @returns {Promise<CityDto | null>} A promise that resolves to the city DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<CityId>): Promise<CityDto | null>

	/**
	 * Searches for a single city by its name.
	 * @param {CityDto['name']} name - The name of the city to search for.
	 * @returns {Promise<Nullable<CityDto>>} A promise that resolves to the city DTO if found, or null otherwise.
	 */
	abstract findByName(name: CityDto['name']): Promise<Nullable<CityDto>>

	/**
	 * Removes a city by its unique identifier.
	 * @param {CityDto['id']} id - The ID of the city to remove.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract remove(id: CityDto['id']): Promise<void>
}

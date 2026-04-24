import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type GenericRepository } from '../../../../Shared/domain/GenericRepository'
import { type Nullable } from '../../../../Shared/domain/Nullable'
import { type ISPLinkId } from '../valueObject/ISPLinkId'
import { type ISPLinkDto, type ISPLinkParams } from '../entity/ISPLink.dto'

/**
 * Abstract class defining the contract for ISPLink data access.
 * Implementations will provide methods for saving, searching, and removing cities.
 */
export abstract class ISPLinkRepository implements GenericRepository<ISPLinkDto> {
	/**
	 * Saves a new ISPLink or updates an existing one.
	 * @param {ISPLinkParams} payload - The ISPLink data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract save(payload: ISPLinkParams): Promise<void>

	/**
	 * Searches for all ISPLinks based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<ISPLinkDto>>} A promise that resolves to a paginated response of ISPLink DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ISPLinkDto>>

	/**
	 * Searches for a single ISPLink by its unique identifier.
	 * @param {Primitives<ISPLinkId>} id - The ID of the ISPLink to search for.
	 * @returns {Promise<ISPLinkDto | null>} A promise that resolves to the ISPLink DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<ISPLinkId>): Promise<ISPLinkDto | null>

	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple ISPLinks by their IDs.
	 * @param {Array<ISPLinkId['value']>} ids The array of ISPLink IDs to search for.
	 * @returns {Promise<ISPLinkDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<ISPLinkId['value']>) => Promise<ISPLinkDto[]>

	/**
	 * Searches for a single ISPLink by its name.
	 * @param {ISPLinkDto['name']} name - The name of the ISPLink to search for.
	 * @returns {Promise<Nullable<ISPLinkDto>>} A promise that resolves to the ISPLink DTO if found, or null otherwise.
	 */
	abstract findByName(name: ISPLinkDto['name']): Promise<Nullable<ISPLinkDto>>

	/**
	 * Removes a city by its unique identifier.
	 * @param {ISPLinkDto['id']} id - The ID of the city to remove.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract remove(id: ISPLinkDto['id']): Promise<void>
}

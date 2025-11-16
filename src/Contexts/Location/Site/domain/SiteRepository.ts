import { type Criteria } from '../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../Shared/domain/ResponseType'
import { type SitePrimitives, type SiteDto } from './Site.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type SiteId } from './SiteId'

/**
 * Abstract class defining the contract for Site data access.
 * Implementations will provide methods for searching and saving sites.
 */
export abstract class SiteRepository {
	/**
	 * Searches for all sites based on the provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<SiteDto>>} A promise that resolves to a paginated response of site DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<SiteDto>>

	/**
	 * Saves a new site or updates an existing one.
	 * @param {SitePrimitives} payload - The site data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the operation is complete.
	 */
	abstract save(payload: SitePrimitives): Promise<void>

	/**
	 * Searches for a single site by its unique identifier.
	 * @param {Primitives<SiteId>} id - The ID of the site to search for.
	 * @returns {Promise<SiteDto | null>} A promise that resolves to the site DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<SiteId>): Promise<SiteDto | null>
}

import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { SiteDoesNotExistError } from '../../Site/domain/errors/SiteDoesNotExistError'
import { SiteId } from '../../Site/domain/valueObject/SiteId'
import { SiteRepository } from '../../Site/domain/repository/SiteRepository'
import { Location } from './Location'

/**
 * Represents the Site ID associated with a Location.
 * Extends SiteId and provides static methods for updating and ensuring site existence.
 */
export class LocationSite extends SiteId {
	/**
	 * Updates the site field of a Location entity.
	 * @param {{ repository: SiteRepository; site?: Primitives<SiteId>; entity: Location }} params - Parameters for updating the site.
	 * @param {SiteRepository} params.repository - The site repository for existence checks.
	 * @param {Primitives<SiteId>} [params.site] - The new site ID for the location (optional).
	 * @param {Location} params.entity - The Location entity to update.
	 * @returns {Promise<void>} A promise that resolves when the site is updated or no action is needed.
	 * @throws {SiteDoesNotExistError} If the new site ID does not exist.
	 */
	static async updateSiteField({
		repository,
		site,
		entity
	}: {
		repository: SiteRepository
		site?: Primitives<SiteId>
		entity: Location
	}): Promise<void> {
		if (site === undefined) {
			return
		}

		if (entity.siteValue === site) {
			return
		}

		await LocationSite.ensureSiteExit({ repository, site })
		// Actualiza el campo status de la entidad {@link Device} con el nuevo status
		entity.updateSite(site)
	}

	/**
	 * Ensures that a site exists in the repository.
	 * @param {{ repository: SiteRepository; site: Primitives<SiteId> }} params - Parameters for the existence check.
	 * @param {SiteRepository} params.repository - The site repository to perform the search.
	 * @param {Primitives<SiteId>} params.site - The site ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the site exists, or rejects with SiteDoesNotExistError.
	 * @throws {SiteDoesNotExistError} If the site does not exist.
	 */
	static async ensureSiteExit({
		repository,
		site
	}: {
		repository: SiteRepository
		site: Primitives<SiteId>
	}): Promise<void> {
		const isSiteExist = await repository.findById(new SiteId(site).value)

		if (isSiteExist === null) {
			throw new SiteDoesNotExistError(site)
		}
	}
}

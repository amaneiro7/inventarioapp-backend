import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { TypeOfSiteDoesNotExistError } from '../../TypeOfSite/domain/TypeOfSiteDoesNotExistError'
import { TypeOfSiteId } from '../../TypeOfSite/domain/TypeOfSiteId'
import { TypeOfSiteRepository } from '../../TypeOfSite/domain/TypeOfSiteRepository'
import { Location } from './Location'

/**
 * Represents the Type of Site ID associated with a Location.
 * Extends TypeOfSiteId and provides static methods for updating and ensuring type of site existence.
 */
export class LocationTypeOfSite extends TypeOfSiteId {
	/**
	 * Updates the type of site field of a Location entity.
	 * @param {{ repository: TypeOfSiteRepository; typeOfSite?: Primitives<TypeOfSiteId>; entity: Location }} params - Parameters for updating the type of site.
	 * @param {TypeOfSiteRepository} params.repository - The type of site repository for existence checks.
	 * @param {Primitives<TypeOfSiteId>} [params.typeOfSite] - The new type of site ID for the location (optional).
	 * @param {Location} params.entity - The Location entity to update.
	 * @returns {Promise<void>} A promise that resolves when the type of site is updated or no action is needed.
	 * @throws {TypeOfSiteDoesNotExistError} If the new type of site ID does not exist.
	 */
	static async updateTypeOfSiteField({
		repository,
		typeOfSite,
		entity
	}: {
		repository: TypeOfSiteRepository
		typeOfSite?: Primitives<TypeOfSiteId>
		entity: Location
	}): Promise<void> {
		if (typeOfSite === undefined) {
			return
		}

		if (entity.typeOfSiteValue === typeOfSite) {
			return
		}

		await LocationTypeOfSite.ensureTypeOfSiteExit({
			repository,
			typeOfSite
		})

		entity.updateTypeOfSite(typeOfSite)
	}

	/**
	 * Ensures that a type of site exists in the repository.
	 * @param {{ repository: TypeOfSiteRepository; typeOfSite: Primitives<TypeOfSiteId> }} params - Parameters for the existence check.
	 * @param {TypeOfSiteRepository} params.repository - The type of site repository to perform the search.
	 * @param {Primitives<TypeOfSiteId>} params.typeOfSite - The type of site ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the type of site exists, or rejects with TypeOfSiteDoesNotExistError.
	 * @throws {TypeOfSiteDoesNotExistError} If the type of site does not exist.
	 */
	static async ensureTypeOfSiteExit({
		repository,
		typeOfSite
	}: {
		repository: TypeOfSiteRepository
		typeOfSite: Primitives<TypeOfSiteId>
	}): Promise<void> {
		const isExist = await repository.searchById(new TypeOfSiteId(typeOfSite).value)

		if (isExist === null) {
			throw new TypeOfSiteDoesNotExistError(typeOfSite)
		}
	}
}

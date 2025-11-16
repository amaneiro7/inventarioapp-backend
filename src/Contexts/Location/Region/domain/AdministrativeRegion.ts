import { Region } from './Region'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { AdministrativeRegionId } from '../../AdministrativeRegion/domain/AdministrativeRegionId'
import { type AdministrativeRegionRepository } from '../../AdministrativeRegion/domain/AdministrativeRegionRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents the Administrative Region ID associated with a Region.
 * Extends AdministrativeRegionId and provides static methods for updating and ensuring administrative region existence.
 */
export class AdmRegionRegion extends AdministrativeRegionId {
	/**
	 * Updates the administrative region field of a Region entity.
	 * @param {{ repository: AdministrativeRegionRepository; administrativeRegionId?: Primitives<AdministrativeRegionId>; entity: Region }} params - Parameters for updating the administrative region.
	 * @param {AdministrativeRegionRepository} params.repository - The administrative region repository for existence checks.
	 * @param {Primitives<AdministrativeRegionId>} [params.administrativeRegionId] - The new administrative region ID for the region (optional).
	 * @param {Region} params.entity - The Region entity to update.
	 * @returns {Promise<void>} A promise that resolves when the administrative region is updated or no action is needed.
	 * @throws {InvalidArgumentError} If the new administrative region ID does not exist.
	 */ static async updateAdmRegionField(params: {
		repository: AdministrativeRegionRepository
		administrativeRegionId?: Primitives<AdministrativeRegionId>
		entity: Region
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor de estado no realiza ninguna acción
		if (params.administrativeRegionId === undefined) {
			return
		}
		// Verifica que si la estado actual y el nuevo valor de estado son iguales no realice una busqueda en el repositorio
		if (params.entity.administrativeRegionValue === params.administrativeRegionId) {
			return
		}
		// Verifica que la región administrative no exista en la base de datos, si existe lanza un error {@link CategoryAlreadyExistError} con el valor de estado
		await AdmRegionRegion.ensureAdministrativeRegionExist({
			repository: params.repository,
			administrativeRegionId: params.administrativeRegionId
		})
		// Actualiza el campo administrativeRegion de la entidad {@link Region} con el nuevo valor de estado
		params.entity.updateAdmRegion(params.administrativeRegionId)
	}

	/**
	 * Ensures that an administrative region exists in the repository.
	 * @param {{ repository: AdministrativeRegionRepository; administrativeRegionId: Primitives<AdministrativeRegionId> }} params - Parameters for the existence check.
	 * @param {AdministrativeRegionRepository} params.repository - The administrative region repository to perform the search.
	 * @param {Primitives<AdministrativeRegionId>} params.administrativeRegionId - The administrative region ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the administrative region exists, or rejects with InvalidArgumentError.
	 * @throws {InvalidArgumentError} If the administrative region does not exist.
	 */ static async ensureAdministrativeRegionExist(params: {
		repository: AdministrativeRegionRepository
		administrativeRegionId: Primitives<AdministrativeRegionId>
	}): Promise<void> {
		const isAdministrativeRegionExist = await params.repository.findById(params.administrativeRegionId)
		if (!isAdministrativeRegionExist) {
			throw new InvalidArgumentError('La región administrativa no existe')
		}
	}
}

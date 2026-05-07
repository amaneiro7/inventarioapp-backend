import { UnidadAlreadyExistError } from '../errors/UnidadAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type UnidadRepository } from '../repository/UnidadRepository'
import { type UnidadId } from '../valueObject/UnidadId'
import { type UnidadName } from '../valueObject/UnidadName'

/**
 * Domain service responsible for verifying that a Unidad name is unique within the system.
 */
export class UnidadNameUniquenessChecker {
	/**
	 * Creates an instance of UnidadNameUniquenessChecker.
	 * @param {UnidadRepository} repository - The repository used to check for existing Unidads.
	 */
	constructor(private readonly repository: UnidadRepository) {}

	/**
	 * Ensures that the provided Unidad name is unique.
	 * If an ID is provided in excludeId, it ignores that Unidad (useful for updates).
	 *
	 * @param {string} name - The Unidad name to check.
	 * @param {Primitives<UnidadId>} [excludeId] - The ID of the Unidad to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {UnidadAlreadyExistError} If a Unidad with the same name already exists.
	 */
	async ensureUnique(name: Primitives<UnidadName>, excludeId?: Primitives<UnidadId>): Promise<void> {
		const existingUnidad = await this.repository.findByName(name)
		if (existingUnidad && existingUnidad.id !== excludeId) {
			throw new UnidadAlreadyExistError(name)
		}
	}
}

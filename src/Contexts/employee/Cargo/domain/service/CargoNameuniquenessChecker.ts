import { CargoAlreadyExistError } from '../errors/CargoAlreadyExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../repository/CargoRepository'
import { type CargoId } from '../valueObject/CargoId'

/**
 * Domain service responsible for verifying that a Cargo name is unique within the system.
 */
export class CargoNameUniquenessChecker {
	/**
	 * Creates an instance of CargoNameUniquenessChecker.
	 * @param {CargoRepository} repository - The repository used to check for existing Cargos.
	 */
	constructor(private readonly repository: CargoRepository) {}

	/**
	 * Ensures that the provided Cargo name is unique.
	 * If an ID is provided in excludeId, it ignores that Cargo (useful for updates).
	 *
	 * @param {string} name - The Cargo name to check.
	 * @param {Primitives<CargoId>} [excludeId] - The ID of the Cargo to exclude from the check (optional).
	 * @returns {Promise<void>} Resolves if the name is unique.
	 * @throws {CargoAlreadyExistError} If a Cargo with the same name already exists.
	 */
	async ensureUnique(name: string, excludeId?: Primitives<CargoId>): Promise<void> {
		const existingCargo = await this.repository.findByName(name)
		if (existingCargo && existingCargo.id !== excludeId) {
			throw new CargoAlreadyExistError(name)
		}
	}
}

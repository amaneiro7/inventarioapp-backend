import { CargoDoesNotExistError } from '../errors/CargoDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../repository/CargoRepository'
import { type CargoId } from '../valueObject/CargoId'

export class CargoExistenceChecker {
	constructor(private readonly repository: CargoRepository) {}

	/**
	 * Ensures that one or more Cargos exist in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<CargoId> | null | undefined | (Primitives<CargoId> | null | undefined)[]} cargoIds - The Cargo ID or IDs to check for existence.
	 * @returns {Promise<void>} A promise that resolves if all provided non-null Cargos exist.
	 * @throws {CargoDoesNotExistError} If any of the Cargos do not exist.
	 */
	async ensureExist(
		cargoIds: Primitives<CargoId> | null | undefined | (Primitives<CargoId> | null | undefined)[]
	): Promise<void> {
		const ids = Array.isArray(cargoIds) ? cargoIds : [cargoIds]
		const uniqueCargoIds = [...new Set(ids.filter(id => id !== null && id !== undefined))] as Primitives<CargoId>[]
		if (uniqueCargoIds.length === 0) {
			return
		}

		const foundCargos = await this.repository.findByIds(uniqueCargoIds)
		if (foundCargos.length !== uniqueCargoIds.length) {
			const foundIds = new Set(foundCargos.map(c => c.id))
			const missingIds = uniqueCargoIds.filter(id => !foundIds.has(id))
			throw new CargoDoesNotExistError(missingIds.join(', '))
		}
	}
}

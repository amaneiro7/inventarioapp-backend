import { CargoDoesNotExistError } from '../errors/CargoDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../repository/CargoRepository'
import { type CargoId } from '../valueObject/CargoId'

export class CargoExistenceChecker {
	constructor(private readonly repository: CargoRepository) {}

	async ensureExist(cargoIds: Primitives<CargoId>[]): Promise<void> {
		const uniqueCargoIds = [...new Set(cargoIds)]
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

import { type CargoDto } from '../domain/Cargo.dto'
import { CargoDoesNotExistError } from '../domain/CargoDoesNotExistError'
import { CargoId } from '../domain/CargoId'
import { type CargoRepository } from '../domain/CargoRepository'

/**
 * @description Use case for finding a Cargo entity by its unique identifier.
 */
export class CargoFinder {
	private readonly cargoRepository: CargoRepository

	constructor({ cargoRepository }: { cargoRepository: CargoRepository }) {
		this.cargoRepository = cargoRepository
	}

	/**
	 * @description Executes the cargo finding process.
	 * @param {{ id: string }} params The parameters for finding the cargo.
	 * @returns {Promise<CargoDto>} A promise that resolves to the found Cargo DTO.
	 * @throws {CargoDoesNotExistError} If no cargo with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<CargoDto> {
		const cargoId = new CargoId(id).value
		const cargo = await this.cargoRepository.searchById(cargoId)

		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		return cargo
	}
}

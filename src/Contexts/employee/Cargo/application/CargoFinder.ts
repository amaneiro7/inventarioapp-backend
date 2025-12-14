import { CargoDoesNotExistError } from '../domain/errors/CargoDoesNotExistError'
import { CargoId } from '../domain/valueObject/CargoId'
import { type CargoDto } from '../domain/entity/Cargo.dto'
import { type CargoRepository } from '../domain/repository/CargoRepository'

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
		const cargo = await this.cargoRepository.findById(cargoId)

		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		return cargo
	}
}

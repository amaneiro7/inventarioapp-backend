import { type CargoDto } from '../domain/Cargo.dto'
import { CargoDoesNotExistError } from '../domain/CargoDoesNotExistError'
import { CargoId } from '../domain/CargoId'
import { type CargoRepository } from '../domain/CargoRepository'

export class CargoFinder {
	private readonly cargoRepository: CargoRepository
	constructor({ cargoRepository }: { cargoRepository: CargoRepository }) {
		this.cargoRepository = cargoRepository
	}

	async run(params: { id: string }): Promise<CargoDto> {
		const { id } = params
		const cargoId = new CargoId(id).value
		const cargo = await this.cargoRepository.searchById(cargoId)

		if (!cargo) {
			throw new CargoDoesNotExistError()
		}

		return cargo
	}
}

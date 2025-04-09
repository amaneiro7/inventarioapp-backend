import { CargoDoesNotExistError } from '../Cargo/domain/CargoDoesNotExistError'
import { type CargoRepository } from '../Cargo/domain/CargoRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type CargoId } from '../Cargo/domain/CargoId'

export class CreateIDepartementUseCase {
	constructor(private readonly cargoRepository: CargoRepository) {}

	public async execute({ cargos }: { cargos: Primitives<CargoId>[] }): Promise<void> {
		await Promise.all([this.ensureCargoExists(cargos)])
	}

	private async ensureCargoExists(cargos: Primitives<CargoId>[]): Promise<void> {
		for (const cargoId of cargos) {
			if ((await this.cargoRepository.searchById(cargoId)) === null) {
				throw new CargoDoesNotExistError()
			}
		}
	}
}

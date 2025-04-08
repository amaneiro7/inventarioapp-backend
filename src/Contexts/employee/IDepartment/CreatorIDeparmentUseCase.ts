import { CargoDoesNotExistError } from '../Cargo/domain/CargoDoesNotExistError'
import { CentroCostoDoesNotExistError } from '../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type CargoRepository } from '../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../CentroCosto/domain/CentroCostoRepository'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type CodCentroCosto } from '../CentroCosto/domain/CodCentroCosto'
import { type CargoId } from '../Cargo/domain/CargoId'

export class CreateIDepartementUseCase {
	constructor(
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		centroCostoId,
		cargos
	}: {
		centroCostoId: Primitives<CodCentroCosto>
		cargos: Primitives<CargoId>[]
	}): Promise<void> {
		await Promise.all([this.ensureCentroCostoExists(centroCostoId), this.ensureCargoExists(cargos)])
	}
	private async ensureCentroCostoExists(centroCostoId: Primitives<CodCentroCosto>): Promise<void> {
		if ((await this.centroCostoRepository.searchById(centroCostoId)) === null) {
			throw new CentroCostoDoesNotExistError()
		}
	}

	private async ensureCargoExists(cargos: Primitives<CargoId>[]): Promise<void> {
		for (const cargoId of cargos) {
			if ((await this.cargoRepository.searchById(cargoId)) === null) {
				throw new CargoDoesNotExistError()
			}
		}
	}
}

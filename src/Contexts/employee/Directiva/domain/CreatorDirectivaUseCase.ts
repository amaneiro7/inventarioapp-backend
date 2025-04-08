import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { CargoDoesNotExistError } from '../../Cargo/domain/CargoDoesNotExistError'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'

export class CreateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({ name, centroCostoId, cargos }: DirectivaParams): Promise<void> {
		await Promise.all([
			this.ensureDirectivaDoesNotExist(name),
			this.ensureCentroCostoExists(centroCostoId),
			this.ensureCargoExists(cargos)
		])
	}
	private async ensureDirectivaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.directivaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
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

import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type CargoId } from '../../Cargo/domain/CargoId'
import { type CodCentroCosto } from '../../CentroCosto/domain/CodCentroCosto'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CargoDoesNotExistError } from '../../Cargo/domain/CargoDoesNotExistError'
import { CentroCostoDoesNotExistError } from '../../CentroCosto/domain/CentroCostoDoesNotExistError'
import { type DepartamentoDto, type DepartamentoParams } from './Departamento.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class CreateDepartamentoUseCase {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		name,
		vicepresidenciaEjecutivaId,
		centroCostoId,
		cargos
	}: DepartamentoParams): Promise<void> {
		await Promise.all([
			// Se verifica que el departamento 2 exista
			this.ensureVicepresidenciaEjecutivaExists(vicepresidenciaEjecutivaId),

			// Se verifica que el centro de costo exista
			this.ensureCentroCostoExists(centroCostoId),

			// Se verifica que el departamento 3 no exista
			this.ensureDepartamentoDoesNotExist(name),

			// Se verifica que los cargos existan
			this.ensureCargoExists(cargos)
		])
	}

	private async ensureDepartamentoDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.departamentoRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La Genrecia, coordinación o departamento')
		}
	}

	private async ensureVicepresidenciaEjecutivaExists(
		vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	): Promise<void> {
		if ((await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId)) === null) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
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

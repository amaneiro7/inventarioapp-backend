import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaEjecutivaParams, type VicepresidenciaEjecutivaDto } from './VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'

export class CreateVicepresidenciaEjecutivaUseCase {
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({ name, directivaId, cargos, centroCostoId }: VicepresidenciaEjecutivaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(
			this.centroCostoRepository,
			this.cargoRepository
		)

		await Promise.all([
			this.ensureVicepresidenciaEjecutivaDoesNotExist(name),
			this.ensuredirectivaExists(directivaId),
			createIDepartementUseCase.execute({ cargos, centroCostoId })
		])
	}
	private async ensureVicepresidenciaEjecutivaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.vicepresidenciaEjecutivaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La vicepresidencia ejecutiva')
		}
	}

	private async ensuredirectivaExists(directivaId: Primitives<DepartmentId>): Promise<void> {
		if ((await this.directivaRepository.searchById(directivaId)) === null) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
	}
}

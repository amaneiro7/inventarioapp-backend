import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaParams, type VicepresidenciaDto } from './Vicepresidencia.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class CreateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({ name, directivaId, centroCostoId, cargos }: VicepresidenciaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(
			this.centroCostoRepository,
			this.cargoRepository
		)
		await Promise.all([
			this.ensureVicepresidenciaDoesNotExist(name),
			this.ensuredirectivaExists(directivaId),
			createIDepartementUseCase.execute({ centroCostoId, cargos })
		])
	}
	private async ensureVicepresidenciaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.vicepresidenciaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La vicepresidencia ejecutiva')
		}
	}

	private async ensuredirectivaExists(directivaId: Primitives<DepartmentId>): Promise<void> {
		if ((await this.directivaRepository.searchById(directivaId)) === null) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
	}
}

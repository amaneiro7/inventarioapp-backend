import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaParams, type VicepresidenciaDto } from './Vicepresidencia.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class CreateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({ name, vicepresidenciaEjecutivaId, cargos }: VicepresidenciaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaDoesNotExist(name),
			this.ensureVicepresidenciaEjecutivaExists(vicepresidenciaEjecutivaId),
			createIDepartementUseCase.execute({ cargos })
		])
	}
	private async ensureVicepresidenciaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.vicepresidenciaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La vicepresidencia')
		}
	}

	private async ensureVicepresidenciaEjecutivaExists(
		vicepresidenciaEjecutivaId: Primitives<DepartmentId>
	): Promise<void> {
		if ((await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId)) === null) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}
	}
}

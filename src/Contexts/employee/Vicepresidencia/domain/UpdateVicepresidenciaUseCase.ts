import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type Vicepresidencia } from './Vicepresidencia'
import { type VicepresidenciaParams, type VicepresidenciaDto } from './Vicepresidencia.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class UpdateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, vicepresidenciaEjecutivaId, cargos },
		entity
	}: {
		entity: Vicepresidencia
		params: Partial<VicepresidenciaParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaDoesNotExist({ name, entity }),
			this.ensureVicepresidenciaEjecutivaExists({ vicepresidenciaEjecutivaId, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos }, entity })
		])
	}

	private async ensureVicepresidenciaDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Vicepresidencia
	}): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		if ((await this.vicepresidenciaaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La vicepresidencia')
		}
		entity.updateName(name)
	}

	private async ensureVicepresidenciaEjecutivaExists({
		entity,
		vicepresidenciaEjecutivaId
	}: {
		vicepresidenciaEjecutivaId?: Primitives<DepartmentId>
		entity: Vicepresidencia
	}): Promise<void> {
		if (!vicepresidenciaEjecutivaId) return

		if (entity.vicepresidenciaEjecutivaValue !== vicepresidenciaEjecutivaId) return

		if ((await this.vicepresidenciaEjecutivaRepository.searchById(vicepresidenciaEjecutivaId)) === null) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}
		entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)
	}
}

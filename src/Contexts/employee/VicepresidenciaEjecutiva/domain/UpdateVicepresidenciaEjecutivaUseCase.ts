import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutiva } from './VicepresidenciaEjecutiva'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaEjecutivaParams, type VicepresidenciaEjecutivaDto } from './VicepresidenciaEjecutiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class UpdateVicepresidenciaEjecutivaUseCase {
	constructor(
		private readonly vicepresidenciaEjecutivaaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, directivaId, cargos },
		entity
	}: {
		entity: VicepresidenciaEjecutiva
		params: Partial<VicepresidenciaEjecutivaParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaEjecutivaDoesNotExist({ name, entity }),
			this.ensureDirectivaExists({ directivaId, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos }, entity })
		])
	}

	private async ensureVicepresidenciaEjecutivaDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: VicepresidenciaEjecutiva
	}): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		if ((await this.vicepresidenciaEjecutivaaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La vicepresidenciaEjecutiva')
		}
		entity.updateName(name)
	}

	private async ensureDirectivaExists({
		entity,
		directivaId
	}: {
		directivaId?: Primitives<DepartmentId>
		entity: VicepresidenciaEjecutiva
	}): Promise<void> {
		if (!directivaId) return

		if (entity.directivaValue !== directivaId) return

		if ((await this.directivaRepository.searchById(directivaId)) === null) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
		entity.updateDirectiva(directivaId)
	}
}

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

/**
 * @description Use case for updating an existing Vicepresidencia, including validation of associated entities.
 */
export class UpdateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the update of a vicepresidencia.
	 * @param {{ entity: Vicepresidencia; params: Partial<VicepresidenciaParams> }} data The parameters for updating.
	 * @returns {Promise<void>} A promise that resolves when the vicepresidencia is successfully updated.
	 * @throws {DepartmentAlreadyExistError} If a vicepresidencia with the new name already exists.
	 * @throws {DepartmentDoesNotExistError} If the associated vicepresidencia ejecutiva or any cargo does not exist.
	 */
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
		if (!name || entity.nameValue === name) return

		if (await this.vicepresidenciaaRepository.findByName(name)) {
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
		if (!vicepresidenciaEjecutivaId || entity.vicepresidenciaEjecutivaValue === vicepresidenciaEjecutivaId) return

		if (!(await this.vicepresidenciaEjecutivaRepository.findById(vicepresidenciaEjecutivaId))) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}
		entity.updateVicepresidenciaEjecutiva(vicepresidenciaEjecutivaId)
	}
}

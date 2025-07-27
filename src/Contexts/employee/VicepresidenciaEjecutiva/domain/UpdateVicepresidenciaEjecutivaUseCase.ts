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

/**
 * @description Use case for updating an existing VicepresidenciaEjecutiva, including validation of associated entities.
 */
export class UpdateVicepresidenciaEjecutivaUseCase {
	constructor(
		private readonly vicepresidenciaEjecutivaaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the update of a vicepresidencia ejecutiva.
	 * @param {{ entity: VicepresidenciaEjecutiva; params: Partial<VicepresidenciaEjecutivaParams> }} data The parameters for updating.
	 * @returns {Promise<void>} A promise that resolves when the vicepresidencia ejecutiva is successfully updated.
	 * @throws {DepartmentAlreadyExistError} If a vicepresidencia ejecutiva with the new name already exists.
	 * @throws {DepartmentDoesNotExistError} If the associated directiva or any cargo does not exist.
	 */
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
		if (!name || entity.nameValue === name) return

		if (await this.vicepresidenciaEjecutivaaRepository.searchByName(name)) {
			throw new DepartmentAlreadyExistError('La vicepresidencia ejecutiva')
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
		if (!directivaId || entity.directivaValue === directivaId) return

		if (!(await this.directivaRepository.searchById(directivaId))) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
		entity.updateDirectiva(directivaId)
	}
}

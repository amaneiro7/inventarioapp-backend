import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Departamento } from './Departamento'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartamentoDto, type DepartamentoParams } from './Departamento.dto'
import { type VicepresidenciaDto } from '../../Vicepresidencia/domain/Vicepresidencia.dto'

/**
 * @description Use case for updating an existing Departamento, including validation of associated entities.
 */
export class UpdateDepartamentoUseCase {
	constructor(
		private readonly departamentoRepository: DepartmentRepository<DepartamentoDto>,
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the update of a departamento.
	 * @param {{ entity: Departamento; params: Partial<DepartamentoParams> }} data The parameters for updating the departamento.
	 * @returns {Promise<void>} A promise that resolves when the departamento is successfully updated.
	 * @throws {DepartmentAlreadyExistError} If a departamento with the new name already exists.
	 * @throws {DepartmentDoesNotExistError} If the associated vicepresidencia or any cargo does not exist.
	 */
	public async execute({
		params: { name, vicepresidenciaId, cargos },
		entity
	}: {
		entity: Departamento
		params: Partial<DepartamentoParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaExists({ vicepresidenciaId, entity }),
			this.ensureDepartamentoDoesNotExist({ name, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos }, entity })
		])
	}

	private async ensureDepartamentoDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Departamento
	}): Promise<void> {
		if (!name || entity.nameValue === name) return

		if (await this.departamentoRepository.findByName(name)) {
			throw new DepartmentAlreadyExistError('La gerencia, coordinación o departamento')
		}
		entity.updateName(name)
	}

	private async ensureVicepresidenciaExists({
		entity,
		vicepresidenciaId
	}: {
		vicepresidenciaId?: Primitives<DepartmentId>
		entity: Departamento
	}): Promise<void> {
		if (!vicepresidenciaId || entity.vicepresidenciaValue === vicepresidenciaId) return

		if (!(await this.vicepresidenciaRepository.findById(vicepresidenciaId))) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}
		entity.updateVicepresidencia(vicepresidenciaId)
	}
}

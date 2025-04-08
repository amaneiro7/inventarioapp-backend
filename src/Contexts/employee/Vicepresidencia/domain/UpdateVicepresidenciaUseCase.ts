import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type Vicepresidencia } from './Vicepresidencia'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaParams, type VicepresidenciaDto } from './Vicepresidencia.dto'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class UpdateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, directivaId, cargos, centroCostoId },
		entity
	}: {
		entity: Vicepresidencia
		params: Partial<VicepresidenciaParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.centroCostoRepository, this.cargoRepository)
		await Promise.all([
			this.ensureVicepresidenciaDoesNotExist({ name, entity }),
			this.ensureDirectivaExists({ directivaId, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos, centroCostoId }, entity })
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

	private async ensureDirectivaExists({
		entity,
		directivaId
	}: {
		directivaId?: Primitives<DepartmentId>
		entity: Vicepresidencia
	}): Promise<void> {
		if (!directivaId) return

		if (entity.directivaValue !== directivaId) return

		if ((await this.directivaRepository.searchById(directivaId)) === null) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
		entity.updateDirectiva(directivaId)
	}
}

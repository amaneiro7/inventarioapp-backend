import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type Vicepresidencia } from './Vicepresidencia'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type VicepresidenciaParams, type VicepresidenciaDto } from './Vicepresidencia.dto'

export class UpdateVicepresidenciaUseCase {
	constructor(
		private readonly vicepresidenciaaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {}

	public async execute({
		params: { name, directivaId },
		entity
	}: {
		entity: Vicepresidencia
		params: Partial<VicepresidenciaParams>
	}): Promise<void> {
		await this.ensureVicepresidenciaDoesNotExist({ name, entity })
		await this.ensureDirectivaExists({ directivaId, entity })
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

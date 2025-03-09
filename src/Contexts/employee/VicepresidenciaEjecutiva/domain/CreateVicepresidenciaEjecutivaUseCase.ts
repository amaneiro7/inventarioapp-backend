import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type VicepresidenciaEjecutivaParams, type VicepresidenciaEjecutivaDto } from './VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'

export class CreateVicepresidenciaEjecutivaUseCase {
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {}

	public async execute({ name, directivaId }: VicepresidenciaEjecutivaParams): Promise<void> {
		await this.ensureVicepresidenciaEjecutivaDoesNotExist(name)

		await this.ensuredirectivaExists(directivaId)
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

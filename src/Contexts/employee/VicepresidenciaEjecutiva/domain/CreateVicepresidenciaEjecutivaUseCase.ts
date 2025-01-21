import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type VicepresidenciaEjecutivaPrimitives } from './VicepresidenciaEjecutiva'
import { type DirectivaPrimitives } from '../../Directiva/domain/Directiva'
import { type DepartmentId } from '../../IDepartment/DepartmentId'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'

export class CreateVicepresidenciaEjecutivaUseCase {
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
		private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>
	) {}

	public async execute({
		name,
		directivaId
	}: Omit<VicepresidenciaEjecutivaPrimitives, 'id'>): Promise<void> {
		await this.ensureVicepresidenciaEjecutivaDoesNotExist(name)

		await this.ensuredirectivaExists(directivaId)
	}
	private async ensureVicepresidenciaEjecutivaDoesNotExist(
		name: Primitives<DepartmentName>
	): Promise<void> {
		if (
			(await this.vicepresidenciaEjecutivaRepository.searchByName(
				name
			)) !== null
		) {
			throw new DepartmentAlreadyExistError(
				'La vicepresidencia ejecutiva'
			)
		}
	}

	private async ensuredirectivaExists(
		directivaId: Primitives<DepartmentId>
	): Promise<void> {
		if ((await this.directivaRepository.searchById(directivaId)) === null) {
			throw new DepartmentDoesNotExistError('La directiva')
		}
	}
}

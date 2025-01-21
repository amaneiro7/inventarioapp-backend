import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { Directiva, type DirectivaPrimitives } from './Directiva'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'

export class UpdateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>
	) {}

	public async execute({
		params: { name },
		entity
	}: {
		entity: Directiva
		params: Partial<Omit<DirectivaPrimitives, 'id'>>
	}): Promise<void> {
		await this.ensureDirectivaDoesNotExist({ name, entity })
	}

	private async ensureDirectivaDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Directiva
	}): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		if ((await this.directivaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
		entity.updateName(name)
	}
}

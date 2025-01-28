import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'

export class CreateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {}

	public async execute({ name }: DirectivaParams): Promise<void> {
		await this.ensureDirectivaDoesNotExist(name)
	}
	private async ensureDirectivaDoesNotExist(
		name: Primitives<DepartmentName>
	): Promise<void> {
		if ((await this.directivaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
	}
}

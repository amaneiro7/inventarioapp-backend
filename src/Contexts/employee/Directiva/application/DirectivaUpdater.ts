import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { Directiva } from '../domain/Directiva'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateDirectivaUseCase } from '../domain/UpdateDirectivaUseCase'
import {
	type DirectivaParams,
	type DirectivaDto
} from '../domain/Directiva.dto'

export class DirectivaUpdater {
	private readonly updateDirectivaUseCase: UpdateDirectivaUseCase
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		this.updateDirectivaUseCase = new UpdateDirectivaUseCase(
			directivaRepository
		)
	}

	async run({
		id,
		params
	}: {
		id: string
		params: Partial<DirectivaParams>
	}): Promise<void> {
		const { name } = params
		const directivaId = new DepartmentId(id)

		const directiva = await this.directivaRepository.searchById(
			directivaId.value
		)
		if (!directiva) {
			throw new DepartmentDoesNotExistError('La Directiva')
		}

		const directivaEntity = Directiva.fromPrimitives(directiva)
		await this.updateDirectivaUseCase.execute({
			params: { name },
			entity: directivaEntity
		})

		await this.directivaRepository.save(directivaEntity.toPrimitive())
	}
}

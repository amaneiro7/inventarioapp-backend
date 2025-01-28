import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { CreateDirectivaUseCase } from '../domain/CreatorDirectivaUseCase'
import { Directiva } from '../domain/Directiva'
import {
	type DirectivaDto,
	type DirectivaParams
} from '../domain/Directiva.dto'

export class DirectivaCreator {
	private readonly createDirectivaUseCase: CreateDirectivaUseCase
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		this.createDirectivaUseCase = new CreateDirectivaUseCase(
			directivaRepository
		)
	}

	async run({ params }: { params: DirectivaParams }): Promise<void> {
		const { name } = params
		await this.createDirectivaUseCase.execute({ name })

		const directiva = Directiva.create({ name })

		await this.directivaRepository.save(directiva.toPrimitive())
	}
}

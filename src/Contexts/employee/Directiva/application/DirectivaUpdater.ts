import { Directiva } from '../domain/Directiva'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateDirectivaUseCase } from '../domain/UpdateDirectivaUseCase'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaParams, type DirectivaDto } from '../domain/Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class DirectivaUpdater {
	private readonly updateDirectivaUseCase: UpdateDirectivaUseCase
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.updateDirectivaUseCase = new UpdateDirectivaUseCase(this.directivaRepository, this.cargoRepository)
	}

	async run({ id, params }: { id: string; params: Partial<DirectivaParams> }): Promise<void> {
		const directivaId = new DepartmentId(id)

		const directiva = await this.directivaRepository.searchById(directivaId.value)
		if (!directiva) {
			throw new DepartmentDoesNotExistError('La Directiva')
		}

		const directivaEntity = Directiva.fromPrimitives(directiva)
		await this.updateDirectivaUseCase.execute({
			entity: directivaEntity,
			params
		})

		await this.directivaRepository.save(directivaEntity.toPrimitive())
	}
}

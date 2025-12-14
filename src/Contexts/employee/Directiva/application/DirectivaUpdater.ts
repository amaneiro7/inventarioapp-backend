import { Directiva } from '../domain/Directiva'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateDirectivaUseCase } from '../domain/UpdateDirectivaUseCase'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaParams, type DirectivaDto } from '../domain/Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'

/**
 * @description Use case for updating an existing Directiva entity.
 */
export class DirectivaUpdater {
	private readonly updateDirectivaUseCase: UpdateDirectivaUseCase
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly cargoRepository: CargoRepository

	constructor(dependencies: {
		directivaRepository: DepartmentRepository<DirectivaDto>
		cargoRepository: CargoRepository
	}) {
		this.cargoRepository = dependencies.cargoRepository
		this.directivaRepository = dependencies.directivaRepository
		this.updateDirectivaUseCase = new UpdateDirectivaUseCase(this.directivaRepository, this.cargoRepository)
	}

	/**
	 * @description Executes the Directiva update process.
	 * @param {{ id: string; params: Partial<DirectivaParams> }} data The parameters for updating the Directiva.
	 * @returns {Promise<void>} A promise that resolves when the Directiva is successfully updated.
	 * @throws {DepartmentDoesNotExistError} If the Directiva with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<DirectivaParams> }): Promise<void> {
		const directivaId = new DepartmentId(id)

		const directiva = await this.directivaRepository.findById(directivaId.value)
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

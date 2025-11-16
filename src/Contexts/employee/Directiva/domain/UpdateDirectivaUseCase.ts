import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { type Directiva } from './Directiva'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

/**
 * @description Use case for updating an existing Directiva, including validation of associated entities.
 */
export class UpdateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the update of a directiva.
	 * @param {{ entity: Directiva; params: Partial<DirectivaParams> }} data The parameters for updating the directiva.
	 * @returns {Promise<void>} A promise that resolves when the directiva is successfully updated.
	 * @throws {DepartmentAlreadyExistError} If a directiva with the new name already exists.
	 * @throws {CargoDoesNotExistError} If any of the associated cargos do not exist.
	 */
	public async execute({
		params: { name, cargos },
		entity
	}: {
		entity: Directiva
		params: Partial<DirectivaParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.cargoRepository)
		await Promise.all([
			this.ensureDirectivaDoesNotExist({ name, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos }, entity })
		])
	}

	private async ensureDirectivaDoesNotExist({
		name,
		entity
	}: {
		name?: Primitives<DepartmentName>
		entity: Directiva
	}): Promise<void> {
		if (!name || entity.nameValue === name) return

		if (await this.directivaRepository.findByName(name)) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
		entity.updateName(name)
	}
}

import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

/**
 * @description Use case for creating a new Directiva, including validation of associated entities.
 */
export class CreateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	/**
	 * @description Executes the creation of a new directiva.
	 * @param {DirectivaParams} params The parameters for creating the directiva.
	 * @returns {Promise<void>} A promise that resolves when the directiva is successfully created.
	 * @throws {DepartmentAlreadyExistError} If a directiva with the same name already exists.
	 * @throws {CargoDoesNotExistError} If any of the associated cargos do not exist.
	 */
	public async execute({ name, cargos }: DirectivaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)
		await Promise.all([this.ensureDirectivaDoesNotExist(name), createIDepartementUseCase.execute({ cargos })])
	}

	private async ensureDirectivaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if (await this.directivaRepository.searchByName(name)) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
	}
}

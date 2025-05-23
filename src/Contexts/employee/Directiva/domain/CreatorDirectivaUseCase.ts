import { CreateIDepartementUseCase } from '../../IDepartment/CreatorIDeparmentUseCase'
import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class CreateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({ name, cargos }: DirectivaParams): Promise<void> {
		const createIDepartementUseCase = new CreateIDepartementUseCase(this.cargoRepository)
		await Promise.all([this.ensureDirectivaDoesNotExist(name), createIDepartementUseCase.execute({ cargos })])
	}
	private async ensureDirectivaDoesNotExist(name: Primitives<DepartmentName>): Promise<void> {
		if ((await this.directivaRepository.searchByName(name)) !== null) {
			throw new DepartmentAlreadyExistError('La directiva')
		}
	}
}

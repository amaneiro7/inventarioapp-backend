import { DepartmentAlreadyExistError } from '../../IDepartment/DepartmentAlreadyExistError'
import { UpdateIDeparmentUseCase } from '../../IDepartment/UpdateIDeparmentUseCase'
import { type Directiva } from './Directiva'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DepartmentName } from '../../IDepartment/DepartmentName'
import { type DirectivaDto, type DirectivaParams } from './Directiva.dto'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class UpdateDirectivaUseCase {
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {}

	public async execute({
		params: { name, cargos, centroCostoId },
		entity
	}: {
		entity: Directiva
		params: Partial<DirectivaParams>
	}): Promise<void> {
		const updateIDeparmentUseCase = new UpdateIDeparmentUseCase(this.centroCostoRepository, this.cargoRepository)
		await Promise.all([
			this.ensureDirectivaDoesNotExist({ name, entity }),
			updateIDeparmentUseCase.execute({ params: { cargos, centroCostoId }, entity })
		])
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

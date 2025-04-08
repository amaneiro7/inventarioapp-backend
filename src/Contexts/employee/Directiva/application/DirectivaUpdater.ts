import { Directiva } from '../domain/Directiva'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateDirectivaUseCase } from '../domain/UpdateDirectivaUseCase'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaParams, type DirectivaDto } from '../domain/Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'

export class DirectivaUpdater {
	private readonly updateDirectivaUseCase: UpdateDirectivaUseCase
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {
		this.updateDirectivaUseCase = new UpdateDirectivaUseCase(
			this.directivaRepository,
			this.centroCostoRepository,
			this.cargoRepository
		)
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

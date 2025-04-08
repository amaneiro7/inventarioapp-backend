import { Directiva } from '../domain/Directiva'
import { CreateDirectivaUseCase } from '../domain/CreatorDirectivaUseCase'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type DirectivaDto, type DirectivaParams } from '../domain/Directiva.dto'

export class DirectivaCreator {
	private readonly createDirectivaUseCase: CreateDirectivaUseCase
	constructor(
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {
		this.createDirectivaUseCase = new CreateDirectivaUseCase(
			directivaRepository,
			this.centroCostoRepository,
			this.cargoRepository
		)
	}

	async run({ params }: { params: DirectivaParams }): Promise<void> {
		const { name, cargos, centroCostoId } = params
		const uniqueCargos = Array.from(new Set(cargos))

		await this.createDirectivaUseCase.execute({ name, centroCostoId, cargos: uniqueCargos })

		const directiva = Directiva.create({ name, centroCostoId, cargos: uniqueCargos })

		await this.directivaRepository.save(directiva.toPrimitive())
	}
}

import { Vicepresidencia } from '../domain/Vicepresidencia'
import { CreateVicepresidenciaUseCase } from '../domain/CreateVicepresidenciaUseCase'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'

export class VicepresidenciaCreator {
	private readonly createVicepresidenciaUseCase: CreateVicepresidenciaUseCase
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {
		this.createVicepresidenciaUseCase = new CreateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.directivaRepository,
			this.centroCostoRepository,
			this.cargoRepository
		)
	}

	async run({ params }: { params: VicepresidenciaParams }): Promise<void> {
		const { cargos, centroCostoId, directivaId, name } = params
		const uniqueCargos = Array.from(new Set(cargos))
		await this.createVicepresidenciaUseCase.execute({
			name,
			directivaId,
			centroCostoId,
			cargos: uniqueCargos
		})

		const vicepresidencia = Vicepresidencia.create({
			name,
			directivaId,
			centroCostoId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaRepository.save(vicepresidencia.toPrimitive())
	}
}

import { Vicepresidencia } from '../domain/Vicepresidencia'
import { CreateVicepresidenciaUseCase } from '../domain/CreateVicepresidenciaUseCase'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'

export class VicepresidenciaCreator {
	private readonly createVicepresidenciaUseCase: CreateVicepresidenciaUseCase
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.createVicepresidenciaUseCase = new CreateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.directivaRepository,
			this.cargoRepository
		)
	}

	async run({ params }: { params: VicepresidenciaParams }): Promise<void> {
		const { cargos, directivaId, name } = params
		const uniqueCargos = Array.from(new Set(cargos))
		await this.createVicepresidenciaUseCase.execute({
			name,
			directivaId,
			cargos: uniqueCargos
		})

		const vicepresidencia = Vicepresidencia.create({
			name,
			directivaId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaRepository.save(vicepresidencia.toPrimitive())
	}
}

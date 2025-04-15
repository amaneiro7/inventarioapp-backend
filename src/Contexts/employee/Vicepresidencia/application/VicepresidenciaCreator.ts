import { Vicepresidencia } from '../domain/Vicepresidencia'
import { CreateVicepresidenciaUseCase } from '../domain/CreateVicepresidenciaUseCase'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

export class VicepresidenciaCreator {
	private readonly createVicepresidenciaUseCase: CreateVicepresidenciaUseCase
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.createVicepresidenciaUseCase = new CreateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.vicepresidenciaEjecutivaRepository,
			this.cargoRepository
		)
	}

	async run({ params }: { params: VicepresidenciaParams }): Promise<void> {
		const { cargos, vicepresidenciaEjecutivaId, name } = params
		const uniqueCargos = Array.from(new Set(cargos))
		await this.createVicepresidenciaUseCase.execute({
			name,
			vicepresidenciaEjecutivaId,
			cargos: uniqueCargos
		})

		const vicepresidencia = Vicepresidencia.create({
			name,
			vicepresidenciaEjecutivaId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaRepository.save(vicepresidencia.toPrimitive())
	}
}

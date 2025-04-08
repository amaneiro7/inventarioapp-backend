import { CreateVicepresidenciaEjecutivaUseCase } from '../domain/CreateVicepresidenciaEjecutivaUseCase'
import { VicepresidenciaEjecutiva } from '../domain/VicepresidenciaEjecutiva'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'
import { type CentroCostoRepository } from '../../CentroCosto/domain/CentroCostoRepository'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams
} from '../domain/VicepresidenciaEjecutiva.dto'

export class VicepresidenciaEjecutivaCreator {
	private readonly createVicepresidenciaEjecutivaUseCase: CreateVicepresidenciaEjecutivaUseCase
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>,
		private readonly centroCostoRepository: CentroCostoRepository,
		private readonly cargoRepository: CargoRepository
	) {
		this.createVicepresidenciaEjecutivaUseCase = new CreateVicepresidenciaEjecutivaUseCase(
			this.vicepresidenciaEjecutivaRepository,
			this.directivaRepository,
			this.centroCostoRepository,
			this.cargoRepository
		)
	}

	async run({ params }: { params: VicepresidenciaEjecutivaParams }): Promise<void> {
		const { name, directivaId, cargos, centroCostoId } = params
		const uniqueCargos = Array.from(new Set(cargos))
		await this.createVicepresidenciaEjecutivaUseCase.execute({
			name,
			directivaId,
			centroCostoId,
			cargos: uniqueCargos
		})

		const vicepresidenciaEjecutiva = VicepresidenciaEjecutiva.create({
			name,
			directivaId,
			centroCostoId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaEjecutivaRepository.save(vicepresidenciaEjecutiva.toPrimitive())
	}
}

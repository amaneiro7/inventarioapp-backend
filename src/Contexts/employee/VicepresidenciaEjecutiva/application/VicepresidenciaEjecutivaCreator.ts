import { CreateVicepresidenciaEjecutivaUseCase } from '../domain/CreateVicepresidenciaEjecutivaUseCase'
import { VicepresidenciaEjecutiva } from '../domain/VicepresidenciaEjecutiva'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams
} from '../domain/VicepresidenciaEjecutiva.dto'

export class VicepresidenciaEjecutivaCreator {
	private readonly createVicepresidenciaEjecutivaUseCase: CreateVicepresidenciaEjecutivaUseCase
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly cargoRepository: CargoRepository
	constructor({
		cargoRepository,
		directivaRepository,
		vicepresidenciaEjecutivaRepository
	}: {
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		directivaRepository: DepartmentRepository<DirectivaDto>
		cargoRepository: CargoRepository
	}) {
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
		this.directivaRepository = directivaRepository
		this.cargoRepository = cargoRepository
		this.createVicepresidenciaEjecutivaUseCase = new CreateVicepresidenciaEjecutivaUseCase(
			this.vicepresidenciaEjecutivaRepository,
			this.directivaRepository,
			this.cargoRepository
		)
	}

	async run({ params }: { params: VicepresidenciaEjecutivaParams }): Promise<void> {
		const { name, directivaId, cargos } = params
		const uniqueCargos = Array.from(new Set(cargos))
		await this.createVicepresidenciaEjecutivaUseCase.execute({
			name,
			directivaId,
			cargos: uniqueCargos
		})

		const vicepresidenciaEjecutiva = VicepresidenciaEjecutiva.create({
			name,
			directivaId,
			cargos: uniqueCargos
		})

		await this.vicepresidenciaEjecutivaRepository.save(vicepresidenciaEjecutiva.toPrimitive())
	}
}

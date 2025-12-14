import { Vicepresidencia } from '../domain/Vicepresidencia'
import { CreateVicepresidenciaUseCase } from '../domain/CreateVicepresidenciaUseCase'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'

/**
 * @description Use case for creating a new Vicepresidencia entity.
 */
export class VicepresidenciaCreator {
	private readonly createVicepresidenciaUseCase: CreateVicepresidenciaUseCase
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly cargoRepository: CargoRepository

	constructor(dependencies: {
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
		cargoRepository: CargoRepository
	}) {
		this.vicepresidenciaRepository = dependencies.vicepresidenciaRepository
		this.vicepresidenciaEjecutivaRepository = dependencies.vicepresidenciaEjecutivaRepository
		this.cargoRepository = dependencies.cargoRepository

		this.createVicepresidenciaUseCase = new CreateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.vicepresidenciaEjecutivaRepository,
			this.cargoRepository
		)
	}

	/**
	 * @description Executes the Vicepresidencia creation process.
	 * @param {{ params: VicepresidenciaParams }} data The parameters for creating the Vicepresidencia.
	 * @returns {Promise<void>} A promise that resolves when the Vicepresidencia is successfully created.
	 */
	async run({
		params: { name, vicepresidenciaEjecutivaId, cargos }
	}: {
		params: VicepresidenciaParams
	}): Promise<void> {
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

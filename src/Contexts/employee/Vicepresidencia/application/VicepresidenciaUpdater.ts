import { Vicepresidencia } from '../domain/Vicepresidencia'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateVicepresidenciaUseCase } from '../domain/UpdateVicepresidenciaUseCase'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

/**
 * @description Use case for updating an existing Vicepresidencia entity.
 */
export class VicepresidenciaUpdater {
	private readonly updateVicepresidenciaUseCase: UpdateVicepresidenciaUseCase
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

		this.updateVicepresidenciaUseCase = new UpdateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.vicepresidenciaEjecutivaRepository,
			this.cargoRepository
		)
	}

	/**
	 * @description Executes the Vicepresidencia update process.
	 * @param {{ id: string; params: Partial<VicepresidenciaParams> }} data The parameters for updating the Vicepresidencia.
	 * @returns {Promise<void>} A promise that resolves when the Vicepresidencia is successfully updated.
	 * @throws {DepartmentDoesNotExistError} If the Vicepresidencia with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<VicepresidenciaParams> }): Promise<void> {
		const vpeId = new DepartmentId(id)

		const vpe = await this.vicepresidenciaRepository.findById(vpeId.value)
		if (!vpe) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}

		const vpeEntity = Vicepresidencia.fromPrimitives(vpe)
		await this.updateVicepresidenciaUseCase.execute({
			params,
			entity: vpeEntity
		})

		await this.vicepresidenciaRepository.save(vpeEntity.toPrimitive())
	}
}

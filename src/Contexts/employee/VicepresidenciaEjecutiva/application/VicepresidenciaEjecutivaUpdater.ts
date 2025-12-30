import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateVicepresidenciaEjecutivaUseCase } from '../domain/UpdateVicepresidenciaEjecutivaUseCase'
import { VicepresidenciaEjecutiva } from '../domain/VicepresidenciaEjecutiva'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams
} from '../domain/VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../Directiva/domain/entity/Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/repository/CargoRepository'

/**
 * @description Use case for updating an existing VicepresidenciaEjecutiva entity.
 */
export class VicepresidenciaEjecutivaUpdater {
	private readonly updateVicepresidenciaEjecutivaUseCase: UpdateVicepresidenciaEjecutivaUseCase
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	private readonly cargoRepository: CargoRepository

	constructor(dependencies: {
		cargoRepository: CargoRepository
		directivaRepository: DepartmentRepository<DirectivaDto>
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	}) {
		this.vicepresidenciaEjecutivaRepository = dependencies.vicepresidenciaEjecutivaRepository
		this.directivaRepository = dependencies.directivaRepository
		this.cargoRepository = dependencies.cargoRepository

		this.updateVicepresidenciaEjecutivaUseCase = new UpdateVicepresidenciaEjecutivaUseCase(
			this.vicepresidenciaEjecutivaRepository,
			this.directivaRepository,
			this.cargoRepository
		)
	}

	/**
	 * @description Executes the VicepresidenciaEjecutiva update process.
	 * @param {{ id: string; params: Partial<VicepresidenciaEjecutivaParams> }} data The parameters for updating the VicepresidenciaEjecutiva.
	 * @returns {Promise<void>} A promise that resolves when the VicepresidenciaEjecutiva is successfully updated.
	 * @throws {DepartmentDoesNotExistError} If the VicepresidenciaEjecutiva with the provided ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<VicepresidenciaEjecutivaParams> }): Promise<void> {
		const vpeId = new DepartmentId(id)

		const vpe = await this.vicepresidenciaEjecutivaRepository.findById(vpeId.value)
		if (!vpe) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}

		const vpeEntity = VicepresidenciaEjecutiva.fromPrimitives(vpe)
		await this.updateVicepresidenciaEjecutivaUseCase.execute({
			params,
			entity: vpeEntity
		})

		await this.vicepresidenciaEjecutivaRepository.save(vpeEntity.toPrimitive())
	}
}

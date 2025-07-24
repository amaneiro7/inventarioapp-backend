import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateVicepresidenciaEjecutivaUseCase } from '../domain/UpdateVicepresidenciaEjecutivaUseCase'
import { VicepresidenciaEjecutiva } from '../domain/VicepresidenciaEjecutiva'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams
} from '../domain/VicepresidenciaEjecutiva.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class VicepresidenciaEjecutivaUpdater {
	private readonly updateVicepresidenciaEjecutivaUseCase: UpdateVicepresidenciaEjecutivaUseCase
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
		this.updateVicepresidenciaEjecutivaUseCase = new UpdateVicepresidenciaEjecutivaUseCase(
			this.vicepresidenciaEjecutivaRepository,
			this.directivaRepository,
			this.cargoRepository
		)
	}

	async run({ id, params }: { id: string; params: Partial<VicepresidenciaEjecutivaParams> }): Promise<void> {
		const vpeId = new DepartmentId(id)

		const vpe = await this.vicepresidenciaEjecutivaRepository.searchById(vpeId.value)
		if (!vpe) {
			throw new DepartmentDoesNotExistError('La vicepresidenciaEjecutiva')
		}

		const vpeEntity = VicepresidenciaEjecutiva.fromPrimitives(vpe)
		// Se verifica que el departamento nivel 1 exista, y se actualize
		await this.updateVicepresidenciaEjecutivaUseCase.execute({
			params,
			entity: vpeEntity
		})

		await this.vicepresidenciaEjecutivaRepository.save(vpeEntity.toPrimitive())
	}
}

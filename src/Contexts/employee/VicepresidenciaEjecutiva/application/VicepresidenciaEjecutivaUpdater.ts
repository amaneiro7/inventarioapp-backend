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

export class VicepresidenciaEjecutivaUpdater {
	private readonly updateVicepresidenciaEjecutivaUseCase: UpdateVicepresidenciaEjecutivaUseCase
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		this.updateVicepresidenciaEjecutivaUseCase =
			new UpdateVicepresidenciaEjecutivaUseCase(
				this.vicepresidenciaEjecutivaRepository,
				this.directivaRepository
			)
	}

	async run({
		id,
		params
	}: {
		id: string
		params: Partial<VicepresidenciaEjecutivaParams>
	}): Promise<void> {
		const { name, directivaId } = params
		const vpeId = new DepartmentId(id)

		const vpe = await this.vicepresidenciaEjecutivaRepository.searchById(
			vpeId.value
		)
		if (!vpe) {
			throw new DepartmentDoesNotExistError('La vicepresidenciaEjecutiva')
		}

		const vpeEntity = VicepresidenciaEjecutiva.fromPrimitives(vpe)
		// Se verifica que el departamento nivel 1 exista, y se actualize
		await this.updateVicepresidenciaEjecutivaUseCase.execute({
			params: { name, directivaId },
			entity: vpeEntity
		})

		await this.vicepresidenciaEjecutivaRepository.save(
			vpeEntity.toPrimitive()
		)
	}
}

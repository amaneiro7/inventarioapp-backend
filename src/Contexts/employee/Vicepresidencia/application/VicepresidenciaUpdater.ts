import { Vicepresidencia } from '../domain/Vicepresidencia'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateVicepresidenciaUseCase } from '../domain/UpdateVicepresidenciaUseCase'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'
import { type VicepresidenciaEjecutivaDto } from '../../VicepresidenciaEjecutiva/domain/VicepresidenciaEjecutiva.dto'
import { type CargoRepository } from '../../Cargo/domain/CargoRepository'

export class VicepresidenciaUpdater {
	private readonly updateVicepresidenciaUseCase: UpdateVicepresidenciaUseCase
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly cargoRepository: CargoRepository
	) {
		this.updateVicepresidenciaUseCase = new UpdateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.vicepresidenciaEjecutivaRepository,
			this.cargoRepository
		)
	}

	async run({ id, params }: { id: string; params: Partial<VicepresidenciaParams> }): Promise<void> {
		const vpeId = new DepartmentId(id)

		const vpe = await this.vicepresidenciaRepository.searchById(vpeId.value)
		if (!vpe) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}

		const vpeEntity = Vicepresidencia.fromPrimitives(vpe)
		// Se verifica que el departamento nivel 1 exista, y se actualize
		await this.updateVicepresidenciaUseCase.execute({
			params,
			entity: vpeEntity
		})

		await this.vicepresidenciaRepository.save(vpeEntity.toPrimitive())
	}
}

import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { UpdateVicepresidenciaUseCase } from '../domain/UpdateVicepresidenciaUseCase'
import { Vicepresidencia } from '../domain/Vicepresidencia'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'
import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'

export class VicepresidenciaUpdater {
	private readonly updateVicepresidenciaUseCase: UpdateVicepresidenciaUseCase
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		this.updateVicepresidenciaUseCase = new UpdateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.directivaRepository
		)
	}

	async run({ id, params }: { id: string; params: Partial<VicepresidenciaParams> }): Promise<void> {
		const { name, directivaId } = params
		const vpeId = new DepartmentId(id)

		const vpe = await this.vicepresidenciaRepository.searchById(vpeId.value)
		if (!vpe) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}

		const vpeEntity = Vicepresidencia.fromPrimitives(vpe)
		// Se verifica que el departamento nivel 1 exista, y se actualize
		await this.updateVicepresidenciaUseCase.execute({
			params: { name, directivaId },
			entity: vpeEntity
		})

		await this.vicepresidenciaRepository.save(vpeEntity.toPrimitive())
	}
}

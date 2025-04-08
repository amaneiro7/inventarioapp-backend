import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { CreateVicepresidenciaUseCase } from '../domain/CreateVicepresidenciaUseCase'
import { Vicepresidencia } from '../domain/Vicepresidencia'
import { type VicepresidenciaDto, type VicepresidenciaParams } from '../domain/Vicepresidencia.dto'

export class VicepresidenciaCreator {
	private readonly createVicepresidenciaUseCase: CreateVicepresidenciaUseCase
	constructor(
		private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		this.createVicepresidenciaUseCase = new CreateVicepresidenciaUseCase(
			this.vicepresidenciaRepository,
			this.directivaRepository
		)
	}

	async run({ name, directivaId }: VicepresidenciaParams): Promise<void> {
		await this.createVicepresidenciaUseCase.execute({
			name,
			directivaId
		})

		const vicepresidencia = Vicepresidencia.create({
			name,
			directivaId
		})

		await this.vicepresidenciaRepository.save(vicepresidencia.toPrimitive())
	}
}

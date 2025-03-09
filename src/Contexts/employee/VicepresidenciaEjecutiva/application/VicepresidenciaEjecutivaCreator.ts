import { type DirectivaDto } from '../../Directiva/domain/Directiva.dto'
import { DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { CreateVicepresidenciaEjecutivaUseCase } from '../domain/CreateVicepresidenciaEjecutivaUseCase'
import { VicepresidenciaEjecutiva } from '../domain/VicepresidenciaEjecutiva'
import {
	type VicepresidenciaEjecutivaDto,
	type VicepresidenciaEjecutivaParams
} from '../domain/VicepresidenciaEjecutiva.dto'

export class VicepresidenciaEjecutivaCreator {
	private readonly createVicepresidenciaEjecutivaUseCase: CreateVicepresidenciaEjecutivaUseCase
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>,
		private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	) {
		this.createVicepresidenciaEjecutivaUseCase = new CreateVicepresidenciaEjecutivaUseCase(
			this.vicepresidenciaEjecutivaRepository,
			this.directivaRepository
		)
	}

	async run({ name, directivaId }: VicepresidenciaEjecutivaParams): Promise<void> {
		await this.createVicepresidenciaEjecutivaUseCase.execute({
			name,
			directivaId
		})

		const vicepresidenciaEjecutiva = VicepresidenciaEjecutiva.create({
			name,
			directivaId
		})

		await this.vicepresidenciaEjecutivaRepository.save(vicepresidenciaEjecutiva.toPrimitive())
	}
}

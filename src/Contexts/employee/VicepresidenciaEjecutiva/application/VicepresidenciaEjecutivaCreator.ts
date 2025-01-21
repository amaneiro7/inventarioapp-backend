import { DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { DirectivaPrimitives } from '../../Directiva/domain/Directiva'
import { CreateVicepresidenciaEjecutivaUseCase } from '../domain/CreateVicepresidenciaEjecutivaUseCase'
import {
	VicepresidenciaEjecutiva,
	VicepresidenciaEjecutivaPrimitives
} from '../domain/VicepresidenciaEjecutiva'

export class VicepresidenciaEjecutivaCreator {
	private readonly createVicepresidenciaEjecutivaUseCase: CreateVicepresidenciaEjecutivaUseCase
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaPrimitives>,
		private readonly directivaRepository: DepartmentRepository<DirectivaPrimitives>
	) {
		this.createVicepresidenciaEjecutivaUseCase =
			new CreateVicepresidenciaEjecutivaUseCase(
				this.vicepresidenciaEjecutivaRepository,
				this.directivaRepository
			)
	}

	async run({
		name,
		directivaId
	}: Omit<VicepresidenciaEjecutivaPrimitives, 'id'>): Promise<void> {
		await this.createVicepresidenciaEjecutivaUseCase.execute({
			name,
			directivaId
		})

		const vicepresidenciaEjecutiva = VicepresidenciaEjecutiva.create({
			name,
			directivaId
		})

		await this.vicepresidenciaEjecutivaRepository.save(
			vicepresidenciaEjecutiva.toPrimitive()
		)
	}
}

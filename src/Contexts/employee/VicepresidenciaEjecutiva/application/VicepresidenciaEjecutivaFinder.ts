import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { VicepresidenciaEjecutivaDto } from '../domain/VicepresidenciaEjecutiva.dto'

export class VicepresidenciaEjecutivaFinder {
	constructor(
		private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
	) {}

	async run(params: { id: string }): Promise<VicepresidenciaEjecutivaDto> {
		const { id } = params
		const vicepresidenciaEjecutivaId = new DepartmentId(id).value
		const vicepresidenciaEjecutiva =
			await this.vicepresidenciaEjecutivaRepository.searchById(
				vicepresidenciaEjecutivaId
			)

		if (!vicepresidenciaEjecutiva) {
			throw new DepartmentDoesNotExistError('La vicepresidenciaEjecutiva')
		}

		return vicepresidenciaEjecutiva
	}
}

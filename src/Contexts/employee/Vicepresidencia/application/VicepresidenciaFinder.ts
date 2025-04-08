import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { VicepresidenciaDto } from '../domain/Vicepresidencia.dto'

export class VicepresidenciaFinder {
	constructor(private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>) {}

	async run(params: { id: string }): Promise<VicepresidenciaDto> {
		const { id } = params
		const vicepresidenciaId = new DepartmentId(id).value
		const vicepresidencia = await this.vicepresidenciaRepository.searchById(vicepresidenciaId)

		if (!vicepresidencia) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}

		return vicepresidencia
	}
}

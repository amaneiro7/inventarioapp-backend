import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { CentroTrabajoId } from '../domain/CentroTrabajoId'
import { CentroTrabajoDoesNotExistError } from '../domain/CentroTrabajoDoesNotExistError'
import { type CentroTrabajoDto } from '../domain/CentroTrabajo.dto'

export class CentroTrabajoFinder {
	constructor(private readonly centroTrabajoRepository: CentroTrabajoRepository) {}

	async run(params: { id: Primitives<CentroTrabajoId> }): Promise<CentroTrabajoDto> {
		const { id } = params
		const centroTrabajoId = new CentroTrabajoId(id)
		const centroTrabajo = await this.centroTrabajoRepository.searchById(centroTrabajoId.value)

		if (!centroTrabajo) {
			throw new CentroTrabajoDoesNotExistError()
		}

		return centroTrabajo
	}
}

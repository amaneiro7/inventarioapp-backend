import { CentroTrabajoDoesNotExistError } from '../domain/CentroTrabajoDoesNotExistError'
import { CentroTrabajoId } from '../domain/CentroTrabajoId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CentroTrabajoRepository } from '../domain/CentroTrabajoRepository'
import { type CentroTrabajoDto } from '../domain/CentroTrabajo.dto'

/**
 * @description Use case for finding a CentroTrabajo entity by its unique identifier.
 */
export class CentroTrabajoFinder {
	private readonly centroTrabajoRepository: CentroTrabajoRepository

	constructor({ centroTrabajoRepository }: { centroTrabajoRepository: CentroTrabajoRepository }) {
		this.centroTrabajoRepository = centroTrabajoRepository
	}

	/**
	 * @description Executes the CentroTrabajo finding process.
	 * @param {{ id: Primitives<CentroTrabajoId> }} params The parameters for finding the CentroTrabajo.
	 * @returns {Promise<CentroTrabajoDto>} A promise that resolves to the found CentroTrabajo DTO.
	 * @throws {CentroTrabajoDoesNotExistError} If no CentroTrabajo with the provided ID is found.
	 */
	async run({ id }: { id: Primitives<CentroTrabajoId> }): Promise<CentroTrabajoDto> {
		const centroTrabajoId = new CentroTrabajoId(id)
		const centroTrabajo = await this.centroTrabajoRepository.findById(centroTrabajoId.value)

		if (!centroTrabajo) {
			throw new CentroTrabajoDoesNotExistError()
		}

		return centroTrabajo
	}
}

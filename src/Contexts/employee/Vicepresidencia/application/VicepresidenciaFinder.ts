import { VicepresidenciaEjecutivaDoesNotExistError } from '../../VicepresidenciaEjecutiva/domain/errors/VicepresidenciaEjecutivaDoesNotExistError'
import { VicepresidenciaEjecutivaId } from '../../VicepresidenciaEjecutiva/domain/valueObject/VicepresidenciaEjecutivaId'
import { type VicepresidenciaDto } from '../domain/entity/Vicepresidencia.dto'
import { type VicepresidenciaRepository } from '../domain/repository/VicepresidenciaRepository'

/**
 * @description Use case for finding a Vicepresidencia entity by its unique identifier.
 */
export class VicepresidenciaFinder {
	private readonly vicepresidenciaRepository: VicepresidenciaRepository

	constructor({ vicepresidenciaRepository }: { vicepresidenciaRepository: VicepresidenciaRepository }) {
		this.vicepresidenciaRepository = vicepresidenciaRepository
	}

	/**
	 * @description Executes the Vicepresidencia finding process.
	 * @param {{ id: string }} params The parameters for finding the Vicepresidencia.
	 * @returns {Promise<VicepresidenciaDto>} A promise that resolves to the found Vicepresidencia DTO.
	 * @throws {DepartmentDoesNotExistError} If no Vicepresidencia with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<VicepresidenciaDto> {
		const vicepresidenciaId = new VicepresidenciaEjecutivaId(id).value
		const vicepresidencia = await this.vicepresidenciaRepository.findById(vicepresidenciaId)

		if (!vicepresidencia) {
			throw new VicepresidenciaEjecutivaDoesNotExistError(vicepresidenciaId)
		}

		return vicepresidencia
	}
}

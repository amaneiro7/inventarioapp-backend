import { type VicepresidenciaEjecutivaDto } from '../domain/entity/VicepresidenciaEjecutiva.dto'
import { VicepresidenciaEjecutivaDoesNotExistError } from '../domain/errors/VicepresidenciaEjecutivaDoesNotExistError'
import { type VicepresidenciaEjecutivaRepository } from '../domain/repository/VicepresidenciaEjecutivaRepository'
import { VicepresidenciaEjecutivaId } from '../domain/valueObject/VicepresidenciaEjecutivaId'

/**
 * @description Use case for finding a VicepresidenciaEjecutiva entity by its unique identifier.
 */
export class VicepresidenciaEjecutivaFinder {
	private readonly vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository

	constructor({
		vicepresidenciaEjecutivaRepository
	}: {
		vicepresidenciaEjecutivaRepository: VicepresidenciaEjecutivaRepository
	}) {
		this.vicepresidenciaEjecutivaRepository = vicepresidenciaEjecutivaRepository
	}

	/**
	 * @description Executes the VicepresidenciaEjecutiva finding process.
	 * @param {{ id: string }} params The parameters for finding the VicepresidenciaEjecutiva.
	 * @returns {Promise<VicepresidenciaEjecutivaDto>} A promise that resolves to the found VicepresidenciaEjecutiva DTO.
	 * @throws {DepartmentDoesNotExistError} If no VicepresidenciaEjecutiva with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<VicepresidenciaEjecutivaDto> {
		const vicepresidenciaEjecutivaId = new VicepresidenciaEjecutivaId(id).value
		const vicepresidenciaEjecutiva =
			await this.vicepresidenciaEjecutivaRepository.findById(vicepresidenciaEjecutivaId)

		if (!vicepresidenciaEjecutiva) {
			throw new VicepresidenciaEjecutivaDoesNotExistError(vicepresidenciaEjecutivaId)
		}

		return vicepresidenciaEjecutiva
	}
}

import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { type VicepresidenciaEjecutivaDto } from '../domain/VicepresidenciaEjecutiva.dto'

/**
 * @description Use case for finding a VicepresidenciaEjecutiva entity by its unique identifier.
 */
export class VicepresidenciaEjecutivaFinder {
	private readonly vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>

	constructor({
		vicepresidenciaEjecutivaRepository
	}: {
		vicepresidenciaEjecutivaRepository: DepartmentRepository<VicepresidenciaEjecutivaDto>
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
		const vicepresidenciaEjecutivaId = new DepartmentId(id).value
		const vicepresidenciaEjecutiva =
			await this.vicepresidenciaEjecutivaRepository.findById(vicepresidenciaEjecutivaId)

		if (!vicepresidenciaEjecutiva) {
			throw new DepartmentDoesNotExistError('La vicepresidencia ejecutiva')
		}

		return vicepresidenciaEjecutiva
	}
}

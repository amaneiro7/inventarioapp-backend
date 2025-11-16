import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type VicepresidenciaDto } from '../domain/Vicepresidencia.dto'

/**
 * @description Use case for finding a Vicepresidencia entity by its unique identifier.
 */
export class VicepresidenciaFinder {
	private readonly vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>

	constructor({
		vicepresidenciaRepository
	}: {
		vicepresidenciaRepository: DepartmentRepository<VicepresidenciaDto>
	}) {
		this.vicepresidenciaRepository = vicepresidenciaRepository
	}

	/**
	 * @description Executes the Vicepresidencia finding process.
	 * @param {{ id: string }} params The parameters for finding the Vicepresidencia.
	 * @returns {Promise<VicepresidenciaDto>} A promise that resolves to the found Vicepresidencia DTO.
	 * @throws {DepartmentDoesNotExistError} If no Vicepresidencia with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<VicepresidenciaDto> {
		const vicepresidenciaId = new DepartmentId(id).value
		const vicepresidencia = await this.vicepresidenciaRepository.findById(vicepresidenciaId)

		if (!vicepresidencia) {
			throw new DepartmentDoesNotExistError('La vicepresidencia')
		}

		return vicepresidencia
	}
}

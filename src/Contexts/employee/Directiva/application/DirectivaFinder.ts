import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type DirectivaDto } from '../domain/entity/Directiva.dto'

/**
 * @description Use case for finding a Directiva entity by its unique identifier.
 */
export class DirectivaFinder {
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>

	constructor({ directivaRepository }: { directivaRepository: DepartmentRepository<DirectivaDto> }) {
		this.directivaRepository = directivaRepository
	}

	/**
	 * @description Executes the Directiva finding process.
	 * @param {{ id: string }} params The parameters for finding the Directiva.
	 * @returns {Promise<DirectivaDto>} A promise that resolves to the found Directiva DTO.
	 * @throws {DepartmentDoesNotExistError} If no Directiva with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<DirectivaDto> {
		const directivaId = new DepartmentId(id).value
		const directiva = await this.directivaRepository.findById(directivaId)

		if (!directiva) {
			throw new DepartmentDoesNotExistError('La Directiva')
		}

		return directiva
	}
}

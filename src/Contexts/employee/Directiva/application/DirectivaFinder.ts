import { type DepartmentRepository } from '../../IDepartment/DepartmentRepository'
import { DepartmentDoesNotExistError } from '../../IDepartment/DepartmentDoesNotExistError'
import { DepartmentId } from '../../IDepartment/DepartmentId'
import { type DirectivaDto } from '../domain/Directiva.dto'

export class DirectivaFinder {
	private readonly directivaRepository: DepartmentRepository<DirectivaDto>
	constructor({ directivaRepository }: { directivaRepository: DepartmentRepository<DirectivaDto> }) {
		this.directivaRepository = directivaRepository
	}

	async run(params: { id: string }): Promise<DirectivaDto> {
		const { id } = params
		const directivaId = new DepartmentId(id).value
		const directiva = await this.directivaRepository.searchById(directivaId)

		if (!directiva) {
			throw new DepartmentDoesNotExistError('La Directiva')
		}

		return directiva
	}
}

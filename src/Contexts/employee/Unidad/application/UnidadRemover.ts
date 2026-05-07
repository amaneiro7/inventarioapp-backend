import { UnidadId } from '../domain/valueObject/UnidadId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type UnidadRepository } from '../domain/repository/UnidadRepository'

/**
 * @description Use case for removing an Unidad entity.
 */
export class UnidadRemover {
	private readonly unidadRepository: UnidadRepository

	constructor({ unidadRepository }: { unidadRepository: UnidadRepository }) {
		this.unidadRepository = unidadRepository
	}

	/**
	 * @description Executes the Unidad removal process.
	 * @param {{ id: Primitives<UnidadId> }} params The parameters for removing the Unidad.
	 * @returns {Promise<void>} A promise that resolves when the Unidad is successfully removed.
	 */
	async run({ id }: { id: Primitives<UnidadId> }): Promise<void> {
		const unidadId = new UnidadId(id).value
		await this.unidadRepository.remove(unidadId)
	}
}

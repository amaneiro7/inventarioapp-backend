import { UnidadId } from '../domain/valueObject/UnidadId'
import type { Primitives } from '../../../Shared/domain/value-object/Primitives'
import type { UnidadRepository } from '../domain/repository/UnidadRepository'
import type { EventBus } from '../../../Shared/domain/event/EventBus'
import { UnidadDoesNotExistError } from '../domain/errors/UnidadDoesNotExistError'
import { Unidad } from '../domain/entity/Unidad'

/**
 * @description Use case for removing an Unidad entity.
 */
export class UnidadRemover {
	private readonly unidadRepository: UnidadRepository
	private readonly eventBus: EventBus
	constructor({ unidadRepository, eventBus }: { unidadRepository: UnidadRepository; eventBus: EventBus }) {
		this.unidadRepository = unidadRepository
		this.eventBus = eventBus
	}

	/**
	 * @description Executes the Unidad removal process.
	 * @param {{ id: Primitives<UnidadId> }} params The parameters for removing the Unidad.
	 * @returns {Promise<void>} A promise that resolves when the Unidad is successfully removed.
	 */
	async run({ id }: { id: Primitives<UnidadId> }): Promise<void> {
		const unidadId = new UnidadId(id).value
		const unidad = await this.unidadRepository.findById(unidadId)

		if (!unidad) {
			throw new UnidadDoesNotExistError(unidadId)
		}
		const unidadEntity = Unidad.fromPrimitives(unidad)
		unidadEntity.delete()
		await this.unidadRepository.remove(unidadId)
		await this.eventBus.publish(unidadEntity.pullDomainEvents())
	}
}

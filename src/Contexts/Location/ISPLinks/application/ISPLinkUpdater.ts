import { ISPLink } from '../domain/entity/ISPLink'
import { ISPLinkId } from '../domain/valueObject/ISPLinkId'
import { ISPLinkNameUniquenessChecker } from '../domain/service/ISPLinkNameUniquenessChecker'
import { ISPLinkDoesNotExistError } from '../domain/errors/ISPLinkDoesNotExistError'
import { type ISPLinkRepository } from '../domain/repository/ISPLinkRepository'
import { type ISPLinkParams } from '../domain/entity/ISPLink.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to update an existing ISPLink.
 */
export class ISPLinkUpdater {
	private readonly ispLinkRepository: ISPLinkRepository
	private readonly ispLinkNameUniquenessChecker: ISPLinkNameUniquenessChecker

	private readonly eventBus: EventBus
	constructor({
		ispLinkRepository,

		eventBus
	}: {
		ispLinkRepository: ISPLinkRepository

		eventBus: EventBus
	}) {
		this.ispLinkRepository = ispLinkRepository
		this.ispLinkNameUniquenessChecker = new ISPLinkNameUniquenessChecker(ispLinkRepository)

		this.eventBus = eventBus
	}

	/**
	 * Runs the service to update a ispLink.
	 * It validates the existence of the ispLink and updates its name if provided.
	 * @param {{ id: string; params: Partial<ISPLinkParams> }} params - The parameters for updating the ispLink (id, and partial ispLink data).
	 * @returns {Promise<void>} A promise that resolves when the ispLink is successfully updated.
	 * @throws {ISPLinkDoesNotExistError} If the ispLink with the given ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<ISPLinkParams> }): Promise<void> {
		const ispLinkId = new ISPLinkId(id)

		const ispLink = await this.ispLinkRepository.findById(ispLinkId.value)
		if (!ispLink) {
			throw new ISPLinkDoesNotExistError(id)
		}

		const { name } = params
		const ispLinkEntity = ISPLink.fromPrimitives(ispLink)
		const changes: Array<{ field: string; oldValue: unknown; newValue: unknown }> = []
		if (name && ispLinkEntity.nameValue !== name.trim()) {
			await this.ispLinkNameUniquenessChecker.ensureUnique(name, ispLinkEntity.idValue)
			changes.push({
				field: 'name',
				oldValue: ispLinkEntity.nameValue,
				newValue: name
			})
			ispLinkEntity.updateName(name)
		}

		if (changes.length > 0) {
			ispLinkEntity.registerUpdateEvent(changes)
			await this.ispLinkRepository.save(ispLinkEntity.toPrimitives())
			await this.eventBus.publish(ispLinkEntity.pullDomainEvents())
		}
	}
}

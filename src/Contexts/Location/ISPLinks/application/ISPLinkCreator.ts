import { ISPLink } from '../domain/entity/ISPLink'
import { ISPLinkNameUniquenessChecker } from '../domain/service/ISPLinkNameUniquenessChecker'
import { type ISPLinkRepository } from '../domain/repository/ISPLinkRepository'
import { type ISPLinkParams } from '../domain/entity/ISPLink.dto'
import { type StateRepository } from '../../State/domain/repository/StateRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to create a new ISPLink.
 */
export class ISPLinkCreator {
	private readonly ispLinkRepository: ISPLinkRepository
	private readonly ispLinkNameUniquenessChecker: ISPLinkNameUniquenessChecker
	private readonly eventBus: EventBus
	constructor({
		ispLinkRepository,
		eventBus
	}: {
		ispLinkRepository: ISPLinkRepository
		stateRepository: StateRepository
		eventBus: EventBus
	}) {
		this.ispLinkRepository = ispLinkRepository
		this.eventBus = eventBus
		this.ispLinkNameUniquenessChecker = new ISPLinkNameUniquenessChecker(ispLinkRepository)
	}

	/**
	 * Runs the service to create a new ispLink.
	 * It ensures the associated state exists and the ispLink name is unique within that state.
	 * @param {ISPLinkParams} params - The parameters for creating the ispLink (name).
	 * @returns {Promise<void>} A promise that resolves when the ispLink is successfully created.
	 */
	async run(params: ISPLinkParams): Promise<void> {
		const { name } = params
		await Promise.all([this.ispLinkNameUniquenessChecker.ensureUnique(name)])

		const ispLink = ISPLink.create(params)

		await this.ispLinkRepository.save(ispLink.toPrimitives())
		await this.eventBus.publish(ispLink.pullDomainEvents())
	}
}

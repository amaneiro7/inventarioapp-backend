import { ISPLinkId } from '../domain/valueObject/ISPLinkId'
import { ISPLinkDoesNotExistError } from '../domain/errors/ISPLinkDoesNotExistError'
import { type ISPLinkDto } from '../domain/entity/ISPLink.dto'
import { type ISPLinkRepository } from '../domain/repository/ISPLinkRepository'

/**
 * Service to find a ISPLink by its ID.
 */
export class ISPLinkFinder {
	private readonly ispLinkRepository: ISPLinkRepository
	constructor({ ispLinkRepository }: { ispLinkRepository: ISPLinkRepository }) {
		this.ispLinkRepository = ispLinkRepository
	}

	/**
	 * Runs the service to retrieve a ISPLink by its ID.
	 * @param {{ id: string }} params - The parameters containing the ISPLink ID.
	 * @returns {Promise<ISPLinkDto>} A promise that resolves to the ISPLink DTO if found.
	 * @throws {ISPLinkDoesNotExistError} If the ISPLink with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<ISPLinkDto> {
		const { id } = params
		const ispLinkId = new ISPLinkId(id)
		const ISPLink = await this.ispLinkRepository.findById(ispLinkId.value)

		if (!ISPLink) {
			throw new ISPLinkDoesNotExistError(ispLinkId.value)
		}

		return ISPLink
	}
}

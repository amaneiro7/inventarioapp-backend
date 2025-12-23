import { City } from '../domain/entity/City'
import { CityId } from '../domain/valueObject/CityId'
import { CityNameUniquenessChecker } from '../domain/service/BrandNameUniquenessChecker'
import { StateExitanceChecker } from '../domain/service/StateExistanceChecker'
import { CityDoesNotExistError } from '../domain/errors/CityDoesNotExistError'
import { type StateRepository } from '../../State/domain/repository/StateRepository'
import { type CityRepository } from '../domain/repository/CityRepository'
import { type CityParams } from '../domain/entity/City.dto'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to update an existing City.
 */
export class CityUpdater {
	private readonly cityRepository: CityRepository
	private readonly cityNameUniquenessChecker: CityNameUniquenessChecker
	private readonly stateExitanceChecker: StateExitanceChecker
	private readonly eventBus: EventBus
	constructor({
		cityRepository,
		stateRepository,
		eventBus
	}: {
		cityRepository: CityRepository
		stateRepository: StateRepository
		eventBus: EventBus
	}) {
		this.cityRepository = cityRepository
		this.cityNameUniquenessChecker = new CityNameUniquenessChecker(cityRepository)
		this.stateExitanceChecker = new StateExitanceChecker(stateRepository)
		this.eventBus = eventBus
	}

	/**
	 * Runs the service to update a city.
	 * It validates the existence of the city and updates its name and state if provided.
	 * @param {{ id: string; params: Partial<CityParams> }} params - The parameters for updating the city (id, and partial city data).
	 * @returns {Promise<void>} A promise that resolves when the city is successfully updated.
	 * @throws {CityDoesNotExistError} If the city with the given ID does not exist.
	 */
	async run({ id, params }: { id: string; params: Partial<CityParams> }): Promise<void> {
		const cityId = new CityId(id)

		const city = await this.cityRepository.findById(cityId.value)
		if (!city) {
			throw new CityDoesNotExistError(id)
		}

		const { name, stateId } = params
		const cityEntity = City.fromPrimitives(city)
		let hasChanges = false
		if (name && cityEntity.nameValue !== name.trim()) {
			await this.cityNameUniquenessChecker.ensureUnique(name, cityEntity.idValue)
			cityEntity.updateName(name)
			hasChanges = true
		}

		if (stateId && cityEntity.stateValue !== stateId) {
			await this.stateExitanceChecker.ensureExist(stateId)
			cityEntity.updateState(stateId)
			hasChanges = true
		}

		if (hasChanges) {
			await this.cityRepository.save(cityEntity.toPrimitives())
			await this.eventBus.publish(cityEntity.pullDomainEvents())
		}
	}
}

import { City } from '../domain/entity/City'
import { CityNameUniquenessChecker } from '../domain/service/BrandNameUniquenessChecker'
import { StateExitanceChecker } from '../domain/service/StateExistanceChecker'
import { type CityRepository } from '../domain/repository/CityRepository'
import { type CityParams } from '../domain/entity/City.dto'
import { type StateRepository } from '../../State/domain/repository/StateRepository'
import { type EventBus } from '../../../Shared/domain/event/EventBus'

/**
 * Service to create a new City.
 */
export class CityCreator {
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
		this.eventBus = eventBus
		this.cityNameUniquenessChecker = new CityNameUniquenessChecker(cityRepository)
		this.stateExitanceChecker = new StateExitanceChecker(stateRepository)
	}

	/**
	 * Runs the service to create a new city.
	 * It ensures the associated state exists and the city name is unique within that state.
	 * @param {CityParams} params - The parameters for creating the city (name, stateId).
	 * @returns {Promise<void>} A promise that resolves when the city is successfully created.
	 */
	async run(params: CityParams): Promise<void> {
		const { name, stateId } = params
		await Promise.all([
			this.cityNameUniquenessChecker.ensureUnique(name),
			this.stateExitanceChecker.ensureExist(stateId)
		])

		const city = City.create(params)

		await this.cityRepository.save(city.toPrimitives())
		await this.eventBus.publish(city.pullDomainEvents())
	}
}

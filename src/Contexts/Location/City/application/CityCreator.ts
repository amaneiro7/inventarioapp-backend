import { City } from '../domain/City'
import { CityName } from '../domain/CityName'
import { CityState } from '../domain/CityState'

import { type CityRepository } from '../domain/CityRepository'
import { type CityParams } from '../domain/City.dto'
import { type StateRepository } from '../../State/domain/StateRepository'

/**
 * Service to create a new City.
 */
export class CityCreator {
	private readonly cityRepository: CityRepository
	private readonly stateRepository: StateRepository
	constructor({
		cityRepository,
		stateRepository
	}: {
		cityRepository: CityRepository
		stateRepository: StateRepository
	}) {
		this.cityRepository = cityRepository
		this.stateRepository = stateRepository
	}

	/**
	 * Runs the service to create a new city.
	 * It ensures the associated state exists and the city name is unique within that state.
	 * @param {CityParams} params - The parameters for creating the city (name, stateId).
	 * @returns {Promise<void>} A promise that resolves when the city is successfully created.
	 */
	async run(params: CityParams): Promise<void> {
		const { name, stateId } = params
		await CityState.ensureStateExist({ repository: this.stateRepository, stateId })
		await CityName.ensureCityNameDoesNotExist({ name, stateId, repository: this.cityRepository })

		const brand = City.create(params)

		await this.cityRepository.save(brand.toPrimitive())
	}
}

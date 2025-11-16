import { CityDoesNotExistError } from '../domain/CityDoesNotExistError'
import { CityId } from '../domain/CityId'
import { type CityDto } from '../domain/City.dto'
import { type CityRepository } from '../domain/CityRepository'

/**
 * Service to find a City by its ID.
 */
export class CityFinder {
	private readonly cityRepository: CityRepository
	constructor({ cityRepository }: { cityRepository: CityRepository }) {
		this.cityRepository = cityRepository
	}

	/**
	 * Runs the service to retrieve a city by its ID.
	 * @param {{ id: string }} params - The parameters containing the city ID.
	 * @returns {Promise<CityDto>} A promise that resolves to the City DTO if found.
	 * @throws {CityDoesNotExistError} If the city with the given ID does not exist.
	 */
	async run(params: { id: string }): Promise<CityDto> {
		const { id } = params
		const cityId = new CityId(id)
		const city = await this.cityRepository.findById(cityId.value)

		if (!city) {
			throw new CityDoesNotExistError(cityId.value)
		}

		return city
	}
}

import { CityDoesNotExistError } from '../domain/CityDoesNotExistError'
import { CityId } from '../domain/CityId'
import { type CityDto } from '../domain/City.dto'
import { type CityRepository } from '../domain/CityRepository'

export class CityFinder {
	constructor(private readonly cityRepository: CityRepository) {}

	async run(params: { id: string }): Promise<CityDto> {
		const { id } = params
		const cityId = new CityId(id)
		const city = await this.cityRepository.searchById(cityId.value)

		if (!city) {
			throw new CityDoesNotExistError(cityId.value)
		}

		return city
	}
}

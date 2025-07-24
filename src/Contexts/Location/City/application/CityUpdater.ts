import { City } from '../domain/City'
import { CityDoesNotExistError } from '../domain/CityDoesNotExistError'
import { CityId } from '../domain/CityId'
import { CityName } from '../domain/CityName'
import { CityState } from '../domain/CityState'
import { type CityParams } from '../domain/City.dto'
import { type StateRepository } from '../../State/domain/StateRepository'
import { type CityRepository } from '../domain/CityRepository'

export class CityUpdater {
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

	async run({ id, params }: { id: string; params: Partial<CityParams> }): Promise<void> {
		const city = new CityId(id)

		const brand = await this.cityRepository.searchById(city.value)
		if (!brand) {
			throw new CityDoesNotExistError(id)
		}

		const { name, stateId } = params
		const cityEntity = City.fromPrimitives(brand)
		await CityState.updateStateField({ entity: cityEntity, repository: this.stateRepository, stateId })
		await CityName.updateNameField({ entity: cityEntity, repository: this.cityRepository, name })

		await this.cityRepository.save(cityEntity.toPrimitive())
	}
}

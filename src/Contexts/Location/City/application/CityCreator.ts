import { City } from '../domain/City'

import { type CityRepository } from '../domain/CityRepository'
import { type CityParams } from '../domain/City.dto'
import { CityName } from '../domain/CityName'
import { CityState } from '../domain/CityState'
import { StateRepository } from '../../State/domain/StateRepository'

export class CityCreator {
	constructor(
		private readonly cityRepository: CityRepository,
		private readonly stateRepository: StateRepository
	) {}

	async run(params: CityParams): Promise<void> {
		const { name, stateId } = params
		await CityState.ensureStateExist({ repository: this.stateRepository, stateId })
		await CityName.ensureCityNameDoesNotExist({ name, stateId, repository: this.cityRepository })

		const brand = City.create(params)

		await this.cityRepository.save(brand.toPrimitive())
	}
}

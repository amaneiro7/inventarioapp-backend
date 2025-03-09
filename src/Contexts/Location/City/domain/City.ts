import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { CityParams, type CityDto, type CityPrimitives } from './City.dto'
import { CityId } from './CityId'
import { CityName } from './CityName'
import { CityState } from './CityState'

export class City {
	constructor(
		private readonly id: CityId,
		private stateId: CityState,
		private name: CityName
	) {}

	static create(params: CityParams): City {
		const id = CityId.random().value
		return new City(new CityId(id), new CityState(params.stateId), new CityName(params.name))
	}

	updateName(name: CityName['value']): void {
		this.name = new CityName(name)
	}
	updateState(newState: CityState['value']): void {
		this.stateId = new CityState(newState)
	}

	static fromPrimitives(primitives: CityDto): City {
		return new City(new CityId(primitives.id), new CityState(primitives.stateId), new CityName(primitives.name))
	}

	toPrimitive(): CityPrimitives {
		return {
			id: this.idValue,
			stateId: this.stateValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<CityId> {
		return this.id.value
	}

	get nameValue(): Primitives<CityName> {
		return this.name.value
	}

	get stateValue(): Primitives<CityState> {
		return this.stateId.value
	}
}

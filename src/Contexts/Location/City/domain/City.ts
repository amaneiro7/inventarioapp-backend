import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type CityDto, type CityPrimitives } from './City.dto'
import { StateId } from '../../State/domain/StateId'
import { CityId } from './CityId'
import { CityName } from './CityName'

export class City {
	constructor(
		private readonly id: CityId,
		private readonly stateId: StateId,
		private readonly name: CityName
	) {}

	static fromPrimitives(primitives: CityDto): City {
		return new City(
			new CityId(primitives.id),
			new StateId(primitives.stateId),
			new CityName(primitives.name)
		)
	}

	toPrimitive(): CityPrimitives {
		return {
			id: this.idValue,
			stateId: this.stateIdValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<CityId> {
		return this.id.value
	}

	get nameValue(): Primitives<CityName> {
		return this.name.value
	}

	get stateIdValue(): Primitives<StateId> {
		return this.stateId.value
	}
}

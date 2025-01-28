import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type StateDto, type StatePrimitives } from './State.dto'
import { RegionId } from '../../Region/domain/RegionId'
import { StateId } from './StateId'
import { StateName } from './StateName'

export class State {
	constructor(
		private readonly id: StateId,
		private readonly regionId: RegionId,
		private readonly name: StateName
	) {}

	static fromPrimitives(primitives: StateDto): State {
		return new State(
			new StateId(primitives.id),
			new RegionId(primitives.regionId),
			new StateName(primitives.name)
		)
	}

	toPrimitive(): StatePrimitives {
		return {
			id: this.idValue,
			regionId: this.regionIdValue,
			name: this.nameValue
		}
	}

	get idValue(): Primitives<StateId> {
		return this.id.value
	}

	get regionIdValue(): Primitives<RegionId> {
		return this.regionId.value
	}

	get nameValue(): Primitives<StateName> {
		return this.name.value
	}
}

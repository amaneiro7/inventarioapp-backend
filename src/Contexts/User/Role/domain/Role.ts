import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RolePrimitives } from './Role.dto'
import { type RoleId } from './RoleId'
import { type RoleName } from './RoleName'

export class Role {
	constructor(
		private readonly id: RoleId,
		private readonly name: RoleName
	) {}

	get idValue(): Primitives<RoleId> {
		return this.id.value
	}

	get nameValue(): Primitives<RoleName> {
		return this.name.value
	}

	toPrimitives(): RolePrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}
}

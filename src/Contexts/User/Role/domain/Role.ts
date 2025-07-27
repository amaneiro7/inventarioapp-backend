import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type RolePrimitives } from './Role.dto'
import { type RoleId } from './RoleId'
import { type RoleName } from './RoleName'

/**
 * @description Represents the Role domain entity.
 */
export class Role {
	constructor(
		private readonly id: RoleId,
		private readonly name: RoleName
	) {}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the role's ID.
	 * @returns {Primitives<RoleId>}
	 */
	get idValue(): Primitives<RoleId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the role's name.
	 * @returns {Primitives<RoleName>}
	 */
	get nameValue(): Primitives<RoleName> {
		return this.name.value
	}

	/**
	 * @description Converts the Role instance to its primitive representation.
	 * @returns {RolePrimitives} The primitive representation of the role.
	 */
	toPrimitives(): RolePrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}
}

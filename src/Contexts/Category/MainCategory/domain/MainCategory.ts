import { MainCategoryName } from './MainCategoryName'
import { MainCategoryId } from './MainCategoryId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryPrimitives } from './MainCategory.dto'

/**
 * @constant MainCategoryList
 * @description A read-only object mapping main category keys to their corresponding IDs.
 */
export const MainCategoryList = {
	COMPUTER: '1',
	SCREENS: '2',
	PRINTERS: '3',
	PARTS: '4',
	FINANTIALPRINTER: '5'
} as const

/**
 * @class MainCategory
 * @description Represents the Main Category domain entity. This class encapsulates the business logic
 * and ensures the integrity of a main category's data through the use of Value Objects.
 */
export class MainCategory {
	/**
	 * @param {MainCategoryId} id The unique identifier for the main category.
	 * @param {MainCategoryName} name The name of the main category.
	 */
	constructor(
		private readonly id: MainCategoryId,
		private readonly name: MainCategoryName
	) {}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `MainCategory` instance from its primitive representation.
	 * @param {MainCategoryPrimitives} primitives The primitive data of the main category.
	 * @returns {MainCategory} A new `MainCategory` instance.
	 */
	static fromPrimitives(primitives: MainCategoryPrimitives): MainCategory {
		return new MainCategory(new MainCategoryId(primitives.id), new MainCategoryName(primitives.name))
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `MainCategory` instance into its primitive, serializable representation.
	 * @returns {MainCategoryPrimitives} The primitive representation of the main category.
	 */
	toPrimitive(): MainCategoryPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the main category's ID.
	 * @returns {Primitives<MainCategoryId>}
	 */
	get idValue(): Primitives<MainCategoryId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the main category's name.
	 * @returns {Primitives<MainCategoryName>}
	 */
	get nameValue(): Primitives<MainCategoryName> {
		return this.name.value
	}
}

import { MainCategoryName } from './MainCategoryName'
import { MainCategoryId } from './MainCategoryId'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type MainCategoryPrimitives } from './MainCategory.dto'

/**
 * A list of main category identifiers.
 */
export const MainCategoryList = {
	COMPUTER: '1',
	SCREENS: '2',
	PRINTERS: '3',
	PARTS: '4',
	FINANTIALPRINTER: '5'
} as const

/**
 * Represents a main category entity.
 *
 * @class MainCategory
 */
export class MainCategory {
	/**
	 * Creates an instance of MainCategory.
	 * @param {MainCategoryId} id - The unique identifier for the main category.
	 * @param {MainCategoryName} name - The name of the main category.
	 */
	constructor(private readonly id: MainCategoryId, private readonly name: MainCategoryName) {}

	/**
	 * Creates a MainCategory instance from its primitive representation.
	 *
	 * @static
	 * @param {MainCategoryPrimitives} primitives - The primitive data of the main category.
	 * @returns {MainCategory} A new MainCategory instance.
	 */
	static fromPrimitives(primitives: MainCategoryPrimitives): MainCategory {
		return new MainCategory(new MainCategoryId(primitives.id), new MainCategoryName(primitives.name))
	}

	/**
	 * Converts the MainCategory instance to its primitive representation.
	 *
	 * @returns {MainCategoryPrimitives} The primitive data of the main category.
	 */
	toPrimitive(): MainCategoryPrimitives {
		return {
			id: this.id.value,
			name: this.name.value
		}
	}

	/**
	 * Gets the value of the main category's ID.
	 * @type {Primitives<MainCategoryId>}
	 */
	get idValue(): Primitives<MainCategoryId> {
		return this.id.value
	}

	/**
	 * Gets the value of the main category's name.
	 * @type {Primitives<MainCategoryName>}
	 */
	get nameValue(): Primitives<MainCategoryName> {
		return this.name.value
	}
}

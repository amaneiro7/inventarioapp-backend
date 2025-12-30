import { AggregateRoot } from '../../../Shared/domain/AggregateRoot'
import { BrandId } from '../valueObject/BrandId'
import { BrandName } from '../valueObject/BrandName'
import { CategoryId } from '../../../Category/Category/domain/valueObject/CategoryId'
import { BrandCreatedDomainEvent } from '../event/BrandCreatedDomainEvent'
import { BrandRenamedDomainEvent } from '../event/BrandRenamedDomainEvent'
import { BrandRemovedDomainEvent } from '../event/BrandRemovedDomainEvent'
import { BrandCategoryAddedDomainEvent } from '../event/BrandCategoryAddedDomainEvent'
import { BrandCategoryRemovedDomainEvent } from '../event/BrandCategoryRemovedDomainEvent'
import { type BrandDto, type BrandParams, type BrandPrimitives } from './Brand.dto'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @class Brand
 * @description Represents the Brand domain entity. This class encapsulates the business logic
 * and ensures the integrity of a brand's data through the use of Value Objects.
 */
export class Brand extends AggregateRoot {
	constructor(
		private readonly id: BrandId,
		private name: BrandName,
		private categories = new Set<CategoryId>()
	) {
		super()
	}

	/**
	 * @static
	 * @method create
	 * @description Factory method to create a new `Brand` instance.
	 * It generates a random UUID for the brand's ID.
	 * @param {BrandParams} params The parameters required to create a brand (name and category IDs).
	 * @returns {Brand} A new `Brand` instance.
	 */
	static create(params: BrandParams): Brand {
		const id = BrandId.random()
		const name = new BrandName(params.name)
		const categories = new Set(params.categories.map(categoryId => new CategoryId(categoryId)))
		const brand = new Brand(id, name, categories)

		brand.record(
			new BrandCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)

		return brand
	}

	/**
	 * @static
	 * @method fromPrimitives
	 * @description Reconstructs a `Brand` instance from its primitive representation (DTO).
	 * @param {BrandDto} primitives The primitive data of the brand.
	 * @returns {Brand} A `Brand` instance.
	 */
	static fromPrimitives(primitives: BrandDto): Brand {
		const uniqueCategories = new Set(primitives.categories.map(category => new CategoryId(category.id)))
		return new Brand(new BrandId(primitives.id), new BrandName(primitives.name), uniqueCategories)
	}

	/**
	 * @method toPrimitive
	 * @description Converts the `Brand` instance into its primitive, serializable representation.
	 * @returns {BrandPrimitives} The primitive representation of the brand.
	 */
	toPrimitives(): BrandPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue,
			categories: this.categoriesValue
		}
	}

	/**
	 * @method updateName
	 * @description Updates the name of the brand.
	 * @param {BrandName['value']} newName The new name for the brand.
	 */
	updateName(newName: Primitives<BrandName>): void {
		this.name = new BrandName(newName)
		this.record(
			new BrandRenamedDomainEvent({
				aggregateId: this.id.value,
				name: this.name.value
			})
		)
	}

	/**
	 * @description Associates a new category with the brand.
	 * @param {CategoryId} categoryId The category to add.
	 */
	addCategory(categoryId: CategoryId): void {
		if (this.hasCategory(categoryId)) {
			return // Evita duplicados y eventos innecesarios
		}
		this.categories.add(categoryId)
		this.record(
			new BrandCategoryAddedDomainEvent({
				aggregateId: this.id.value,
				categoryId: categoryId.value
			})
		)
	}

	/**
	 * @description Removes a category association from the brand.
	 * @param {CategoryId} categoryId The category to remove.
	 */
	removeCategory(categoryId: CategoryId): void {
		const categoryToRemove = [...this.categories].find(c => c.equals(categoryId))
		if (categoryToRemove) {
			this.categories.delete(categoryToRemove)
			this.record(
				new BrandCategoryRemovedDomainEvent({
					aggregateId: this.id.value,
					categoryId: categoryId.value
				})
			)
		}
	}

	/**
	 * @description Marks the brand as deleted and records the domain event.
	 */
	delete(): void {
		this.record(
			new BrandRemovedDomainEvent({
				aggregateId: this.id.value,
				name: this.name.value
			})
		)
	}

	private hasCategory(categoryId: CategoryId): boolean {
		return [...this.categories].some(c => c.equals(categoryId))
	}

	/**
	 * @getter idValue
	 * @description Returns the primitive value of the brand's ID.
	 * @returns {BrandId['value']}
	 */
	get idValue(): Primitives<BrandId> {
		return this.id.value
	}

	/**
	 * @getter nameValue
	 * @description Returns the primitive value of the brand's name.
	 * @returns {BrandName['value']}
	 */
	get nameValue(): Primitives<BrandName> {
		return this.name.value
	}

	/**
	 * @getter categoriesValue
	 * @description Returns the primitive values of the brand's associated category IDs.
	 * @returns {CategoryId['value'][]}
	 */
	get categoriesValue(): Primitives<CategoryId>[] {
		return Array.from(this.categories).map(c => c.value)
	}
}

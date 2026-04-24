import { AggregateRoot } from '../../../../Shared/domain/AggregateRoot'
import { ISPLinkId } from '../valueObject/ISPLinkId'
import { ISPLinkName } from '../valueObject/ISPLinkName'
import { ISPLinkUpdatedDomainEvent } from '../event/ISPLinkUpdatedDomainEvent'
import { ISPLinkRenamedDomainEvent } from '../event/ISPLinkRenamedDomainEvent'
import { ISPLinkCreatedDomainEvent } from '../event/ISPLinkCreatedDomainEvent'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ISPLinkParams, type ISPLinkDto, type ISPLinkPrimitives } from './ISPLink.dto'

/**
 * Represents a ISPLink domain entity.
 */
export class ISPLink extends AggregateRoot {
	/**
	 * Constructs a ISPLink instance.
	 * @param {ISPLinkId} id - The unique identifier of the isp link.
	 * @param {ISPLinkName} name - The name of the isp link.
	 */
	constructor(
		private readonly id: ISPLinkId,
		private name: ISPLinkName
	) {
		super()
	}

	/**
	 * Creates a new ISPLink instance with a randomly generated ID.
	 * @param {ISPLinkParams} params - The parameters for creating the isp link (name).
	 * @returns {ISPLink} A new ISPLink instance.
	 */
	static create(params: ISPLinkParams): ISPLink {
		const id = ISPLinkId.random()
		const name = new ISPLinkName(params.name)
		const ispLink = new ISPLink(id, name)
		ispLink.record(
			new ISPLinkCreatedDomainEvent({
				aggregateId: id.value,
				name: name.value
			})
		)

		return ispLink
	}

	registerUpdateEvent(changes: Array<{ field: string; oldValue: unknown; newValue: unknown }>): void {
		this.record(
			new ISPLinkUpdatedDomainEvent({
				aggregateId: this.idValue,
				changes
			})
		)
	}

	/**
	 * Updates the name of the isp link.
	 * @param {ISPLinkName['value']} name - The new name for the isp link.
	 */
	updateName(name: ISPLinkName['value']): void {
		const oldName = this.name.value
		this.name = new ISPLinkName(name)
		this.record(
			new ISPLinkRenamedDomainEvent({
				aggregateId: this.idValue,
				oldName,
				newName: this.name.value
			})
		)
	}

	/**
	 * Creates a ISPLink instance from primitive data.
	 * @param {ISPLinkDto} primitives - The primitive data for the isp link.
	 * @returns {ISPLink} A new ISPLink instance.
	 */
	static fromPrimitives(primitives: ISPLinkDto): ISPLink {
		return new ISPLink(new ISPLinkId(primitives.id), new ISPLinkName(primitives.name))
	}

	/**
	 * Converts the ISPLink instance to its primitive representation.
	 * @returns {ISPLinkPrimitives} The primitive representation of the isp link.
	 */
	toPrimitives(): ISPLinkPrimitives {
		return {
			id: this.idValue,
			name: this.nameValue
		}
	}

	/**
	 * Gets the primitive value of the isp link's ID.
	 * @returns {Primitives<ISPLinkId>} The ID value.
	 */
	get idValue(): Primitives<ISPLinkId> {
		return this.id.value
	}

	/**
	 * Gets the primitive value of the isp link's name.
	 * @returns {Primitives<ISPLinkName>} The name value.
	 */
	get nameValue(): Primitives<ISPLinkName> {
		return this.name.value
	}
}

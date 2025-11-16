import { Location } from './Location'
import { LocationNameAlreadyExistError } from './LocationNameAlreadyExistError'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { type LocationRepository } from './LocationRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents the name of a Location as a value object.
 * Encapsulates validation logic for location names and provides methods for updating and ensuring uniqueness.
 */
export class LocationName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3
	private readonly regex = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/

	/**
	 * Creates an instance of LocationName.
	 * @param {string} value - The name of the location.
	 * @throws {InvalidArgumentError} If the provided value is not a valid location name.
	 */
	constructor(readonly value: string) {
		super(value)

		this.ensureIsValid(value)
	}

	/**
	 * Converts the LocationName value object to its primitive string representation.
	 * @returns {string} The string value of the location name.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided name is a valid Location name based on length and character constraints.
	 * @param {string} value - The name to validate.
	 * @throws {InvalidArgumentError} If the value does not meet the length or character requirements.
	 */
	private ensureIsValid(value: string): void {
		if (!this.isValidLength(value)) {
			throw new InvalidArgumentError(
				`Este valor <${value}> no es válido, el nombre del sitio debe entre ${this.NAME_MIN_LENGTH} y ${this.NAME_MAX_LENGTH} carácteres`
			)
		}
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(
				`<${value}> No es un nombre válido, el nombree solo puede contener letras mayúsculas, minúsculas, números y los caracteres especiales ()-,.`
			)
		}
	}

	/**
	 * Checks if the provided name contains only valid characters.
	 * @param {string} name - The name to check.
	 * @returns {boolean} True if the name is valid, false otherwise.
	 */
	private isValid(name: string): boolean {
		return this.regex.test(name)
	}

	/**
	 * Checks if the provided name meets the length requirements.
	 * @param {string} name - The name to check.
	 * @returns {boolean} True if the length is valid, false otherwise.
	 */
	private isValidLength(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	/**
	 * Updates the name field of a Location entity.
	 * @param {{ repository: LocationRepository; name?: Primitives<LocationName>; entity: Location }} params - Parameters for updating the name.
	 * @param {LocationRepository} params.repository - The location repository for uniqueness checks.
	 * @param {Primitives<LocationName>} [params.name] - The new name for the location (optional).
	 * @param {Location} params.entity - The Location entity to update.
	 * @returns {Promise<void>} A promise that resolves when the name is updated or no action is needed.
	 * @throws {LocationNameAlreadyExistError} If the new name already exists for another location.
	 */
	static async updateNameField({
		repository,
		name,
		entity
	}: {
		repository: LocationRepository
		name?: Primitives<LocationName>
		entity: Location
	}): Promise<void> {
		if (name === undefined) {
			return
		}

		if (entity.nameValue === name) {
			return
		}

		await LocationName.ensureNameDoesNotExit({ repository, name })

		entity.updateLocationName(name)
	}

	/**
	 * Ensures that a location name does not already exist.
	 * @param {{ repository: LocationRepository; name: Primitives<LocationName> }} params - Parameters for the uniqueness check.
	 * @param {LocationRepository} params.repository - The location repository to perform the search.
	 * @param {Primitives<LocationName>} params.name - The location name to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the name does not exist, or rejects with LocationNameAlreadyExistError.
	 * @throws {LocationNameAlreadyExistError} If a location with the same name already exists.
	 */
	static async ensureNameDoesNotExit({
		repository,
		name
	}: {
		repository: LocationRepository
		name: Primitives<LocationName>
	}): Promise<void> {
		if (name === null) {
			return
		}

		const isExist = await repository.findByName(name)

		if (isExist !== null) {
			throw new LocationNameAlreadyExistError(name)
		}
	}
}

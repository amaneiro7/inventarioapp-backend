import { Site } from './Site'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * Represents the name of a Site as a value object.
 * Encapsulates validation logic for site names and provides a method for updating.
 */
export class SiteName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3
	private readonly regex = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/

	/**
	 * Creates an instance of SiteName.
	 * @param {string} value - The name of the site.
	 * @throws {InvalidArgumentError} If the provided value is not a valid site name.
	 */ constructor(readonly value: string) {
		super(value)

		this.ensureIsValidSerial(value)
	}

	/**
	 * Converts the SiteName value object to its primitive string representation.
	 * @returns {string} The string value of the site name.
	 */ toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided value is a valid site name based on length and character constraints.
	 * @param {string} value - The name to validate.
	 * @throws {InvalidArgumentError} If the value does not meet the length or character requirements.
	 */ private ensureIsValidSerial(value: string): void {
		if (!this.isValidLength(value)) {
			throw new InvalidArgumentError(
				`El nombre del sitio debe tener al menos ${this.NAME_MIN_LENGTH} caracteres y un máximo de ${this.NAME_MAX_LENGTH} caracteres`
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
	 */ private isValid(name: string): boolean {
		return this.regex.test(name)
	}

	/**
	 * Checks if the provided name meets the length requirements.
	 * @param {string} name - The name to check.
	 * @returns {boolean} True if the length is valid, false otherwise.
	 */ private isValidLength(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	/**
	 * Updates the name field of a Site entity.
	 * @param {{ name?: Primitives<SiteName>; entity: Site }} params - Parameters for updating the name.
	 * @param {Primitives<SiteName>} [params.name] - The new name for the site (optional).
	 * @param {Site} params.entity - The Site entity to update.
	 * @returns {Promise<void>} A promise that resolves when the name is updated or no action is needed.
	 */ static async updateNameField({ name, entity }: { name?: Primitives<SiteName>; entity: Site }): Promise<void> {
		if (name === undefined) {
			return
		}

		if (entity.nameValue === name) {
			return
		}

		entity.updateName(name)
	}
}

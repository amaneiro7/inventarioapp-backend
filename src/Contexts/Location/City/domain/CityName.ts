import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { City } from './City'
import { CityAlreadyExistError } from './CItyAlreadyExistError'
import { CityRepository } from './CityRepository'
import { CityState } from './CityState'

/**
 * Represents the name of a City as a value object.
 * Encapsulates validation logic for city names and provides methods for updating and ensuring uniqueness.
 */
export class CityName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3

	/**
	 * Creates an instance of CityName.
	 * @param {string} value - The name of the city.
	 * @throws {InvalidArgumentError} If the provided value is not a valid city name.
	 */
	constructor(readonly value: string) {
		super(value)
		// Ensure the validity of the City name upon creation.
		this.ensureIsValidName(value)
	}

	/**
	 * Converts the CityName value object to its primitive string representation.
	 * @returns {string} The string value of the city name.
	 */
	toPrimitives(): string {
		return this.value
	}

	/**
	 * Ensures that the provided name is a valid City name based on length constraints.
	 * @param {string} value - The name to validate.
	 * @throws {InvalidArgumentError} If the value does not meet the length requirements.
	 */
	private ensureIsValidName(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid City Name`)
		}
	}

	/**
	 * Checks if the City Name value is valid based on length constraints.
	 * @param {string} value - The name to check.
	 * @returns {boolean} True if the value is valid, false otherwise.
	 */
	private isValid(value: string): boolean {
		return value.length >= this.NAME_MIN_LENGTH && value.length <= this.NAME_MAX_LENGTH
	}

	/**
	 * Updates the name field of a City entity.
	 * @param {{ repository: CityRepository; name?: Primitives<CityName>; entity: City }} params - Parameters for updating the name.
	 * @param {CityRepository} params.repository - The city repository for uniqueness checks.
	 * @param {Primitives<CityName>} [params.name] - The new name for the city (optional).
	 * @param {City} params.entity - The City entity to update.
	 * @returns {Promise<void>} A promise that resolves when the name is updated or no action is needed.
	 * @throws {CityAlreadyExistError} If the new name already exists for another city in the same state.
	 */
	static async updateNameField({
		repository,
		name,
		entity
	}: {
		repository: CityRepository
		name?: Primitives<CityName>
		entity: City
	}): Promise<void> {
		// If no new name is provided, do nothing.
		if (name === undefined) {
			return
		}
		// If the current name and new name are the same, do nothing.
		if (entity.nameValue === name) {
			return
		}
		const stateId = entity.stateValue
		// Check if the new name already exists in the database for the same state.
		await CityName.ensureCityNameDoesNotExist({
			repository,
			name,
			stateId
		})
		// Update the name field of the City entity with the new name.
		entity.updateName(name)
	}

	/**
	 * Ensures that a city name does not already exist for a given state.
	 * @param {{ repository: CityRepository; name: Primitives<CityName>; stateId: Primitives<CityState> }} params - Parameters for the uniqueness check.
	 * @param {CityRepository} params.repository - The city repository to perform the search.
	 * @param {Primitives<CityName>} params.name - The city name to check for existence.
	 * @param {Primitives<CityState>} params.stateId - The state ID to check within.
	 * @returns {Promise<void>} A promise that resolves if the name does not exist, or rejects with CityAlreadyExistError.
	 * @throws {CityAlreadyExistError} If a city with the same name already exists in the specified state.
	 */
	static async ensureCityNameDoesNotExist({
		repository,
		name,
		stateId
	}: {
		repository: CityRepository
		name: Primitives<CityName>
		stateId: Primitives<CityState>
	}): Promise<void> {
		const city = await repository.searchByName(name)
		if (city && city.stateId === stateId) {
			throw new CityAlreadyExistError(name)
		}
	}
}

import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { City } from './City'
import { CityAlreadyExistError } from './CItyAlreadyExistError'
import { CityRepository } from './CityRepository'
import { CityState } from './CityState'

// Define a class for representing a Venezuela States as a value object
export class CityName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3

	constructor(readonly value: string) {
		super(value)
		// Ensure the validity of the State
		this.ensureIsValidName(value)
	}

	// Convert to its primitive representation
	toPrimitives(): string {
		return this.value
	}

	// Ensure the validity of the name
	private ensureIsValidName(value: string): void {
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> is not a valid City Name`)
		}
	}

	// Check if the City Name value is valid
	private isValid(value: string): boolean {
		// Check if the value is in the accepted values
		return value.length >= this.NAME_MIN_LENGTH && value.length <= this.NAME_MAX_LENGTH
	}

	static async updateNameField({
		repository,
		name,
		entity
	}: {
		repository: CityRepository
		name?: Primitives<CityName>
		entity: City
	}): Promise<void> {
		// Si no se ha pasado un nuevo nombre no realiza ninguna acción
		if (name === undefined) {
			return
		}
		// Verifica que si el nombre actual y el nuevo nombre son iguales no realice una busqueda en el repositorio
		if (entity.nameValue === name) {
			return
		}
		const stateId = entity.stateValue
		// Verifica que el nombre no exista en la base de datos, si existe lanza un error {@link CityAlreadyExistError} con el nombre pasado
		await CityName.ensureCityNameDoesNotExist({
			repository,
			name,
			stateId
		})
		// Actualiza el campo nomber de la entidad {@link City} con el nuevo nombre
		entity.updateName(name)
	}

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

import { InvalidArgumentError } from '../../Shared/domain/value-object/InvalidArgumentError'
import { Primitives } from '../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../Shared/domain/value-object/StringValueObject'
import { Brand } from './Brand'
import { BrandAlreadyExistError } from './BrandAlreadyExistError'
import { BrandRepository } from './BrandRepository'

export class BrandName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 2

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidName(value: BrandName['value']): void {
		if (!this.isBrandNameValid(value)) {
			throw new InvalidArgumentError(`<${value}> no es un nombre de marca válido`)
		}
	}

	private isBrandNameValid(name: BrandName['value']): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	static async updateNameField({
		repository,
		name,
		entity
	}: {
		repository: BrandRepository
		name?: Primitives<BrandName>
		entity: Brand
	}): Promise<void> {
		// Si no se ha pasado un nuevo nombre no realiza ninguna acción
		// Verifica que si el nombre actual y el nuevo nombre son iguales no realice una busqueda en el repositorio
		if (name === undefined || entity.nameValue === name) {
			return
		}
		// Verifica que el nombre no exista en la base de datos, si existe lanza un error {@link BrandAlreadyExistError} con el nombre pasado
		await BrandName.ensureBrandNameDoesNotExist({
			repository,
			name
		})
		// Actualiza el campo nomber de la entidad {@link Brand} con el nuevo nombre
		entity.updateName(name)
	}

	static async ensureBrandNameDoesNotExist({
		repository,
		name
	}: {
		repository: BrandRepository
		name: Primitives<BrandName>
	}): Promise<void> {
		// Busca por un modelo con el nombre suministrador en la base de datos
		const brand = await repository.searchByName(name)

		// si el resultado es distinto de nulo significa que existe por ende el nombre no esta disponible
		if (brand) {
			throw new BrandAlreadyExistError(name)
		}
	}
}

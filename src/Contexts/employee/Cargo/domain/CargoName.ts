import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { Cargo } from './Cargo'

export class CargoName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 50
	private readonly NAME_MIN_LENGTH = 15
	private readonly regex = /^[a-zA-Z0-9()\-.,\s]*$/

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidName(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidName(value: string): void {
		if (!this.isValidLength(value)) {
			throw new InvalidArgumentError(
				`El nombre del cargo debe tener al menos ${this.NAME_MIN_LENGTH} caracteres y un máximo de ${this.NAME_MAX_LENGTH} caracteres`
			)
		}
		if (!this.isValid(value)) {
			throw new InvalidArgumentError(`<${value}> no es un nombre de cargo válido`)
		}
	}

	private isValid(name: string): boolean {
		return this.regex.test(name)
	}

	private isValidLength(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	static async updateNameField({ name, entity }: { name?: Primitives<CargoName>; entity: Cargo }): Promise<void> {
		if (!name) return

		if (entity.nameValue === name) return

		entity.updateName(name)
	}
}

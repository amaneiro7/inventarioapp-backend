import { Site } from './Site'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

export class SiteName extends StringValueObject {
	private readonly NAME_MAX_LENGTH = 100
	private readonly NAME_MIN_LENGTH = 3
	private readonly regex = /^[a-zA-ZÀ-ÿ0-9()\-.,\s]*$/

	constructor(readonly value: string) {
		super(value)

		this.ensureIsValidSerial(value)
	}

	toPrimitives(): string {
		return this.value
	}

	private ensureIsValidSerial(value: string): void {
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

	private isValid(name: string): boolean {
		return this.regex.test(name)
	}

	private isValidLength(name: string): boolean {
		return name.length >= this.NAME_MIN_LENGTH && name.length <= this.NAME_MAX_LENGTH
	}

	static async updateNameField({ name, entity }: { name?: Primitives<SiteName>; entity: Site }): Promise<void> {
		if (name === undefined) {
			return
		}

		if (entity.nameValue === name) {
			return
		}

		entity.updateName(name)
	}
}

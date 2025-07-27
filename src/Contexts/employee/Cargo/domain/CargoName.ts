import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { type Cargo } from './Cargo'

/**
 * @description Represents the name of a Cargo.
 */
export class CargoName extends StringValueObject {
	private readonly MIN_LENGTH = 15
	private readonly MAX_LENGTH = 50
	private readonly VALID_REGEX = /^[a-zA-Z0-9()\-.,\s]*$/

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`El nombre del cargo debe tener al menos ${this.MIN_LENGTH} caracteres y un máximo de ${this.MAX_LENGTH} caracteres.`
			)
		}
		if (!this.VALID_REGEX.test(value)) {
			throw new InvalidArgumentError(
				`'${value}' no es un nombre de cargo válido. Solo se permiten caracteres alfanuméricos, paréntesis, guiones, puntos y comas.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating the name field of a cargo.
	 * @param {{ name?: Primitives<CargoName>; entity: Cargo }} params The parameters for updating.
	 */
	static updateNameField({ name, entity }: { name?: Primitives<CargoName>; entity: Cargo }): void {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		entity.updateName(name)
	}
}

import { BooleanValueObject } from '../../../Shared/domain/value-object/BooleanValueObject'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type ModelSeries } from './entity/ModelSeries'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'

/**
 * @description Represents whether a model series is generic (true) or specific (false).
 */
export class Generic extends BooleanValueObject {
	constructor(readonly value: boolean) {
		super(value)
		this.ensureIsValid(value)
	}

	private ensureIsValid(value: boolean): void {
		if (typeof value !== 'boolean') {
			throw new InvalidArgumentError(`El valor <${value}> no es un tipo booleano válido para genérico.`)
		}
	}

	/**
	 * @description Handles the logic for updating the generic field of a model series.
	 * @param {{ generic?: Primitives<Generic>; entity: ModelSeries }} params The parameters for updating.
	 */
	static updateGenericField(params: { generic?: Primitives<Generic>; entity: ModelSeries }): void {
		if (params.generic === undefined || params.entity.genericValue === params.generic) {
			return
		}
		params.entity.updateGeneric(params.generic)
	}
}

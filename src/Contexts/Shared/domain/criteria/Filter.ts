/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Primitives } from '../value-object/Primitives'
import { FilterField } from './FilterField'
import { FilterOperator, Operator } from './FilterOperator'
import { FilterValue } from './FilterValue'

export interface FiltersPrimitives {
	field: Primitives<FilterField>
	operator: Primitives<FilterOperator>
	value: Primitives<FilterValue>
}

export class Filter {
	constructor(
		readonly field: FilterField,
		readonly operator: FilterOperator,
		readonly value: FilterValue
	) {}

	// Esto es simplemente otra forma de instanciar nuestra clase
	// La usamos cuando queremos hacer logica extra en nuestra instanciación
	static fromValues(
		field: FiltersPrimitives['field'],
		operator: FiltersPrimitives['operator'],
		value: FiltersPrimitives['value']
	): Filter {
		return new Filter(
			new FilterField(field),
			// FilterOperator.fromValue(operator),
			new FilterOperator(Operator[operator as keyof typeof Operator]),
			new FilterValue(value)
		)
	}

	toPrimitives(): FiltersPrimitives {
		return {
			field: this.field.value,
			operator: this.operator.value,
			value: this.value.value
		}
	}
}

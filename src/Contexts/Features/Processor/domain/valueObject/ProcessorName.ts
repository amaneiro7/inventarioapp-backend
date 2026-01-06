import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorFrequency } from './ProcessorFrequency'
import { type ProcessorNumberModel } from './ProcessorNumberModel'
import { type ProcessorProductCollection } from './ProcessorProductCollection'

/**
 * @description Represents the full name of a processor, composed of its collection, model, and frequency.
 */
export class ProcessorName {
	readonly value: string

	constructor(
		productCollection: Primitives<ProcessorProductCollection>,
		numberModel: Primitives<ProcessorNumberModel>,
		frequency: Primitives<ProcessorFrequency>
	) {
		this.value = `${productCollection} ${numberModel} CPU @ ${frequency}GHz`
	}

	toPrimitives(): string {
		return this.value
	}
}

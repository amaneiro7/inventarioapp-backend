import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { ProcessorId } from '../../Processor/Processor/domain/ProcessorId'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { ProcessorDoesNotExistError } from '../../Processor/Processor/domain/ProcessorDoesNotExistError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ProcessorRepository } from '../../Processor/Processor/domain/ProcessorRepository'
import { type ProcessorPrimitives } from '../../Processor/Processor/domain/Processor.dto'
import { type DeviceComputer } from './Computer'

/**
 * Represents the processor of a computer, which can be null.
 */
export class ComputerProcessor extends AcceptedNullValueObject<Primitives<ProcessorId>> {
	/**
	 * Creates an instance of ComputerProcessor.
	 * @param value - The ID of the processor, or null.
	 */
	constructor(readonly value: Primitives<ProcessorId> | null) {
		super(value)
		this.ensureIsValidProcessorId(value)
	}

	/**
	 * Converts the processor ID to its primitive value.
	 * @returns The processor ID or null.
	 */
	toPrimitives(): Primitives<ProcessorId> | null {
		return this.value
	}

	private ensureIsValidProcessorId(id: Primitives<ProcessorId> | null): void {
		if (!this.isValid(id)) {
			throw new InvalidArgumentError('ProcessorId is required')
		}
	}

	private isValid(id: Primitives<ProcessorId> | null): boolean {
		if (id === null) return true
		const processorId = new ProcessorId(id)
		return processorId instanceof ProcessorId
	}

	static async updateProcessorField({
		repository,
		processor,
		entity
	}: {
		repository: ProcessorRepository
		processor?: Primitives<ComputerProcessor>
		entity: DeviceComputer
	}): Promise<void> {
		// Si no se ha pasado un nuevo valor del procesador no realiza ninguna acción
		if (processor === undefined) {
			return
		}
		// Verifica que si el valor actual y el nuevo valor son iguales no realice ningún cambio
		if (entity.employeeeValue === processor) {
			return
		}
		// Verifica que el valor del procesador exista en la base de datos, si no existe lanza un error {@link EmployeeDoesNotExistError} con el valor del procesador pasado
		await ComputerProcessor.ensureProcessorExit({ repository, processor })
		// Actualiza el campo valor del procesador de la entidad {@link Device} con el nuevo valor del procesador
		entity.updateProcessor(processor)
	}

	static async ensureProcessorExit({
		repository,
		processor
	}: {
		repository: ProcessorRepository
		processor: Primitives<ComputerProcessor>
	}): Promise<void> {
		// If the valor del procesador is null, it does not exist, so we don't need to do any verification
		if (processor === null) {
			return
		}
		// Searches for a device with the given valor del procesador in the database
		const deviceWithProcessor: ProcessorPrimitives | null = await repository.searchById(
			new ProcessorId(processor).toString()
		)
		// If a device with the given valor del procesador exists, it means that it already exists in the database,
		// so we need to throw a {@link DeviceAlreadyExistError} with the given valor del procesador
		if (deviceWithProcessor === null) {
			throw new ProcessorDoesNotExistError(processor)
		}
	}
}

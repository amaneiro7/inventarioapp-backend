import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ProcessorDto, type ProcessorPrimitives } from './Processor.dto'
import { type ProcessorId } from './ProcessorId'
import { type ProcessorNumberModel } from './ProcessorNumberModel'

/**
 * @abstract
 * @class ProcessorRepository
 * @description Defines the contract for data persistence operations related to the Processor entity.
 */
export abstract class ProcessorRepository {
	/**
	 * @abstract
	 * @method searchAll
	 * @description Retrieves a paginated list of processors.
	 * @param {Criteria} criteria The criteria for filtering and pagination.
	 * @returns {Promise<ResponseDB<ProcessorDto>>} A paginated response of DTOs.
	 */
	abstract searchAll(criteria: Criteria): Promise<ResponseDB<ProcessorDto>>

	/**
	 * @abstract
	 * @method save
	 * @description Creates or updates a processor in the data store.
	 * @param {ProcessorPrimitives} payload The data of the processor to be saved.
	 * @returns {Promise<void>}
	 */
	abstract save(payload: ProcessorPrimitives): Promise<void>

	/**
	 * @abstract
	 * @method findById
	 * @description Finds a single processor by its ID.
	 * @param {Primitives<ProcessorId>} id The ID of the processor to search for.
	 * @returns {Promise<ProcessorDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract findById(id: Primitives<ProcessorId>): Promise<ProcessorDto | null>

	/**
	 * @abstract
	 * @method findByIds
	 * @description Finds multiple processors by their IDs.
	 * @param {Array<ProcessorId['value']>} ids The array of processor IDs to search for.
	 * @returns {Promise<ProcessorDto[]>} A promise that resolves to an array of DTOs.
	 */
	abstract findByIds: (ids: Array<ProcessorId['value']>) => Promise<ProcessorDto[]>

	/**
	 * @abstract
	 * @method searchByNumberModel
	 * @description Finds a single processor by its model number.
	 * @param {Primitives<ProcessorNumberModel>} numberModel The model number to search for.
	 * @returns {Promise<ProcessorDto | null>} A promise that resolves to the DTO if found, or null otherwise.
	 */
	abstract searchByNumberModel(numberModel: Primitives<ProcessorNumberModel>): Promise<ProcessorDto | null>

	/**
	 * @abstract
	 * @method remove
	 * @description Deletes a processor from the data store by its ID.
	 * @param {Primitives<ProcessorId>} id The ID of the processor to remove.
	 * @returns {Promise<void>}
	 */
	abstract remove(id: Primitives<ProcessorId>): Promise<void>
}

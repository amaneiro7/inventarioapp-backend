import { ModelSeriesDoesNotExistError } from '../../../ModelSeries/domain/errors/ModelSeriesDoesNotExistError'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesRepository } from '../../../ModelSeries/domain/repository/ModelSeriesRepository'
import { type ModelSeriesId } from '../../../ModelSeries/domain/valueObject/ModelSeriesId'

export class ModelSeriesExistenceChecker {
	constructor(private readonly repository: ModelSeriesRepository) {}

	/**
	 * Ensures that a modelSeries exists in the repository.
	 * Ignores null or undefined values.
	 * @param {Primitives<ModelSeriesId>} modelSeriesId - The modelSeries ID to check for existence.
	 * @returns {Promise<void>} A promise that resolves if the modelSeries exists.
	 * @throws {ModelSeriesDoesNotExistError} If the modelSeries does not exist.
	 */
	async ensureExist(modelSeriesId: Primitives<ModelSeriesId> | null | undefined): Promise<void> {
		if (modelSeriesId === null || modelSeriesId === undefined) {
			return
		}

		const isModelSeriesExist = await this.repository.findById(modelSeriesId)
		if (!isModelSeriesExist) {
			throw new ModelSeriesDoesNotExistError(modelSeriesId)
		}
	}
}

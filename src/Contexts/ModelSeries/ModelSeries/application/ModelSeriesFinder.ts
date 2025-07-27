import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { type ModelSeriesDto } from '../domain/ModelSeries.dto'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

/**
 * @description Use case for finding a ModelSeries entity by its unique identifier.
 */
export class ModelSeriesFinder {
	private readonly modelSeriesRepository: ModelSeriesRepository

	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesRepository }) {
		this.modelSeriesRepository = modelSeriesRepository
	}

	/**
	 * @description Executes the model series finding process.
	 * @param {{ id: string }} params The parameters for finding the model series.
	 * @returns {Promise<ModelSeriesDto>} A promise that resolves to the found ModelSeries DTO.
	 * @throws {ModelSeriesDoesNotExistError} If no model series with the provided ID is found.
	 */
	async run({ id }: { id: string }): Promise<ModelSeriesDto> {
		const modelSeriesId = new ModelSeriesId(id).value
		const modelSeries = await this.modelSeriesRepository.searchById(modelSeriesId)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(modelSeriesId)
		}

		return modelSeries
	}
}

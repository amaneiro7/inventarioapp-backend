import { ModelSeriesDoesNotExistError } from '../domain/ModelSeriesDoesNotExistError'
import { ModelSeriesId } from '../domain/ModelSeriesId'
import { type ModelSeriesDto } from '../domain/ModelSeries.dto'
import { type ModelSeriesRepository } from '../domain/ModelSeriesRepository'

export class ModelSeriesFinder {
	private readonly modelSeriesRepository: ModelSeriesRepository
	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesRepository }) {
		this.modelSeriesRepository = modelSeriesRepository
	}

	async run(params: { id: string }): Promise<ModelSeriesDto> {
		const { id } = params
		const modelSeriesId = new ModelSeriesId(id).value
		const modelSeries = await this.modelSeriesRepository.searchById(modelSeriesId)

		if (!modelSeries) {
			throw new ModelSeriesDoesNotExistError(modelSeriesId)
		}

		return modelSeries
	}
}

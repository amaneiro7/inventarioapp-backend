import { type ModelSeriesRepository } from './repository/ModelSeriesRepository'
import { ModelSeriesAlreadyExistError } from './errors/ModelSeriesAlreadyExistError'

/**
 * @class ModelSeriesNameUniquenessChecker
 * @description A domain service responsible for checking if a model series name is unique for a given brand.
 */
export class ModelSeriesNameUniquenessChecker {
	/**
	 * @param {ModelSeriesRepository} repository - The repository to search for existing model series.
	 */
	private readonly modelSeriesRepository: ModelSeriesRepository
	constructor({ modelSeriesRepository }: { modelSeriesRepository: ModelSeriesRepository }) {
		this.modelSeriesRepository = modelSeriesRepository
	}

	/**
	 * @method ensureIsUnique
	 * @description Checks if a model name is unique for a specific brand, optionally excluding a given ID.
	 * @param {string} name - The name of the model to check.
	 * @param {string} brandId - The ID of the brand to which the model belongs.
	 * @param {string} [excludeId] - An optional ID to exclude from the check, used when updating an existing model.
	 * @returns {Promise<void>} A promise that resolves if the name is unique.
	 * @throws {ModelSeriesAlreadyExistError} If a model with the same name already exists for the given brand.
	 */
	async ensureIsUnique(name: string, brandId: string, excludeId?: string): Promise<void> {
		const existingModel = await this.modelSeriesRepository.findByNameAndBrand(name, brandId)

		if (existingModel) {
			if (!excludeId || existingModel.id !== excludeId) {
				throw new ModelSeriesAlreadyExistError(name)
			}
		}
	}
}

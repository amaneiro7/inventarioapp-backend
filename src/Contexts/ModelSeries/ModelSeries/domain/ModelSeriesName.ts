import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesRepository } from './ModelSeriesRepository'
import { type BrandId } from '../../../Brand/domain/valueObject/BrandId'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject'
import { type ModelSeries } from './ModelSeries'
import { ModelSeriesAlreadyExistError } from './ModelSeriesAlreadyExistError'

/**
 * @description Represents the name of a model series.
 */
export class ModelSeriesName extends StringValueObject {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 100

	constructor(readonly value: string) {
		super(value)
		this.ensureIsValidName(value)
	}

	private ensureIsValidName(value: string): void {
		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`El nombre del modelo debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}
	}

	/**
	 * @description Handles the logic for updating the name field of a model series.
	 * @param {{ repository: ModelSeriesRepository; name?: Primitives<ModelSeriesName>; entity: ModelSeries }} params The parameters for updating.
	 */
	static async updateNameField({
		repository,
		name,
		entity
	}: {
		repository: ModelSeriesRepository
		name?: Primitives<ModelSeriesName>
		entity: ModelSeries
	}): Promise<void> {
		if (name === undefined || entity.nameValue === name) {
			return
		}
		const brandId = entity.brandIdValue
		await ModelSeriesName.ensureModelNameDoesNotExist({ repository, name, brandId })
		entity.updateName(name)
	}

	/**
	 * @description Checks if a model name already exists in the repository for the given brand.
	 * @param {{ repository: ModelSeriesRepository; name: Primitives<ModelSeriesName>; brandId: Primitives<BrandId> }} params The parameters for the check.
	 * @throws {ModelSeriesAlreadyExistError} If the model name already exists for the same brand.
	 */
	static async ensureModelNameDoesNotExist({
		repository,
		name,
		brandId
	}: {
		repository: ModelSeriesRepository
		name: Primitives<ModelSeriesName>
		brandId: Primitives<BrandId>
	}): Promise<void> {
		const modelSeries = await repository.findByName(name)
		if (!modelSeries) {
			return
		}
		if (modelSeries.brandId !== brandId) {
			return
		}
		throw new ModelSeriesAlreadyExistError(name)
	}
}

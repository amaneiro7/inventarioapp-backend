import { BrandId } from '../../../Brand/domain/valueObject/BrandId'
import { type BrandRepository } from '../../../Brand/domain/repository/BrandRepository'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type ModelSeries } from './entity/ModelSeries'

/**
 * @description Represents the brand of a model series.
 */
export class ModelSeriesBrand extends BrandId {
	/**
	 * @description Handles the logic for updating the brand field of a model series.
	 * @param {{ repository: BrandRepository; brandId?: Primitives<BrandId>; entity: ModelSeries }} params The parameters for updating.
	 */
	static async updateBrandField(params: {
		repository: BrandRepository
		brandId?: Primitives<BrandId>
		entity: ModelSeries
	}): Promise<void> {
		if (params.brandId === undefined || params.entity.brandIdValue === params.brandId) {
			return
		}
		await this.ensureBrandExist({ repository: params.repository, brandId: params.brandId })
		params.entity.updateBrandId(params.brandId)
	}

	/**
	 * @description Ensures that the specified brand exists in the repository.
	 * @param repository The repository to search in.
	 * @param brandId The ID of the brand to check.
	 * @throws {Error} If the brand does not exist.
	 */
	static async ensureBrandExist({
		repository,
		brandId
	}: {
		repository: BrandRepository
		brandId: Primitives<BrandId>
	}): Promise<void> {
		const isBrandExist = await repository.findById(brandId)
		if (!isBrandExist) {
			throw new Error('La marca no existe.')
		}
	}
}

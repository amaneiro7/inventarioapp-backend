import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { type BrandPrimitives } from '../domain/Brand'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandFinder {
	constructor(private readonly brandRepository: BrandRepository) {}

	async run(params: { id: string }): Promise<BrandPrimitives> {
		const { id } = params
		const brandId = new BrandId(id)
		const brand = await this.brandRepository.searchById(brandId.value)

		if (brand === null) {
			throw new BrandDoesNotExistError(brandId.value)
		}

		return brand
	}
}

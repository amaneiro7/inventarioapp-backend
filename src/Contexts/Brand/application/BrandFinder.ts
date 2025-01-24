import { type BrandDto } from '../domain/Brand.dto'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandFinder {
	constructor(private readonly brandRepository: BrandRepository) {}

	async run(params: { id: string }): Promise<BrandDto> {
		const { id } = params
		const brandId = new BrandId(id)
		const brand = await this.brandRepository.searchById(brandId.value)

		if (!brand) {
			throw new BrandDoesNotExistError(brandId.value)
		}

		return brand
	}
}

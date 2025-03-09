import { Brand } from '../domain/Brand'
import { BrandAlreadyExistError } from '../domain/BrandAlreadyExistError'
import { type BrandRepository } from '../domain/BrandRepository'
import { type BrandParams } from '../domain/Brand.dto'

export class BrandCreator {
	constructor(private readonly brandRepository: BrandRepository) {}

	async run(params: BrandParams): Promise<void> {
		await this.ensureBrandDoesNotExist(params.name)

		const brand = Brand.create(params)

		await this.brandRepository.save(brand.toPrimitive())
	}

	private async ensureBrandDoesNotExist(name: BrandParams['name']): Promise<void> {
		if ((await this.brandRepository.searchByName(name)) !== null) {
			throw new BrandAlreadyExistError(name)
		}
	}
}

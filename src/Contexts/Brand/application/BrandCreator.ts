import { Brand } from '../domain/Brand'
import { BrandName } from '../domain/BrandName'
import { type BrandRepository } from '../domain/BrandRepository'
import { type BrandParams } from '../domain/Brand.dto'

export class BrandCreator {
	constructor(private readonly brandRepository: BrandRepository) {}

	async run(params: BrandParams): Promise<void> {
		await BrandName.ensureBrandNameDoesNotExist({ name: params.name, repository: this.brandRepository })

		const brand = Brand.create(params).toPrimitive()

		await this.brandRepository.save(brand)
	}
}

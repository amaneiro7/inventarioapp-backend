import { Brand } from '../domain/Brand'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { BrandName } from '../domain/BrandName'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandUpdater {
	constructor(private readonly brandRepository: BrandRepository) {}

	async run(params: { id: string; newName: string }): Promise<void> {
		const { id, newName } = params
		const brandId = new BrandId(id)

		const brand = await this.brandRepository.searchById(brandId.value)
		if (!brand) {
			throw new BrandDoesNotExistError(id)
		}

		const brandEntity = Brand.fromPrimitives(brand)
		await BrandName.updateNameField({ entity: brandEntity, repository: this.brandRepository, name: newName })

		await this.brandRepository.save(brandEntity.toPrimitive())
	}
}

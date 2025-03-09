import { Brand } from '../domain/Brand'
import { BrandAlreadyExistError } from '../domain/BrandAlreadyExistError'
import { BrandDoesNotExistError } from '../domain/BrandDoesNotExistError'
import { BrandId } from '../domain/BrandId'
import { type BrandName } from '../domain/BrandName'
import { type BrandRepository } from '../domain/BrandRepository'

export class BrandUpdater {
	constructor(private readonly brandRepository: BrandRepository) {}

	async run(params: { id: string; newName: string }): Promise<void> {
		const { id, newName } = params
		const brandId = new BrandId(id)

		const brand = await this.brandRepository.searchById(brandId.value)
		if (!brand) {
			throw new BrandDoesNotExistError(newName)
		}

		const brandEntity = Brand.fromPrimitives(brand)
		await this.ensureBrandDoesNotExist(newName, brandEntity)

		await this.brandRepository.save(brandEntity.toPrimitive())
	}

	private async ensureBrandDoesNotExist(name: BrandName['value'], entity: Brand): Promise<void> {
		if (!(await this.brandRepository.searchByName(name))) {
			throw new BrandAlreadyExistError(name)
		}
		entity.updateName(name)
	}
}

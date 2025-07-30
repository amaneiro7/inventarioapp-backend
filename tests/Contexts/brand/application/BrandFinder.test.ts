import { BrandFinder } from '../../../../src/Contexts/Brand/application/BrandFinder'
import { BrandRepository } from '../../../../src/Contexts/Brand/domain/BrandRepository'
import { BrandDoesNotExistError } from '../../../../src/Contexts/Brand/domain/BrandDoesNotExistError'
import { BrandId } from '../../../../src/Contexts/Brand/domain/BrandId'

describe('BrandFinder', () => {
	let brandRepository: jest.Mocked<BrandRepository>
	let brandFinder: BrandFinder

	beforeEach(() => {
		brandRepository = {
			save: jest.fn(),
			searchAll: jest.fn(),
			searchById: jest.fn(),
			searchByName: jest.fn(),
			remove: jest.fn()
		}
		brandFinder = new BrandFinder({ brandRepository })
	})

	it('should find an existing brand successfully', async () => {
		const brandId = BrandId.random().value
		const mockBrand = {
			id: brandId,
			name: 'Test Brand',
			categories: []
		}
		brandRepository.searchById.mockResolvedValue(mockBrand)

		const foundBrand = await brandFinder.run({ id: brandId })

		expect(brandRepository.searchById).toHaveBeenCalledWith(brandId)
		expect(foundBrand).toEqual(mockBrand)
	})

	it('should throw BrandDoesNotExistError if brand is not found', async () => {
		const brandId = BrandId.random().value
		brandRepository.searchById.mockResolvedValue(null)

		await expect(brandFinder.run({ id: brandId })).rejects.toThrow(BrandDoesNotExistError)
		expect(brandRepository.searchById).toHaveBeenCalledWith(brandId)
	})

	it('should throw InvalidArgumentError for an invalid UUID', async () => {
		const invalidId = 'invalid-uuid'

		await expect(brandFinder.run({ id: invalidId })).rejects.toThrow(`<${invalidId}> is not valid <BrandId>`)
		expect(brandRepository.searchById).not.toHaveBeenCalled()
	})
})

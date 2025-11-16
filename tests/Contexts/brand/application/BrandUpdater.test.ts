import { BrandUpdater } from '../../../../src/Contexts/Brand/application/BrandUpdater'
import { BrandRepository } from '../../../../src/Contexts/Brand/domain/BrandRepository'
import { CategoryRepository } from '../../../../src/Contexts/Category/Category/domain/CategoryRepository'
import { BrandDoesNotExistError } from '../../../../src/Contexts/Brand/domain/BrandDoesNotExistError'
import { BrandAlreadyExistError } from '../../../../src/Contexts/Brand/domain/BrandAlreadyExistError'
import { CategoryDoesNotExistError } from '../../../../src/Contexts/Category/Category/domain/CategoryDoesNotExistError'
import { Brand } from '../../../../src/Contexts/Brand/domain/Brand'
import { BrandId } from '../../../../src/Contexts/Brand/domain/BrandId'
import { BrandName } from '../../../../src/Contexts/Brand/domain/BrandName'

describe('BrandUpdater', () => {
	let brandRepository: jest.Mocked<BrandRepository>
	let categoryRepository: jest.Mocked<CategoryRepository>
	let brandUpdater: BrandUpdater

	beforeEach(() => {
		brandRepository = {
			save: jest.fn(),
			searchAll: jest.fn(),
			findById: jest.fn(),
			findByName: jest.fn(),
			remove: jest.fn()
		}
		categoryRepository = {
			save: jest.fn(),
			searchAll: jest.fn(),
			findById: jest.fn(),
			findByName: jest.fn(),
			remove: jest.fn()
		}
		brandUpdater = new BrandUpdater({ brandRepository, categoryRepository })
	})

	it("should update a brand's name successfully", async () => {
		const brandId = BrandId.random().value
		const existingBrand = {
			id: brandId,
			name: 'Old Name',
			categories: []
		}
		const newName = 'New Name'

		brandRepository.findById.mockResolvedValue(existingBrand)
		// No need to mock BrandName.updateNameField, let it execute naturally

		await brandUpdater.run({ id: brandId, params: { name: newName } })

		expect(brandRepository.findById).toHaveBeenCalledWith(brandId)
		expect(brandRepository.save).toHaveBeenCalledTimes(1)
		expect(brandRepository.save.mock.calls[0][0].name).toBe(newName)
	})

	it("should update a brand's categories successfully", async () => {
		const brandId = BrandId.random().value
		const existingBrand = {
			id: brandId,
			name: 'Test Brand',
			categories: []
		}
		const newCategories = ['cat-id-1', 'cat-id-2']

		brandRepository.findById.mockResolvedValue(existingBrand)
		categoryRepository.findById.mockResolvedValue({ id: 'cat-id-1' } as any)
		categoryRepository.findById.mockResolvedValueOnce({ id: 'cat-id-2' } as any)

		await brandUpdater.run({ id: brandId, params: { categories: newCategories } })

		expect(brandRepository.findById).toHaveBeenCalledWith(brandId)
		expect(categoryRepository.findById).toHaveBeenCalledWith('cat-id-1')
		expect(categoryRepository.findById).toHaveBeenCalledWith('cat-id-2')
		expect(brandRepository.save).toHaveBeenCalledTimes(1)
		expect(brandRepository.save.mock.calls[0][0].categories).toEqual(expect.arrayContaining(newCategories))
	})

	it('should update both name and categories successfully', async () => {
		const brandId = BrandId.random().value
		const existingBrand = {
			id: brandId,
			name: 'Old Name',
			categories: []
		}
		const newName = 'New Name'
		const newCategories = ['cat-id-1']

		brandRepository.findById.mockResolvedValue(existingBrand)
		// No need to mock BrandName.updateNameField, let it execute naturally
		categoryRepository.findById.mockResolvedValue({ id: 'cat-id-1' } as any)

		await brandUpdater.run({ id: brandId, params: { name: newName, categories: newCategories } })

		expect(brandRepository.findById).toHaveBeenCalledWith(brandId)
		expect(brandRepository.save).toHaveBeenCalledTimes(1)
		const savedBrand = brandRepository.save.mock.calls[0][0]
		expect(savedBrand.name).toBe(newName)
		expect(savedBrand.categories).toEqual(expect.arrayContaining(newCategories))
	})

	it('should throw BrandDoesNotExistError if brand to update does not exist', async () => {
		const brandId = BrandId.random().value
		brandRepository.findById.mockResolvedValue(null)

		await expect(brandUpdater.run({ id: brandId, params: { name: 'Any' } })).rejects.toThrow(BrandDoesNotExistError)
		expect(brandRepository.findById).toHaveBeenCalledWith(brandId)
		expect(brandRepository.save).not.toHaveBeenCalled()
	})

	it('should throw BrandAlreadyExistError if new name conflicts', async () => {
		const brandId = BrandId.random().value
		const existingBrand = {
			id: brandId,
			name: 'Old Name',
			categories: []
		}
		const newName = 'Conflicting Name'

		brandRepository.findById.mockResolvedValue(existingBrand)
		jest.spyOn(BrandName, 'updateNameField').mockRejectedValue(new BrandAlreadyExistError(newName))

		await expect(brandUpdater.run({ id: brandId, params: { name: newName } })).rejects.toThrow(
			BrandAlreadyExistError
		)
		expect(brandRepository.save).not.toHaveBeenCalled()
	})

	it('should throw CategoryDoesNotExistError if a new category does not exist', async () => {
		const brandId = BrandId.random().value
		const existingBrand = {
			id: brandId,
			name: 'Test Brand',
			categories: []
		}
		const newCategories = ['valid-cat', 'invalid-cat']

		brandRepository.findById.mockResolvedValue(existingBrand)
		jest.spyOn(BrandName, 'updateNameField').mockResolvedValue(undefined) // Mock to prevent name validation from interfering
		categoryRepository.findById.mockImplementation(async (id: string) => {
			if (id === 'valid-cat') {
				return { id: 'valid-cat' } as any
			}
			return null
		})

		await expect(brandUpdater.run({ id: brandId, params: { categories: newCategories } })).rejects.toThrow(
			CategoryDoesNotExistError
		)
		expect(brandRepository.save).not.toHaveBeenCalled()
	})

	it('should not save if no changes are made', async () => {
		const brandId = BrandId.random().value
		const existingBrand = {
			id: brandId,
			name: 'Same Name',
			categories: []
		}

		brandRepository.findById.mockResolvedValue(existingBrand)

		await brandUpdater.run({ id: brandId, params: { name: 'Same Name' } })

		expect(brandRepository.save).not.toHaveBeenCalled()
	})
})

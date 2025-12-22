import { BrandCreator } from '../../../../src/Contexts/Brand/application/BrandCreator'
import { BrandRepository } from '../../../../src/Contexts/Brand/domain/BrandRepository'
import { CategoryRepository } from '../../../../src/Contexts/Category/Category/domain/repository/CategoryRepository'
import { BrandAlreadyExistError } from '../../../../src/Contexts/Brand/domain/BrandAlreadyExistError'
import { CategoryDoesNotExistError } from '../../../../src/Contexts/Category/Category/domain/errors/CategoryDoesNotExistError'
import { BrandName } from '../../../../src/Contexts/Brand/domain/BrandName'

describe('BrandCreator', () => {
	let brandRepository: jest.Mocked<BrandRepository>
	let categoryRepository: jest.Mocked<CategoryRepository>
	let brandCreator: BrandCreator

	beforeEach(() => {
		brandRepository = {
			save: jest.fn(),
			searchAll: jest.fn(),
			findById: jest.fn(),
			findByName: jest.fn(),
			remove: jest.fn()
		}
		categoryRepository = {
			searchAll: jest.fn(),
			findById: jest.fn(),
			findByName: jest.fn()
		}
		brandCreator = new BrandCreator({ brandRepository, categoryRepository })
	})

	it('should create a brand successfully with categories', async () => {
		const brandParams = {
			name: 'Test Brand',
			categories: ['category-id-1', 'category-id-2']
		}

		// Mock BrandName.ensureBrandNameDoesNotExist to resolve (name does not exist)
		jest.spyOn(BrandName, 'ensureBrandNameDoesNotExist').mockResolvedValue(undefined)

		// Mock categoryRepository.findById to return a category for each ID
		categoryRepository.findById.mockImplementation(async (id: string) => {
			if (id === 'category-id-1' || id === 'category-id-2') {
				return { id, name: `Category ${id}` }
			}
			return null
		})

		await brandCreator.run(brandParams)

		// Expect BrandName.ensureBrandNameDoesNotExist to have been called
		expect(BrandName.ensureBrandNameDoesNotExist).toHaveBeenCalledWith({
			name: brandParams.name,
			repository: brandRepository
		})

		// Expect categoryRepository.findById to have been called for each category
		expect(categoryRepository.findById).toHaveBeenCalledWith('category-id-1')
		expect(categoryRepository.findById).toHaveBeenCalledWith('category-id-2')
		expect(categoryRepository.findById).toHaveBeenCalledTimes(2)

		// Expect brandRepository.save to have been called with the correct brand data
		expect(brandRepository.save).toHaveBeenCalledTimes(1)
		const savedBrand = brandRepository.save.mock.calls[0][0]
		expect(savedBrand.name).toBe(brandParams.name)
		expect(savedBrand.categories).toEqual(expect.arrayContaining(brandParams.categories))
		expect(savedBrand.id).toBeDefined() // ID should be generated
	})

	it('should create a brand successfully without categories', async () => {
		const brandParams = {
			name: 'Another Brand',
			categories: []
		}

		jest.spyOn(BrandName, 'ensureBrandNameDoesNotExist').mockResolvedValue(undefined)
		categoryRepository.findById.mockResolvedValue(null) // Should not be called

		await brandCreator.run(brandParams)

		expect(BrandName.ensureBrandNameDoesNotExist).toHaveBeenCalledWith({
			name: brandParams.name,
			repository: brandRepository
		})
		expect(categoryRepository.findById).not.toHaveBeenCalled()
		expect(brandRepository.save).toHaveBeenCalledTimes(1)
		const savedBrand = brandRepository.save.mock.calls[0][0]
		expect(savedBrand.name).toBe(brandParams.name)
		expect(savedBrand.categories).toEqual([])
	})

	it('should throw BrandAlreadyExistError if brand name already exists', async () => {
		const brandParams = {
			name: 'Existing Brand',
			categories: []
		}

		// Mock BrandName.ensureBrandNameDoesNotExist to throw an error
		jest.spyOn(BrandName, 'ensureBrandNameDoesNotExist').mockRejectedValue(
			new BrandAlreadyExistError(brandParams.name)
		)

		await expect(brandCreator.run(brandParams)).rejects.toThrow(BrandAlreadyExistError)
		expect(brandRepository.save).not.toHaveBeenCalled()
		expect(categoryRepository.findById).not.toHaveBeenCalled() // Should not be called if name validation fails first
	})

	it('should throw CategoryDoesNotExistError if a category does not exist', async () => {
		const brandParams = {
			name: 'Brand with Invalid Category',
			categories: ['valid-category-id', 'invalid-category-id']
		}

		jest.spyOn(BrandName, 'ensureBrandNameDoesNotExist').mockResolvedValue(undefined)

		categoryRepository.findById.mockImplementation(async (id: string) => {
			if (id === 'valid-category-id') {
				return { id, name: 'Valid Category' } as any
			}
			return null // For 'invalid-category-id'
		})

		await expect(brandCreator.run(brandParams)).rejects.toThrow(CategoryDoesNotExistError)
		expect(categoryRepository.findById).toHaveBeenCalledWith('valid-category-id')
		expect(categoryRepository.findById).toHaveBeenCalledWith('invalid-category-id')
		expect(brandRepository.save).not.toHaveBeenCalled()
	})

	it('should handle duplicate categories gracefully', async () => {
		const brandParams = {
			name: 'Brand with Duplicate Categories',
			categories: ['category-id-1', 'category-id-2', 'category-id-1'] // Duplicate
		}

		jest.spyOn(BrandName, 'ensureBrandNameDoesNotExist').mockResolvedValue(undefined)
		categoryRepository.findById.mockImplementation(async (id: string) => {
			if (id === 'category-id-1' || id === 'category-id-2') {
				return { id, name: `Category ${id}` } as any
			}
			return null
		})

		await brandCreator.run(brandParams)

		// categoryRepository.findById should still be called for unique categories
		expect(categoryRepository.findById).toHaveBeenCalledWith('category-id-1')
		expect(categoryRepository.findById).toHaveBeenCalledWith('category-id-2')
		expect(categoryRepository.findById).toHaveBeenCalledTimes(2) // Only unique calls

		expect(brandRepository.save).toHaveBeenCalledTimes(1)
		const savedBrand = brandRepository.save.mock.calls[0][0]
		// Ensure categories are saved without duplicates
		expect(savedBrand.categories).toEqual(expect.arrayContaining(['category-id-1', 'category-id-2']))
		expect(savedBrand.categories.length).toBe(2)
	})
})

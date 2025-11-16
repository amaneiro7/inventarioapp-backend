import { BrandFinderAll } from '../../../../src/Contexts/Brand/application/BrandFinderAll'
import { BrandRepository } from '../../../../src/Contexts/Brand/domain/BrandRepository'
import { Criteria } from '../../../../src/Contexts/Shared/domain/criteria/Criteria'
import { Order } from '../../../../src/Contexts/Shared/domain/criteria/Order'
import { Filters } from '../../../../src/Contexts/Shared/domain/criteria/Filters'

describe('BrandFinderAll', () => {
	let brandRepository: jest.Mocked<BrandRepository>
	let brandFinderAll: BrandFinderAll

	beforeEach(() => {
		brandRepository = {
			save: jest.fn(),
			searchAll: jest.fn(),
			findById: jest.fn(),
			findByName: jest.fn(),
			remove: jest.fn()
		}
		brandFinderAll = new BrandFinderAll({ brandRepository })
	})

	it('should return all brands without criteria', async () => {
		const mockBrands = [
			{ id: 'id1', name: 'Brand A', categories: [] },
			{ id: 'id2', name: 'Brand B', categories: [] }
		]
		const criteria = Criteria.fromPrimitives([], '', 'asc', null, null)
		brandRepository.searchAll.mockResolvedValue({ data: mockBrands, total: mockBrands.length })

		const result = await brandFinderAll.run(criteria)

		expect(brandRepository.searchAll).toHaveBeenCalledWith(criteria)
		expect(result.data).toEqual(mockBrands)
		expect(result.info.total).toBe(mockBrands.length)
		expect(result.info.totalPage).toBe(1) // Assuming 1 page for all brands
		expect(result.info.page).toBe(1) // Default page is 1
	})

	it('should return brands with pagination and filters', async () => {
		const mockBrands = [{ id: 'id1', name: 'Brand A', categories: [] }]
		const filters = Filters.fromValues([{ field: 'name', operator: 'CONTAINS', value: 'Brand A' }])
		const criteria = Criteria.fromPrimitives(filters.toPrimitives(), 'name', 'asc', 1, 0)
		brandRepository.searchAll.mockResolvedValue({ data: mockBrands, total: 1 })

		const result = await brandFinderAll.run(criteria)

		expect(brandRepository.searchAll).toHaveBeenCalledWith(criteria)
		expect(result.data).toEqual(mockBrands)
		expect(result.info.total).toBe(1)
		expect(result.info.totalPage).toBe(1)
		expect(result.info.page).toBe(1) // Page number starts from 0 in criteria, but GetAllBaseService returns 1-indexed page
	})

	it('should return empty array if no brands found', async () => {
		const criteria = Criteria.fromPrimitives([], '', 'asc', null, null)
		brandRepository.searchAll.mockResolvedValue({ data: [], total: 0 })

		const result = await brandFinderAll.run(criteria)

		expect(brandRepository.searchAll).toHaveBeenCalledWith(criteria)
		expect(result.data).toEqual([])
		expect(result.info.total).toBe(0)
		expect(result.info.totalPage).toBe(1)
		expect(result.info.page).toBe(1)
	})
})

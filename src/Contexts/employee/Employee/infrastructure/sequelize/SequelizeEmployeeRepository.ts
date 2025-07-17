import { CriteriaToSequelizeConverter } from '../../../../Shared/infrastructure/criteria/CriteriaToSequelizeConverter'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { type EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../../domain/Repository/EmployeeRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type EmployeePrimitives, type EmployeeDto } from '../../domain/entity/Employee.dto'

/**
 * @class SequelizeEmployeeRepository
 * @extends CriteriaToSequelizeConverter
 * @implements {EmployeeRepository}
 * @description Concrete implementation of the EmployeeRepository using Sequelize.
 * Handles data persistence for Employee entities, including caching mechanisms.
 */
export class SequelizeEmployeeRepository extends CriteriaToSequelizeConverter implements EmployeeRepository {
	private readonly cacheKey: string = 'employees'
	constructor(private readonly cache: CacheService) {
		super()
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Employee entities based on the provided criteria.
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<EmployeeDto>>} A promise that resolves to a paginated response containing Employee DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)
		const opt = EmployeeAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<EmployeeDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method matching
	 * @description Retrieves a paginated list of Employee entities that match specific criteria,
	 * often used for more complex filtering logic defined in EmployeeAssociation.
	 * Utilizes caching for improved performance.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<EmployeeDto>>} A promise that resolves to a paginated response containing Employee DTOs.
	 */
	async matching(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)
		const opt = EmployeeAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<EmployeeDto>>({
			cacheKey: `${this.cacheKey}:matching:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				}
			}
		})
	}

	/**
	 * @method searchByEmail
	 * @description Retrieves a single Employee entity by its email address.
	 * Utilizes caching for direct email lookups.
	 * @param {Primitives<EmployeeEmail>} email - The email address of the Employee to search for.
	 * @returns {Promise<EmployeeDto | null>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	async searchByEmail(email: Primitives<EmployeeEmail>): Promise<EmployeeDto | null> {
		return await this.cache.getCachedData<EmployeeDto | null>({
			cacheKey: `${this.cacheKey}:email:${email}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findOne({
					where: {
						email
					}
				})
				return employee ? employee.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single Employee entity by its unique identifier.
	 * Includes associated devices, cargo, location, and departamento data.
	 * Utilizes caching for direct ID lookups.
	 * @param {string} id - The ID of the Employee to search for.
	 * @returns {Promise<EmployeeDto | null>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<EmployeeDto | null> {
		return await this.cache.getCachedData<EmployeeDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findByPk(id, {
					include: [
						{
							association: 'devices',
							include: ['category', 'brand', 'model', 'location', 'computer']
						},
						'cargo',
						'location',
						'departamento'
					]
				})
				return employee ? employee.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method searchByQuery
	 * @description Retrieves a single Employee entity based on complex criteria.
	 * Utilizes caching for improved performance.
	 * @param {Criteria} criteria - The criteria for filtering the employee.
	 * @returns {Promise<EmployeeDto | null>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	async searchByQuery(criteria: Criteria): Promise<EmployeeDto | null> {
		return await this.cache.getCachedData<EmployeeDto | null>({
			cacheKey: `${this.cacheKey}:query:${criteria.hash()}`,
			criteria,
			ex: TimeTolive.SHORT,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findOne(this.convert(criteria))
				return employee ? employee.get({ plain: true }) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves an Employee entity to the data store. Uses `upsert` for atomic creation or update.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {EmployeePrimitives} payload - The Employee data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: EmployeePrimitives): Promise<void> {
		// Use upsert for atomic create or update operation
		await EmployeeModel.upsert(payload)

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
		if (payload.email) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:email:${payload.email}` })
		}
	}

	/**
	 * @method remove
	 * @description Deletes an Employee entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} id - The ID of the Employee to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		// Retrieve the employee to get its email for cache invalidation
		const employeeToRemove = await EmployeeModel.findByPk(id)

		await EmployeeModel.destroy({ where: { id } })

		// Invalidate relevant cache entries
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (employeeToRemove && employeeToRemove.email) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:email:${employeeToRemove.email}` })
		}
	}
}

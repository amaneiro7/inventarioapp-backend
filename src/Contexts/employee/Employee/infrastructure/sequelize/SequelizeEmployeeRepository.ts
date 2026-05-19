import { Op } from 'sequelize'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { clearEmployeeDataset } from './clearEmployeeDataset'
import { exportToExcel } from '../../../../Shared/infrastructure/utils/ExcelExporter'
import type { EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import type { Primitives } from '../../../../Shared/domain/value-object/Primitives'
import type { EmployeeRepository } from '../../domain/Repository/EmployeeRepository'
import type { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import type { CacheService } from '../../../../Shared/domain/CacheService'
import type { ResponseDB } from '../../../../Shared/domain/ResponseType'
import type { EmployeePrimitives, EmployeeDto } from '../../domain/entity/Employee.dto'
import type { EmployeeUserName } from '../../domain/valueObject/EmployeeUsername'
import type { EmployeeId } from '../../domain/valueObject/EmployeeId'
import type { CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'
import type { UnidadRepository } from '../../../Unidad/domain/repository/UnidadRepository'

/**
 * @class SequelizeEmployeeRepository
 * @extends SequelizeCriteriaConverter
 * @implements {EmployeeRepository}
 * @description Concrete implementation of the EmployeeRepository using Sequelize.
 * Handles data persistence for Employee entities, including caching mechanisms.
 */
export class SequelizeEmployeeRepository
	extends SequelizeCriteriaConverter
	implements EmployeeRepository, CacheInvalidator
{
	private readonly cacheKey: string = 'employees'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator
	private readonly unidadRepository: UnidadRepository
	constructor({ cache, unidadRepository }: { cache: CacheService; unidadRepository: UnidadRepository }) {
		super()
		this.cache = cache
		this.unidadRepository = unidadRepository
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKey)
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of Employee entities based on the provided criteria.
	 * Enriches data with the full unit hierarchy and utilizes caching for performance.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<EmployeeDto>>} A promise that resolves to a paginated response containing Employee DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<EmployeeDto>> {
		const options = this.convert(criteria)
		const opt = EmployeeAssociation.convertFilter(criteria, options)
		return await this.cache.getCachedData<ResponseDB<EmployeeDto>>({
			cacheKey: `${this.cacheKey}:lists:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				const plainEmployees = rows.map(row => row.get({ plain: true })) as EmployeeDto[]
				const unidadIds = [...new Set(plainEmployees.map(e => e.unidadId).filter(Boolean))] as string[]
				const fullChainMap = await this.unidadRepository.getUnidadesFullChains(unidadIds)

				const employeesWithFullChain = plainEmployees.map(employee => {
					if (employee.unidadId && employee.unidad) {
						employee.unidad.full_chain = {
							text: fullChainMap.get(employee.unidadId)?.pathString ?? null,
							levels: fullChainMap.get(employee.unidadId)?.pathArray ?? []
						}
					}
					return employee
				})
				return {
					data: employeesWithFullChain,
					total: count
				} as ResponseDB<EmployeeDto>
			}
		})
	}

	/**
	 * @method matching
	 * @description Retrieves a paginated list of Employee entities that match specific criteria,
	 * supporting complex associations. Enriches data with the full unit hierarchy.
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
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				const plainEmployees = rows.map(row => row.get({ plain: true })) as EmployeeDto[]
				const unidadIds = [...new Set(plainEmployees.map(e => e.unidadId).filter(Boolean))] as string[]
				const fullChainMap = await this.unidadRepository.getUnidadesFullChains(unidadIds)

				const employeesWithFullChain = plainEmployees.map(employee => {
					if (employee.unidadId && employee.unidad) {
						employee.unidad.full_chain = {
							text: fullChainMap.get(employee.unidadId)?.pathString ?? null,
							levels: fullChainMap.get(employee.unidadId)?.pathArray ?? []
						}
					}
					return employee
				})
				return {
					data: employeesWithFullChain,
					total: count
				} as ResponseDB<EmployeeDto>
			}
		})
	}

	async findByUserName(userName: Primitives<EmployeeUserName>): Promise<EmployeeDto | null> {
		return await this.cache.getCachedData<EmployeeDto | null>({
			cacheKey: `${this.cacheKey}:userName:${userName}`,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findOne({
					where: {
						userName: { [Op.iLike]: userName }
					}
				})
				return employee ? (employee.get({ plain: true }) as EmployeeDto) : null
			}
		})
	}

	/**
	 * @method findByEmail
	 * @description Retrieves a single Employee entity by its email address.
	 * Utilizes caching for direct email lookups.
	 * @param {Primitives<EmployeeEmail>} email - The email address of the Employee to search for.
	 * @returns {Promise<EmployeeDto | null>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	async findByEmail(email: NonNullable<Primitives<EmployeeEmail>>): Promise<EmployeeDto | null> {
		return await this.cache.getCachedData<EmployeeDto | null>({
			cacheKey: `${this.cacheKey}:email:${email}`,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findOne({
					where: {
						email: { [Op.iLike]: email }
					}
				})
				return employee ? (employee.get({ plain: true }) as EmployeeDto) : null
			}
		})
	}

	/**
	 * @method findById
	 * @description Retrieves a single Employee entity by its unique identifier.
	 * Includes associated devices, cargo, location, and the full unit hierarchy.
	 * Utilizes caching for direct ID lookups.
	 * @param {string} id - The ID of the Employee to search for.
	 * @returns {Promise<EmployeeDto | null>} A promise that resolves to the Employee DTO if found, or null otherwise.
	 */
	async findById(id: string): Promise<EmployeeDto | null> {
		return await this.cache.getCachedData<EmployeeDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.LONG,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findByPk(id, {
					include: [
						{
							association: 'devices',
							include: ['category', 'brand', 'model', 'location', 'computer']
						},
						{ association: 'cargo', attributes: ['name'] },
						{
							association: 'location',
							attributes: ['name', 'typeOfSiteId'],
							include: [
								{
									association: 'site',
									attributes: ['name', 'address']
								}
							]
						},
						{ association: 'unidad' },
						{
							association: 'history',
							include: [
								{
									association: 'device',
									attributes: ['serial', 'categoryId'],
									include: [
										{ association: 'category', attributes: ['name'] },
										{ association: 'brand', attributes: ['name'] },
										{ association: 'model', attributes: ['name'] }
									]
								},
								{
									association: 'user',
									attributes: ['id'],
									include: [
										{
											association: 'employee',
											attributes: ['name', 'lastName', 'email', 'userName']
										}
									]
								}
							]
						}
					]
				})

				if (!employee) return null

				const plainEmployee = employee.get({ plain: true }) as EmployeeDto

				// Si el empleado tiene una unidad asignada, recuperamos la jerarquía completa
				if (plainEmployee.unidadId) {
					const fullChainMap = await this.unidadRepository.getUnidadesFullChains([plainEmployee.unidadId])
					plainEmployee.unidad.full_chain = {
						text: fullChainMap.get(plainEmployee.unidadId)?.pathString ?? null,
						levels: fullChainMap.get(plainEmployee.unidadId)?.pathArray ?? []
					}
				}

				return plainEmployee as EmployeeDto
			}
		})
	}

	/**
	 * @method findByIds
	 * @description Retrieves multiple employees by their unique identifiers in a single query.
	 * This method is optimized for bulk lookups and does not use caching.
	 * This method is optimized for bulk lookups and includes caching.
	 * @param {Primitives<EmployeeId>[]} ids An array of cargo IDs to find.
	 * @returns {Promise<EmployeeDto[]>} A promise resolving to an array of found cargo DTOs.
	 */
	async findByIds(ids: Primitives<EmployeeId>[]): Promise<EmployeeDto[]> {
		const sortedIds = [...new Set(ids)].sort() // Deduplicate and sort for a consistent cache key
		const cacheKey = `${this.cacheKey}:ids:${sortedIds.join(',')}`

		return this.cache.getCachedData<EmployeeDto[]>({
			cacheKey,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const employees = await EmployeeModel.findAll({
					where: { id: { [Op.in]: sortedIds } }
				})
				return employees.map(cargo => cargo.get({ plain: true })) as EmployeeDto[]
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
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const employee = await EmployeeModel.findOne(this.convert(criteria))
				return employee ? (employee.get({ plain: true }) as EmployeeDto) : null
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
		await EmployeeModel.upsert(payload)
	}

	async donwload(criteria: Criteria): Promise<Buffer> {
		const { data } = await this.matching(criteria)
		const wbData = clearEmployeeDataset({ employees: data })

		return exportToExcel(wbData, {
			title: 'Reporte de Inventario de Modelos',
			subject: 'Inventario de Models'
		})
	}

	/**
	 * @method remove
	 * @description Deletes an Employee entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {Primitives<EmployeeId>} id - The ID of the Employee to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: Primitives<EmployeeId>): Promise<void> {
		await EmployeeModel.destroy({ where: { id } })
	}

	/**
	 * @method invalidateEmployeeCache
	 * @description Invalidates all employees-related cache entries.
	 * Implements EmployeeCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<EmployeeId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}

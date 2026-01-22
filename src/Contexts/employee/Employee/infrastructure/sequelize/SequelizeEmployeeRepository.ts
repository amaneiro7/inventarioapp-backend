/* eslint-disable @typescript-eslint/no-explicit-any */
import { Op } from 'sequelize'
import fs from 'node:fs'
import { set_fs, utils, type WorkSheet, write } from 'xlsx'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { EmployeeModel } from './EmployeeSchema'
import { EmployeeAssociation } from './EmployeeAssociation'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { GenericCacheInvalidator } from '../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import { type EmployeeEmail } from '../../domain/valueObject/EmployeeEmail'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type EmployeeRepository } from '../../domain/Repository/EmployeeRepository'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { type EmployeePrimitives, type EmployeeDto } from '../../domain/entity/Employee.dto'
import { type EmployeeUserName } from '../../domain/valueObject/EmployeeUsername'
import { type EmployeeId } from '../../domain/valueObject/EmployeeId'
import { type CacheInvalidator } from '../../../../Shared/domain/repository/CacheInvalidator'
import { type ClearEmployeeDataset } from './EmployeeResponse'
import { clearEmployeeDataset } from './clearEmployeeDataset'

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
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKey)
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
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<EmployeeDto>
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
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count, rows } = await EmployeeModel.findAndCountAll(opt)
				return {
					data: rows.map(row => row.get({ plain: true })),
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
	 * Includes associated devices, cargo, location, and departamento data.
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
						{ association: 'departamento', attributes: ['name'] },
						{ association: 'directiva', attributes: ['name'] },
						{ association: 'vicepresidenciaEjecutiva', attributes: ['name'] },
						{ association: 'vicepresidencia', attributes: ['name'] },
						'history'
					]
				})

				if (!employee) return null

				const employeeDto = employee.get({ plain: true }) as EmployeeDto

				// Transformar el historial para que sea más legible en el frontend
				if ('history' in employeeDto) {
					;(employeeDto as any).history = this.transformHistory((employeeDto as any).history)
				}

				return employeeDto
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
		set_fs(fs)

		const { data } = await this.matching(criteria)
		const wbData = clearEmployeeDataset({ employees: data })

		if (!wbData.length) {
			// Handle case where there is no data to write
			const emptyWorkbook = utils.book_new()
			utils.book_append_sheet(emptyWorkbook, utils.aoa_to_sheet([['No hay datos para exportar']]), 'Inventario')
			return write(emptyWorkbook, { type: 'buffer', bookType: 'xlsx', compression: true })
		}

		const worksheet: WorkSheet = utils.json_to_sheet(wbData)
		// --- Optimization: Calculate column widths in one go ---
		const headers = Object.keys(wbData[0])
		const cols = headers.map(header => {
			const headerWidth = header.length + 2
			const maxContentWidth = wbData.reduce(
				(max, row) => Math.max(max, String(row[header as keyof ClearEmployeeDataset]).length + 2),
				headerWidth
			)
			return { wch: maxContentWidth }
		})
		worksheet['!cols'] = cols

		// --- ENhancement: Add metada to the workbook
		const workbook = utils.book_new()
		workbook.Props = {
			Title: 'Reporde de Inventario de Empleados',
			Subject: 'Inventario de Empleados',
			Author: 'Sistema de Inventario (BNC)',
			CreatedDate: new Date()
		}
		// --- Enhancement: Add styling for headers (requires a custom cell style function) ---
		// SheetJS does not have a simple way to apply styles directly to the worksheet object.
		// For simple styling like bolding headers, you need to iterate and modify cell properties.
		const headerRow = utils.sheet_to_json(worksheet, { header: 1 })[0] as string[]
		headerRow.forEach((_header, index) => {
			const cellRef = utils.encode_cell({ r: 0, c: index })
			if (worksheet[cellRef]) {
				worksheet[cellRef].s = {
					font: { bold: true },
					fill: { fgColor: { rgb: 'E8F2FF' } }
				}
			}
		})
		utils.book_append_sheet(workbook, worksheet, 'Inventario')
		return write(workbook, { type: 'buffer', bookType: 'xlsx', compression: true })
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

	/**
	 * @private
	 * @method transformHistory
	 * @description Sorts and formats the history array for better frontend readability.
	 * @param {any[]} history The raw history array.
	 * @returns {any[]} The transformed history array.
	 */
	private transformHistory(history: any[]): any[] {
		if (!Array.isArray(history)) return []

		return history
			.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
			.map(record => ({
				...record,
				formattedDate: new Date(record.createdAt).toLocaleString('es-VE', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})
			}))
	}
}

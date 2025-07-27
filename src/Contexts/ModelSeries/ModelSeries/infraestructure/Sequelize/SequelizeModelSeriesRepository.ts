import { type Model, type ModelStatic, type Transaction } from 'sequelize'
import { set_fs, utils, write } from 'xlsx'
import fs from 'node:fs'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { ComputerModels } from '../../../ModelCharacteristics/Computers/Computer/domain/ComputerModels'
import { LaptopsModels } from '../../../ModelCharacteristics/Computers/Laptops/domain/LaptopsModels'
import { MonitorModels } from '../../../ModelCharacteristics/Monitors/domain/MonitorModels'
import { ModelPrinters } from '../../../ModelCharacteristics/Printers/domain/ModelPrinters'
import { ModelAssociation } from './ModelAssociation'
import { ModelSeriesModel } from './ModelSeriesSchema'
import { KeyboardModels } from '../../../ModelCharacteristics/Keyboards/domain/KeyboadModels'
import { MouseModels } from '../../../ModelCharacteristics/Mouses/domain/MouseModels'
import { CategoryId } from '../../../../Category/Category/domain/CategoryId'
import { SequelizeCriteriaConverter } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'
import { clearModelDataset } from './clearModelDataset'
import { type Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type CacheService } from '../../../../Shared/domain/CacheService'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesRepository } from '../../domain/ModelSeriesRepository'
import { type ModelSeriesDto, type ModelSeriesPrimitives } from '../../domain/ModelSeries.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'

/**
 * @class SequelizeModelSeriesRepository
 * @extends SequelizeCriteriaConverter
 * @implements {ModelSeriesRepository}
 * @description Concrete implementation of the ModelSeriesRepository using Sequelize.
 * Handles data persistence for ModelSeries entities, including caching mechanisms and related model types.
 */
export class SequelizeModelSeriesRepository extends SequelizeCriteriaConverter implements ModelSeriesRepository {
	private readonly models = sequelize.models
	private readonly cacheKey: string = 'modelSeries'
	private readonly cache: CacheService
	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
	}

	/**
	 * @method searchAll
	 * @description Retrieves a paginated list of ModelSeries entities based on the provided criteria.
	 * Includes associated categories, brands, and specific model types (computer, laptop, monitor, printer, keyboard, mouse).
	 * Utilizes caching to improve performance for repeated queries.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<ModelSeriesDto>>} A promise that resolves to a paginated response containing ModelSeries DTOs.
	 */
	async searchAll(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>> {
		const options = this.convert(criteria)
		options.include = [
			{
				association: 'category',
				include: ['mainCategory']
			},
			'brand',
			'modelPrinter',
			'modelMonitor',
			{
				association: 'modelLaptop',
				include: ['memoryRamType']
			},
			{
				association: 'modelComputer',
				include: ['memoryRamType']
			},
			{ association: 'modelKeyboard', include: ['inputType'] },
			{ association: 'modelMouse', include: ['inputType'] }
		]
		return await this.cache.getCachedData<ResponseDB<ModelSeriesDto>>({
			cacheKey: `${this.cacheKey}:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const { rows, count } = await ModelSeriesModel.findAndCountAll(options)
				return {
					total: count,
					data: rows.map(row => row.get({ plain: true }))
				} as ResponseDB<ModelSeriesDto>
			}
		})
	}

	/**
	 * @method matching
	 * @description Retrieves a paginated list of ModelSeries entities that match specific criteria,
	 * often used for more complex filtering logic defined in ModelAssociation.
	 * Utilizes caching for improved performance.
	 * @param {Criteria} criteria - The criteria for filtering, sorting, and pagination.
	 * @returns {Promise<ResponseDB<ModelSeriesDto>>} A promise that resolves to a paginated response containing ModelSeries DTOs.
	 */
	async matching(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>> {
		const options = this.convert(criteria)

		const modelOption = new ModelAssociation().convertFilter(criteria, options)

		return await this.cache.getCachedData<ResponseDB<ModelSeriesDto>>({
			cacheKey: `${this.cacheKey}:matching:${criteria.hash()}`,
			criteria,
			ttl: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const { rows, count } = await ModelSeriesModel.findAndCountAll(modelOption)
				return {
					data: rows.map(row => row.get({ plain: true })),
					total: count
				} as ResponseDB<ModelSeriesDto>
			}
		})
	}

	/**
	 * @method searchById
	 * @description Retrieves a single ModelSeries entity by its unique identifier.
	 * Includes all relevant associated models.
	 * Utilizes caching for direct ID lookups.
	 * @param {string} id - The ID of the ModelSeries to search for.
	 * @returns {Promise<ModelSeriesDto | null>} A promise that resolves to the ModelSeries DTO if found, or null otherwise.
	 */
	async searchById(id: string): Promise<ModelSeriesDto | null> {
		return await this.cache.getCachedData<ModelSeriesDto | null>({
			cacheKey: `${this.cacheKey}:id:${id}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const modelSeries = await ModelSeriesModel.findByPk(id, {
					include: [
						'category',
						'brand',
						'modelComputer',
						'modelLaptop',
						'modelMonitor',
						'modelPrinter',
						'modelKeyboard',
						'modelMouse'
					]
				})
				return modelSeries ? (modelSeries.get({ plain: true }) as ModelSeriesDto) : null
			}
		})
	}

	/**
	 * @method searchByCategory
	 * @description Retrieves all ModelSeries entities belonging to a specific category.
	 * Utilizes caching for improved performance.
	 * @param {Primitives<CategoryId>} categoryId - The ID of the category to filter by.
	 * @returns {Promise<ModelSeriesDto[]>} A promise that resolves to an array of ModelSeries DTOs.
	 */
	async searchByCategory(categoryId: Primitives<CategoryId>): Promise<ModelSeriesDto[]> {
		return await this.cache.getCachedData<ModelSeriesDto[]>({
			cacheKey: `${this.cacheKey}:category:${categoryId}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const rows = await ModelSeriesModel.findAll({
					where: { categoryId },
					include: ['category', 'brand']
				})
				return rows.map(row => row.get({ plain: true })) as ModelSeriesDto[]
			}
		})
	}

	/**
	 * @method searchByName
	 * @description Retrieves a single ModelSeries entity by its name.
	 * Utilizes caching for direct name lookups.
	 * @param {string} name - The name of the ModelSeries to search for.
	 * @returns {Promise<ModelSeriesDto | null>} A promise that resolves to the ModelSeries DTO if found, or null otherwise.
	 */
	async searchByName(name: string): Promise<ModelSeriesDto | null> {
		return await this.cache.getCachedData<ModelSeriesDto | null>({
			cacheKey: `${this.cacheKey}:name:${name}`,
			ttl: TimeTolive.SHORT,
			fetchFunction: async () => {
				const modelSeries = await ModelSeriesModel.findOne({
					where: { name },
					include: ['category', 'brand']
				})
				return modelSeries ? (modelSeries.get({ plain: true }) as ModelSeriesDto) : null
			}
		})
	}

	/**
	 * @method save
	 * @description Saves a ModelSeries entity to the data store. Uses `upsert` for atomic creation or update.
	 * It also handles the creation/update of associated specific model types (e.g., Computer, Laptop) based on category.
	 * Invalidates relevant cache entries after a successful operation.
	 * @param {ModelSeriesPrimitives} payload - The ModelSeries data to be saved.
	 * @returns {Promise<void>} A promise that resolves when the save operation is complete.
	 */
	async save(payload: ModelSeriesPrimitives): Promise<void> {
		const t = await sequelize.transaction()
		try {
			// Use upsert for the main ModelSeries entry
			await ModelSeriesModel.upsert(payload, {
				transaction: t,
				returning: true
			})

			// Handle associated model types based on category
			if (ComputerModels.isComputerCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedModel(this.models.ModelComputer, payload, t)
			}
			if (LaptopsModels.isLaptopCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedModel(this.models.ModelLaptop, payload, t)
			}
			if (MonitorModels.isMonitorCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedModel(this.models.ModelMonitor, payload, t)
			}
			if (ModelPrinters.isPrinterCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedModel(this.models.ModelPrinter, payload, t)
			}
			if (KeyboardModels.isKeyboardCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedModel(this.models.ModelKeyboard, payload, t)
			}
			if (MouseModels.isMouseCategory({ categoryId: payload.categoryId })) {
				await this.upsertAssociatedModel(this.models.ModelMouse, payload, t)
			}

			await t.commit()
			// Invalidate all cache entries related to model series.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
			// Also invalidate specific entries if they were cached by ID or name.
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${payload.id}` })
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${payload.name}` })
		} catch (error: unknown) {
			await t.rollback()
			let errorMessage = 'An unknown error occurred while saving the model series.'
			if (error instanceof Error) {
				errorMessage = `Error saving model series: ${error.message}`
			} else if (typeof error === 'string') {
				errorMessage = `Error saving model series: ${error}`
			}
			throw new Error(errorMessage)
		}
	}

	/**
	 * @private
	 * @method upsertAssociatedModel
	 * @description Helper method to perform an upsert operation on an associated model.
	 * @param {any} model - The Sequelize model for the associated entity (e.g., ModelComputer).
	 * @param {ModelSeriesPrimitives} payload - The data for the associated model.
	 * @param {Transaction} transaction - The Sequelize transaction to use.
	 * @returns {Promise<void>}
	 */
	private async upsertAssociatedModel(
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		model: ModelStatic<Model<any, any>>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		// Assuming the associated models also have an 'id' field that matches modelSeriesId
		await model.upsert({ modelSeriesId: payload.id, ...payload }, { transaction })
	}

	/**
	 * @method remove
	 * @description Deletes a ModelSeries entity from the data store by its unique identifier.
	 * Invalidates relevant cache entries after a successful deletion.
	 * @param {string} id - The ID of the ModelSeries to remove.
	 * @returns {Promise<void>} A promise that resolves when the remove operation is complete.
	 */
	async remove(id: string): Promise<void> {
		// Retrieve the model series to get its name for cache invalidation
		const modelSeriesToRemove = await ModelSeriesModel.findByPk(id)

		await ModelSeriesModel.destroy({ where: { id } })

		// Invalidate all cache entries related to model series.
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}*` })
		// Also invalidate specific entries if they were cached by ID or name.
		await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:id:${id}` })
		if (modelSeriesToRemove) {
			await this.cache.removeCachedData({ cacheKey: `${this.cacheKey}:name:${modelSeriesToRemove.name}` })
		}
	}

	/**
	 * @method donwload
	 * @description Generates an Excel file (buffer) containing model series data based on provided criteria.
	 * @param {Criteria} criteria - The criteria for filtering the data to be downloaded.
	 * @returns {Promise<Buffer>} A promise that resolves to an Excel file buffer.
	 */
	async donwload(criteria: Criteria): Promise<Buffer> {
		set_fs(fs)

		const { data } = await this.matching(criteria)

		const wbData = clearModelDataset({ models: data })
		// Create a new worksheet
		const worksheet = utils.json_to_sheet(wbData)
		worksheet['!cols'] = [{ wch: 20 }]
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, 'Inventario')

		// Generate a buffer
		const buf = write(workbook, {
			type: 'buffer',
			bookType: 'xlsx',
			compression: true
		})
		return buf
	}
}

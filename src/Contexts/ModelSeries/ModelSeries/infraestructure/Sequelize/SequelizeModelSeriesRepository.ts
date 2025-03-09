import { set_fs, utils, write } from 'xlsx'
import fs from 'node:fs'
import { sequelize } from '../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'
import { Criteria } from '../../../../Shared/domain/criteria/Criteria'
import { type Transaction } from 'sequelize'
import { type Primitives } from '../../../../Shared/domain/value-object/Primitives'
import { type ModelSeriesId } from '../../domain/ModelSeriesId'
import { type ModelSeriesRepository } from '../../domain/ModelSeriesRepository'
import { type CacheService } from '../../../../Shared/domain/CacheService'
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
import { clearModelDataset } from './clearModelDataset'
import { type ModelSeriesDto, type ModelSeriesPrimitives } from '../../domain/ModelSeries.dto'
import { type ResponseDB } from '../../../../Shared/domain/ResponseType'
import { TimeTolive } from '../../../../Shared/domain/CacheRepository'

export class SequelizeModelSeriesRepository extends SequelizeCriteriaConverter implements ModelSeriesRepository {
	private readonly models = sequelize.models
	private readonly cacheKey: string = 'modelSeries'
	constructor(private readonly cache: CacheService) {
		super()
	}
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
			{ association: 'modelKeyboard', include: ['inputType'] }
		]
		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const { rows, count } = await ModelSeriesModel.findAndCountAll(options)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async matching(criteria: Criteria): Promise<ResponseDB<ModelSeriesDto>> {
		const options = this.convert(criteria)

		const modelOption = new ModelAssociation().convertFilter(criteria, options)

		return await this.cache.getCachedData({
			cacheKey: this.cacheKey,
			criteria,
			ex: TimeTolive.MEDIUM,
			fetchFunction: async () => {
				const { rows, count } = await ModelSeriesModel.findAndCountAll(modelOption)
				return {
					data: rows,
					total: count
				}
			}
		})
	}

	async searchById(id: string): Promise<ModelSeriesDto | null> {
		return (
			(await ModelSeriesModel.findByPk(id, {
				include: [
					'category',
					'brand',
					'modelComputer',
					'modelLaptop',
					'modelMonitor',
					'modelPrinter',
					'modelKeyboard'
				]
			})) ?? null
		)
	}

	async searchByCategory(categoryId: Primitives<CategoryId>): Promise<ModelSeriesDto[]> {
		return await ModelSeriesModel.findAll({
			where: { categoryId },
			include: ['category', 'brand']
		})
	}

	async searchByName(name: string): Promise<ModelSeriesDto | null> {
		return (
			(await ModelSeriesModel.findOne({
				where: { name },
				include: ['category', 'brand']
			})) ?? null
		)
	}

	async save(payload: ModelSeriesPrimitives): Promise<void> {
		const t = await sequelize.transaction()
		try {
			const { id, name, categoryId, brandId, generic } = payload
			const model = (await ModelSeriesModel.findByPk(id)) ?? null

			if (model === null) {
				await ModelSeriesModel.create({
					id,
					name,
					categoryId,
					brandId,
					generic
				})
			} else {
				await ModelSeriesModel.update(
					{ name, categoryId, brandId },
					{
						where: { id },
						transaction: t
					}
				)
			}

			if (ComputerModels.isComputerCategory({ categoryId })) {
				await this.createModelComputerIfCategoryMatches(id, payload, t)
			}

			if (LaptopsModels.isLaptopCategory({ categoryId })) {
				await this.createModelLaptopIfCategoryMatches(id, payload, t)
			}

			if (MonitorModels.isMonitorCategory({ categoryId })) {
				await this.createModelMonitorIfCategoryMatches(id, payload, t)
			}

			if (ModelPrinters.isPrinterCategory({ categoryId })) {
				await this.createModelPrinterIfCategoryMatches(id, payload, t)
			}
			if (KeyboardModels.isKeyboardCategory({ categoryId })) {
				await this.createModelKeyboardIfCategoryMatches(id, payload, t)
			}

			if (MouseModels.isMouseCategory({ categoryId })) {
				await this.createModelMouseIfCategoryMatches(id, payload, t)
			}
			await t.commit()
			await await this.cache.removeCachedData({ cacheKey: this.cacheKey })
		} catch (error: any) {
			await t.rollback()
			throw new Error(error)
		}
	}

	private async createModelComputerIfCategoryMatches(
		id: Primitives<ModelSeriesId>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		const modelComputer = (await this.models.ModelComputer.findByPk(id)) ?? null
		if (modelComputer === null) {
			await this.models.ModelComputer.create({
				modelSeriesId: id,
				...payload
			})
		} else {
			await this.models.ModelComputer.update(
				{ ...payload },
				{
					where: { id },
					transaction
				}
			)
		}
	}

	private async createModelLaptopIfCategoryMatches(
		id: Primitives<ModelSeriesId>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		const modelLaptop = (await this.models.ModelLaptop.findByPk(id)) ?? null
		if (modelLaptop === null) {
			await this.models.ModelLaptop.create({
				modelSeriesId: id,
				...payload
			})
		} else {
			await this.models.ModelLaptop.update(
				{ ...payload },
				{
					where: { id },
					transaction
				}
			)
		}
	}

	private async createModelMonitorIfCategoryMatches(
		id: Primitives<ModelSeriesId>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		const modelMonitor = (await this.models.ModelMonitor.findByPk(id)) ?? null
		if (modelMonitor === null) {
			await this.models.ModelMonitor.create({
				modelSeriesId: id,
				...payload
			})
		} else {
			await this.models.ModelMonitor.update(
				{ ...payload },
				{
					where: { id },
					transaction
				}
			)
		}
	}

	private async createModelPrinterIfCategoryMatches(
		id: Primitives<ModelSeriesId>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		const modelPrinter = (await this.models.ModelPrinter.findByPk(id)) ?? null
		if (modelPrinter === null) {
			await this.models.ModelPrinter.create({
				modelSeriesId: id,
				...payload
			})
		} else {
			await this.models.ModelPrinter.update(
				{ ...payload },
				{
					where: { id },
					transaction
				}
			)
		}
	}
	private async createModelKeyboardIfCategoryMatches(
		id: Primitives<ModelSeriesId>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		const modelKeyboard = (await this.models.ModelKeyboard.findByPk(id)) ?? null
		if (modelKeyboard === null) {
			await this.models.ModelKeyboard.create({
				modelSeriesId: id,
				...payload
			})
		} else {
			await this.models.ModelKeyboard.update(
				{ ...payload },
				{
					where: { id },
					transaction
				}
			)
		}
	}
	private async createModelMouseIfCategoryMatches(
		id: Primitives<ModelSeriesId>,
		payload: ModelSeriesPrimitives,
		transaction: Transaction
	): Promise<void> {
		const modelMouse = (await this.models.ModelMouse.findByPk(id)) ?? null
		if (modelMouse === null) {
			await this.models.ModelMouse.create({
				modelSeriesId: id,
				...payload
			})
		} else {
			await this.models.ModelMouse.update(
				{ ...payload },
				{
					where: { id },
					transaction
				}
			)
		}
	}

	async remove(id: string): Promise<void> {
		await ModelSeriesModel.destroy({ where: { id } })
		await this.cache.removeCachedData({ cacheKey: this.cacheKey })
	}

	async donwload(criteria: Criteria): Promise<{}> {
		set_fs(fs)

		const { data } = await this.matching(criteria)

		const wbData = clearModelDataset({ models: data })
		// Crear una nueva hoja de cálculo
		const worksheet = utils.json_to_sheet(wbData)
		worksheet['!cols'] = [{ wch: 20 }]
		const workbook = utils.book_new()
		utils.book_append_sheet(workbook, worksheet, 'Inventario')

		// Generar un archivo buffer
		// const now = new Date()
		// const filename = `Reporte-Inventario${now.toLocaleString().replace(/[/:]/g, '-')}.xlsx`
		// return writeFile(workbook, filename, { compression: true })
		const buf = write(workbook, {
			type: 'buffer',
			bookType: 'xlsx',
			compression: true
		})
		return buf
	}
}

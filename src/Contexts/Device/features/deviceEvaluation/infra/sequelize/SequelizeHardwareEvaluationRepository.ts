import { Op, type WhereOptions } from 'sequelize'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { MigrationRule } from '../../domain/entity/MigrationRule'
import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { HardwareEvaluationAssociation } from './HardwareEvaluationAssociation'
import { GenericCacheInvalidator } from '../../../../../Shared/infrastructure/cache/GenericCacheInvalidator'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import type { HardwareEvaluationRepository } from '../../domain/repository/HardwareEvaluationRepository'
import type { DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'
import type { ResponseDB } from '../../../../../Shared/domain/ResponseType'
import type { CacheInvalidator } from '../../../../../Shared/domain/repository/CacheInvalidator'
import type { CacheService } from '../../../../../Shared/domain/CacheService'
import type { DeviceId } from '../../../../Device/domain/valueObject/DeviceId'
import type { Primitives } from '../../../../../Shared/domain/value-object/Primitives'
import { TimeTolive } from '../../../../../Shared/domain/CacheRepository'
import { EvaluationExcelService } from '../../domain/entity/EvaluationExcelService.dto'
import { exportToExcel } from '../../../../../Shared/infrastructure/utils/ExcelExporter'
import { MigrationRuleId } from '../../domain/valueObject/MigrationRuleId'
//import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

/**
 * @description Implementación en Sequelize para la evaluación masiva de hardware.
 */
export class SequelizeHardwareEvaluationRepository
	extends SequelizeCriteriaConverter
	implements HardwareEvaluationRepository, CacheInvalidator
{
	private readonly cacheKeyPrefix = 'hardwareEvaluation'
	private readonly cache: CacheService
	private readonly cacheInvalidator: GenericCacheInvalidator

	constructor({ cache }: { cache: CacheService }) {
		super()
		this.cache = cache
		this.cacheInvalidator = new GenericCacheInvalidator(cache, this.cacheKeyPrefix)
	}

	async countDevicesByCompatibility(
		rule: MigrationRule,
		criteria?: Criteria
	): Promise<{ apto: number; noApto: number; total: number }> {
		// 1. Obtener opciones base comunes (Filtros de ubicación, S.O. viejos, etc.)
		const optionsTotal = criteria ? this.convert(criteria) : { where: {} }
		const baseOptions = HardwareEvaluationAssociation.convertFilter({ criteria, options: optionsTotal, rule })

		// 2. Clonamos de forma profunda las opciones base para el conteo de Aptos
		// Esto evita que al modificar el 'where' de uno se altere el del otro
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const aptoOptions: WhereOptions & Record<symbol, any> = {
			...baseOptions,
			where: { ...baseOptions.where }
		}

		// 3. Inyectamos manualmente la lógica idéntica de "Apto" que usa tu convertidor
		const ramCondition = { '$computer.memory_ram_capacity$': { [Op.gte]: rule.minRamGbValue } }
		const processorCondition = { '$computer.processor_id$': { [Op.in]: rule.approvedProcessorValue } }
		const diskCondition = { '$computer.hardDriveCapacity.name$': { [Op.gte]: rule.minRamGbValue } }

		// Agrupamos bajo un Op.and en el objeto where de los aptos
		aptoOptions.where[Op.and] = [
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			...((aptoOptions.where[Op.and] as any) || []),
			ramCondition,
			processorCondition,
			diskCondition
		]

		// 4. Ejecutar ambos conteos en paralelo
		return this.cache.getCachedData({
			cacheKey: `${this.cacheKeyPrefix}:count`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const [aptoCount, total] = await Promise.all([
					DeviceModel.count(aptoOptions),
					DeviceModel.count(baseOptions)
				])

				return {
					apto: aptoCount,
					noApto: total - aptoCount,
					total
				}
			}
		})
	}
	/**
	 * @method findPendingDevices
	 * @description Busca dispositivos tipo computadora que no tengan Windows 10 instalado.
	 */
	async findPendingDevices(rule: MigrationRule, criteria?: Criteria): Promise<ResponseDB<DeviceComputerDto>> {
		const options = criteria ? this.convert(criteria) : {}
		const optionsWithAssociation = HardwareEvaluationAssociation.convertFilter({ criteria, options, rule })

		return this.cache.getCachedData<ResponseDB<DeviceComputerDto>>({
			cacheKey: `${this.cacheKeyPrefix}:pending`,
			criteria,
			ttl: TimeTolive.VERY_LONG,
			fetchFunction: async () => {
				const { count: total, rows: devices } = await DeviceModel.findAndCountAll(optionsWithAssociation)

				// Mapeo para aplanar la estructura de Sequelize al DTO esperado por la capa de aplicación
				const data = devices.map(device => {
					const plainDevice = device.get({ plain: true }) as DeviceComputerDto
					const { computer, ...deviceBase } = plainDevice

					return {
						...deviceBase,
						...computer,
						id: deviceBase.id // Aseguramos que el ID sea el del dispositivo
					} as DeviceComputerDto
				})

				return {
					data,
					total
				}
			}
		})
	}

	async donwload(evaluations: EvaluationExcelService[], activeRuleId: Primitives<MigrationRuleId>): Promise<Buffer> {
		return await exportToExcel(evaluations, {
			title: 'Reporte de Evaluación de Hardware para Migración',
			subject: `Regla ID: ${activeRuleId}`
		})
	}

	/**
	 * @method invalidateMigrationRuleCache
	 * @description Invalidates all model series-related cache entries.
	 * Implements MigrationRuleCacheInvalidator interface.
	 */
	async invalidate(params?: Primitives<DeviceId> | Record<string, string>): Promise<void> {
		await this.cacheInvalidator.invalidate(params)
	}
}

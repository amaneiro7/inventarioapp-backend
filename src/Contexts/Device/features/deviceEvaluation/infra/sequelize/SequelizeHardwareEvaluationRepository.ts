import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { HardwareEvaluationRepository } from '../../domain/repository/HardwareEvaluationRepository'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { HardwareEvaluationAssociation } from './HardwareEvaluationAssociation'
import type { DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'
import { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import type { ResponseDB } from '../../../../../Shared/domain/ResponseType'
import { MigrationRule } from '../../domain/entity/MigrationRule'
import { Op, WhereOptions } from 'sequelize'
//import { sequelize } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeConfig'

/**
 * @description Implementación en Sequelize para la evaluación masiva de hardware.
 */
export class SequelizeHardwareEvaluationRepository
	extends SequelizeCriteriaConverter
	implements HardwareEvaluationRepository
{
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
		const [aptoCount, total] = await Promise.all([DeviceModel.count(aptoOptions), DeviceModel.count(baseOptions)])

		return {
			apto: aptoCount,
			noApto: total - aptoCount,
			total
		}
	}
	/**
	 * @method findPendingDevices
	 * @description Busca dispositivos tipo computadora que no tengan Windows 10 instalado.
	 */
	async findPendingDevices(rule: MigrationRule, criteria?: Criteria): Promise<ResponseDB<DeviceComputerDto>> {
		const options = criteria ? this.convert(criteria) : {}
		const optionsWithAssociation = HardwareEvaluationAssociation.convertFilter({ criteria, options, rule })
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
}

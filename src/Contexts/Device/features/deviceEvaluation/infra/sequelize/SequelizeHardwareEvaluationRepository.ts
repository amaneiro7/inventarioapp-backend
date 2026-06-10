import { SequelizeCriteriaConverter } from '../../../../../Shared/infrastructure/persistance/Sequelize/SequelizeCriteriaConverter'
import { HardwareEvaluationRepository } from '../../domain/repository/HardwareEvaluationRepository'
import { DeviceModel } from '../../../../Device/infrastructure/sequelize/schema/DeviceSchema'
import { HardwareEvaluationAssociation } from './HardwareEvaluationAssociation'
import type { DeviceComputerDto } from '../../../../Device/domain/dto/Computer.dto'
import type { Criteria } from '../../../../../Shared/domain/criteria/Criteria'
import type { ResponseDB } from '../../../../../Shared/domain/ResponseType'

/**
 * @description Implementación en Sequelize para la evaluación masiva de hardware.
 */
export class SequelizeHardwareEvaluationRepository
	extends SequelizeCriteriaConverter
	implements HardwareEvaluationRepository
{
	/**
	 * @method findPendingDevices
	 * @description Busca dispositivos tipo computadora que no tengan Windows 10 instalado.
	 */
	async findPendingDevices(criteria?: Criteria): Promise<ResponseDB<DeviceComputerDto>> {
		const options = criteria ? this.convert(criteria) : {}
		const optionsWithAssociation = HardwareEvaluationAssociation.convertFilter({ criteria, options })
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

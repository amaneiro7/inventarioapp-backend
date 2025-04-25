import { HistoryId } from './HistoryId'
import { DeviceId } from '../../Device/Device/domain/DeviceId'
import { UserId } from '../../User/user/domain/UserId'
import { Action, type ActionType } from './HistoryAction'
import { CreatedAt } from './CreatedAt'
import { HistoryEmployee } from './HistoryEmployee'
import { type Primitives } from '../../Shared/domain/value-object/Primitives'
import { type HistoryDto, type HistoryParams, type HistoryPrimitives } from './History.dto'

interface Cambio {
	oldValue: any
	newValue: any
}
export class History {
	constructor(
		private readonly id: HistoryId,
		private readonly deviceId: DeviceId,
		private readonly userId: UserId,
		private readonly employeeId: HistoryEmployee,
		private readonly action: Action,
		private readonly oldData: object,
		private readonly newData: object,
		private readonly createdAt: CreatedAt
	) {}

	static create(params: HistoryParams): History {
		const id = HistoryId.random().value
		return new History(
			new HistoryId(id),
			new DeviceId(params.deviceId),
			new UserId(params.userId),
			new HistoryEmployee(params.employeeId),
			new Action(params.action),
			params.oldData,
			params.newData,
			new CreatedAt(params.createdAt)
		)
	}

	toPrimitives(): HistoryPrimitives {
		return {
			id: this.id.value,
			deviceId: this.deviceValue,
			userId: this.userValue,
			employeeId: this.employeeValue,
			action: this.actionValue,
			oldData: this.oldDataValue,
			newData: this.newDataValue,
			createdAt: this.createdAtValue
		}
	}

	static fromPrimitives(primitives: HistoryDto): History {
		return new History(
			new HistoryId(primitives.id),
			new DeviceId(primitives.deviceId),
			new UserId(primitives.userId),
			new HistoryEmployee(primitives.employeeId),
			new Action(primitives.action),
			primitives.oldData,
			primitives.newData,
			new CreatedAt(primitives.createdAt)
		)
	}

	get idValue(): Primitives<HistoryId> {
		return this.id.value
	}

	get deviceValue(): Primitives<DeviceId> {
		return this.deviceId.value
	}

	get employeeValue(): Primitives<HistoryEmployee> {
		return this.employeeId.value
	}

	get actionValue(): ActionType {
		return this.action.value
	}

	get createdAtValue(): Date {
		return this.createdAt.value
	}

	get userValue(): Primitives<UserId> {
		return this.userId.value
	}

	get oldDataValue(): object {
		return this.oldData
	}

	get newDataValue(): object {
		return this.newData
	}

	public static compararDatos(newData: Record<string, any>, oldData: Record<string, any>): Record<string, Cambio> {
		const cambios: Record<string, Cambio> = {}

		for (const key in newData) {
			if (Object.prototype.hasOwnProperty.call(newData, key)) {
				if (Array.isArray(newData[key]) && Array.isArray(oldData[key])) {
					if (!History.arraysIguales(newData[key], oldData[key])) {
						cambios[key] = {
							oldValue: oldData[key],
							newValue: newData[key]
						}
					}
				} else if (this.normalizarValor(newData[key]) !== this.normalizarValor(oldData[key])) {
					cambios[key] = {
						oldValue: oldData[key],
						newValue: newData[key]
					}
				}
			}
		}

		return cambios
	}

	private static normalizarValor(valor: any) {
		if (valor === undefined || valor === null || valor === '') {
			return null // Normaliza a null para la comparación
		}
		return valor
	}

	private static arraysIguales(arr1: any[], arr2: any[]) {
		if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
			return false
		}

		if (arr1.length !== arr2.length) {
			return false
		}

		for (let i = 0; i < arr1.length; i++) {
			if (this.normalizarValor(arr1[i]) !== this.normalizarValor(arr2[i])) {
				return false
			}
		}

		return true
	}
}

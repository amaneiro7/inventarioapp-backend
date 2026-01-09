import { AggregateRoot } from '../../../Shared/domain/AggregateRoot'
import { HistoryId } from '../valueObject/HistoryId'
import { DeviceId } from '../../../Device/Device/domain/valueObject/DeviceId'
import { UserId } from '../../../User/user/domain/valueObject/UserId'
import { EmployeeId } from '../../../employee/Employee/domain/valueObject/EmployeeId'
import { CreatedAt } from '../valueObject/CreatedAt'
import { Action, ActionType } from '../valueObject/HistoryAction'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type HistoryDto, type HistoryParams, type HistoryPrimitives } from './History.dto'
import { HistoryCreatedDomainEvent } from '../event/HistoryCreatedDomainEvent'

interface Cambio {
	oldValue: unknown
	newValue: unknown
}
/**
 * @class History
 * @description Represents a historical record of a change to an entity.
 */
export class History extends AggregateRoot {
	constructor(
		private readonly id: HistoryId,
		private readonly deviceId: DeviceId,
		private readonly userId: UserId,
		private readonly employeeId: EmployeeId | null,
		private readonly action: Action,
		private readonly oldData: Record<string, unknown>,
		private readonly newData: Record<string, unknown>,
		private readonly createdAt: CreatedAt
	) {
		super()
	}

	/**
	 * @description Factory method to create a new History instance.
	 * @param {HistoryParams} params - The data for the new history record.
	 * @returns {History} A new History object.
	 */
	static create(params: HistoryParams): History {
		const history = new History(
			HistoryId.random(),
			new DeviceId(params.deviceId),
			new UserId(params.userId),
			params.employeeId ? new EmployeeId(params.employeeId) : null,
			new Action(params.action),
			params.oldData,
			params.newData,
			new CreatedAt(params.createdAt)
		)
		history.record(
			new HistoryCreatedDomainEvent({
				aggregateId: history.idValue,
				history: history.toPrimitives()
			})
		)
		return history
	}

	/**
	 * @description Converts the History entity to its primitive representation.
	 * @returns {HistoryPrimitives} The plain object representation of the history.
	 */
	toPrimitives(): HistoryPrimitives {
		return {
			id: this.idValue,
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
			primitives.employeeId ? new EmployeeId(primitives.employeeId) : null,
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

	get employeeValue(): Primitives<EmployeeId> | null {
		return this.employeeId?.value ?? null
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

	get oldDataValue(): Record<string, unknown> {
		return this.oldData
	}

	get newDataValue(): Record<string, unknown> {
		return this.newData
	}

	/**
	 * @description Compares two data objects and returns a record of the fields that have changed.
	 * It normalizes values like null, undefined, and empty strings for accurate comparison.
	 * @param {Record<string, unknown>} newData - The new data object.
	 * @param {Record<string, unknown>} oldData - The old data object.
	 * @returns {Record<string, Cambio>} An object where keys are the changed field names and values contain the old and new values.
	 */
	public static compararDatos(
		newData: Record<string, unknown>,
		oldData: Record<string, unknown>
	): Record<string, Cambio> {
		const cambios: Record<string, Cambio> = {}

		for (const key in newData) {
			if (Object.prototype.hasOwnProperty.call(newData, key)) {
				if (Array.isArray(newData[key]) && Array.isArray(oldData[key])) {
					if (!History.arraysIguales(newData[key] as unknown[], oldData[key] as unknown[])) {
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

	/**
	 * @description Normalizes a value to null if it is undefined, null, or an empty string.
	 * This ensures consistent comparison between different representations of "empty".
	 * @param {unknown} valor - The value to normalize.
	 * @returns {unknown | null} The normalized value.
	 * @private
	 */
	private static normalizarValor(valor: unknown): unknown | null {
		if (valor === undefined || valor === null || valor === '') {
			return null // Normaliza a null para la comparación
		}
		return valor
	}

	/**
	 * @description Compares two arrays for equality, using the normalization logic.
	 * @param {unknown[]} arr1 - The first array.
	 * @param {unknown[]} arr2 - The second array.
	 * @returns {boolean} True if the arrays are equal, false otherwise.
	 * @private
	 */
	private static arraysIguales(arr1: unknown[], arr2: unknown[]): boolean {
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

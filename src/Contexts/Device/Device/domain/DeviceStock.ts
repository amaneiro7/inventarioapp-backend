import { AcceptedNullValueObject } from '../../../Shared/domain/value-object/AcceptedNullValueObjects'
import { InvalidArgumentError } from '../../../Shared/domain/errors/ApiError'
import { type Primitives } from '../../../Shared/domain/value-object/Primitives'
import { type Device } from './entity/Device'
import { DeviceStatus } from './DeviceStatus'
import { StatusOptions } from '../../Status/domain/StatusOptions'

/**
 * @class DeviceStocknumber
 * @extends AcceptedNullValueObject
 * @description Represents the Value Object for a Device's stock number.
 * It encapsulates validation rules based on the device's status.
 */
export class DeviceStocknumber extends AcceptedNullValueObject<string> {
	private readonly MIN_LENGTH = 2
	private readonly MAX_LENGTH = 10

	constructor(
		readonly value: string | null,
		private readonly status: Primitives<DeviceStatus>
	) {
		super(value)
		this.ensureIsValid(value, this.status)
	}

	/**
	 * @private
	 * @method ensureIsValid
	 * @description Validates the stock number based on its length and the device's status.
	 * @param {Primitives<DeviceStocknumber>} value The stock number to validate.
	 * @param {Primitives<DeviceStatus>} status The status of the device.
	 * @throws {InvalidArgumentError} If the stock number is invalid.
	 */
	private ensureIsValid(value: Primitives<DeviceStocknumber>, status: Primitives<DeviceStatus>): void {
		if (value === null) return

		if (value.length < this.MIN_LENGTH || value.length > this.MAX_LENGTH) {
			throw new InvalidArgumentError(
				`El número de stock debe tener entre ${this.MIN_LENGTH} y ${this.MAX_LENGTH} caracteres.`
			)
		}

		const inStorage = StatusOptions.INALMACEN === status || StatusOptions.PORDESINCORPORAR === status
		if (!inStorage) {
			throw new InvalidArgumentError(
				'Un dispositivo solo puede tener número de stock si está en almacén o por desincorporar.'
			)
		}
	}

	/**
	 * @static
	 * @method updateStockNumberField
	 * @description Handles the logic for updating a device's stock number.
	 * @param {{ stockNumber?: Primitives<DeviceStocknumber>; entity: Device }} params The parameters for updating.
	 * @returns {void}
	 */
	static updateStockNumberField({
		stockNumber,
		entity
	}: {
		stockNumber?: Primitives<DeviceStocknumber>
		entity: Device
	}): void {
		if (stockNumber === undefined || entity.stockNumberValue === stockNumber) {
			return
		}
		entity.updateStockNumber(stockNumber, entity.statusValue)
	}
}

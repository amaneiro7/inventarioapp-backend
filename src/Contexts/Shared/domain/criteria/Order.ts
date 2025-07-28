import { OrderBy } from './OrderBy'
import { OrderType, OrderTypes } from './OrderType'

export interface OrderPrimitves {
	orderBy?: string | null
	orderType?: string | null
}

export class Order {
	constructor(
		public readonly orderBy: OrderBy,
		public readonly orderType: OrderType
	) {}

	static none(): Order {
		return new Order(new OrderBy(''), new OrderType(OrderTypes.NONE))
	}

	public static fromValues(orderBy?: string | null, orderType?: string | null): Order {
		return !orderBy
			? Order.none()
			: new Order(new OrderBy(orderBy), OrderType.fromValue(orderType ?? OrderTypes.ASC))
	}

	toPrimitives(): OrderPrimitves {
		return {
			orderBy: this.orderBy.value,
			orderType: this.orderType.value
		}
	}

	public isNone(): boolean {
		return this.orderType.isNone()
	}

	public hasOrder(): boolean {
		return this.orderType !== undefined && this.orderType !== null && !this.orderType.isNone()
	}
}

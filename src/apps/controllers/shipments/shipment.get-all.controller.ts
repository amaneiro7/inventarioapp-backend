import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type ShipmentFinderAll } from '../../../Contexts/Shipment/Shipment/application/ShipmentFinderAll'
import { ShipmentDependencies } from '../../di/shipment/shipment.di'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'

export class ShipmentGetFinderAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: ShipmentFinderAll = container.resolve(ShipmentDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

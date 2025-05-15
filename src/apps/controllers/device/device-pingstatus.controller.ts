import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { PingService } from '../../../Contexts/Device/Device/application/PingService'

export class DevicePingStatusController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const pingStatus = new PingService()

			const data = await pingStatus.pingIp({ ipAddress: '8.8.8.8' })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}

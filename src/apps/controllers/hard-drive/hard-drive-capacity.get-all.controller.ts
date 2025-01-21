import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type HardDriveCapacityFinderAll } from '../../../Contexts/Features/HardDrive/HardDriveCapacity/application/HardDriveCapacityFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { HardDriveCapacityDependencies } from '../../di/hard-drive/hard-drive-capacity.di'

export class HardDriveCapacityGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: HardDriveCapacityFinderAll = container.resolve(
				HardDriveCapacityDependencies.FinderAll
			)
			const data = await getAll.run()
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}

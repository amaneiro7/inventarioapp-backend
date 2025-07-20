import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type HardDriveTypeFinderAll } from '../../../Contexts/Features/HardDrive/HardDriveType/application/HardDriveTypeFinder'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { HardDriveTypeDependencies } from '../../di/hard-drive/hard-drive-type.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class HardDriveTypeGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: HardDriveTypeFinderAll = container.resolve(HardDriveTypeDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)

			const data = await getAll.run(query)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

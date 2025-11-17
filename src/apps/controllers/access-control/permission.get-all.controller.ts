import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type PermissionsFinderAll } from '../../../Contexts/AccessControl/Permission/application/PermissionsFinderAll'
import { PermissionDependencies } from '../../di/access-control/permission.di'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'

export class PermissionGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: PermissionsFinderAll = container.resolve(PermissionDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

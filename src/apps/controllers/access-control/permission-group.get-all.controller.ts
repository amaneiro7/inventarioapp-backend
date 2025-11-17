import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type PermissionGroupFinderAll } from '../../../Contexts/AccessControl/PermissionGroup/application/PermissionGroupFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { PermissionGroupDependencies } from '../../di/access-control/permission-group'

export class PermissionGroupGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: PermissionGroupFinderAll = container.resolve(PermissionGroupDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

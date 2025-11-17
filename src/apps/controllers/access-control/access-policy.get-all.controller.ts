import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type AccessPolicyFinderAll } from '../../../Contexts/AccessControl/AccessPolicy/application/AccessPolicyFinderAll'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { AccessPolicyDependencies } from '../../di/access-control/access-policy.di'

export class AccessPolicyGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const getAll: AccessPolicyFinderAll = container.resolve(AccessPolicyDependencies.FinderAll)
			const data = await getAll.run(req.criteria!)
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

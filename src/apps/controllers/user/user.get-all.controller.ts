import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type UserFinderAll } from '../../../Contexts/User/user/application/UserFinderAll'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'
import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { UserDependencies } from '../../di/user/user.di'
import { CriteriaFromUrlConverter } from '../../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

export class UserGetAllController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const getAll: UserFinderAll = container.resolve(UserDependencies.FinderAll)
			const convert = new CriteriaFromUrlConverter()
			const query = convert.toCriteria(req)
			const data = await getAll.run({ user, criteria: query })
			res.status(httpStatus[200].statusCode).json(data)
		} catch (error) {
			next(error)
		}
	}
}

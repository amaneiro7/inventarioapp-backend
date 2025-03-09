import { type Request, type Response, type NextFunction } from 'express'
import { type Controller } from '../controller'
import { type FiltersPrimitives } from '../../../Contexts/Shared/domain/criteria/Filter'
import { type UserSearchByCriteria } from '../../../Contexts/User/user/application/UserByCriteriaSearcher'
import { type JwtPayloadUser } from '../../../Contexts/Auth/domain/GenerateToken'

import httpStatus from '../../../Contexts/Shared/infrastructure/utils/http-status'
import { container } from '../../di/container'
import { SearchByCriteriaQuery } from '../../../Contexts/Shared/domain/SearchByCriteriaQuery'
import { UserDependencies } from '../../di/user/user.di'

export class UserSearchByCriteriaController implements Controller {
	async run(req: Request, res: Response, next: NextFunction): Promise<void> {
		try {
			const user = req.user as JwtPayloadUser
			const { filters, orderBy, orderType, limit, offset } = req.query
			const query = new SearchByCriteriaQuery(
				filters ? (filters as unknown as FiltersPrimitives[]) : [],
				orderBy ? (orderBy as string) : undefined,
				orderType ? (orderType as string) : undefined,
				limit ? Number(limit) : undefined,
				offset ? Number(offset) : undefined
			)
			const getByCriteria: UserSearchByCriteria = container.resolve(UserDependencies.SearchByCriteria)
			const data = await getByCriteria.run({ query, user })
			res.status(httpStatus.OK).json(data)
		} catch (error) {
			next(error)
		}
	}
}

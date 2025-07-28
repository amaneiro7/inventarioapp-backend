import { type NextFunction, type Request, type Response } from 'express'
import { type Criteria } from '../../Contexts/Shared/domain/criteria/Criteria'
import { CriteriaFromUrlConverter } from '../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

declare global {
	namespace Express {
		interface Request {
			criteria?: Criteria
		}
	}
}

export const criteriaConverterMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	try {
		const convert = new CriteriaFromUrlConverter()
		req.criteria = convert.toCriteria(req)
		next()
	} catch (error) {
		next(error)
	}
}

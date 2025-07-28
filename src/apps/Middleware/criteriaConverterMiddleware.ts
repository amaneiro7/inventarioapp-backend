import { type NextFunction, type Request, type Response } from 'express'
import { CriteriaFromUrlConverter } from '../../Contexts/Shared/infrastructure/criteria/CriteriaFromUrlConverter'

/**
 * @description Middleware to convert URL query parameters into a domain Criteria object.
 * It attaches the resulting `Criteria` object to the `req.criteria` property.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const criteriaConverterMiddleware = (req: Request, res: Response, next: NextFunction): void => {
	try {
		const convert = new CriteriaFromUrlConverter()
		// The `criteria` property on `req` is recognized thanks to the global type definition.
		req.criteria = convert.toCriteria(req)
		next()
	} catch (error) {
		next(error)
	}
}

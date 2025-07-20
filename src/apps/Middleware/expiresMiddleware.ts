import { type Request, type Response, type NextFunction } from 'express'

/**
 * @description Sets the `Expires` header to indicate when the response should be considered stale.
 * This middleware sets the expiration to one hour from the current time, helping clients with caching.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const expiresMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const oneHourInMilliseconds = 3600 * 1000
	const expiresTime = new Date(Date.now() + oneHourInMilliseconds).toUTCString()
	res.set('Expires', expiresTime)
	next()
}

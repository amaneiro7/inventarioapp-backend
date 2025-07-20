import { type NextFunction, type Request, type Response } from 'express'

/**
 * @description Sets the `Cache-Control` header to enable public caching for a specified duration.
 * This middleware instructs clients and proxies to cache the response for one hour, reducing server load.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The next middleware function.
 */
export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
	res.set('Cache-Control', 'public, max-age=3600') // Cache for 1 hour
	next()
}

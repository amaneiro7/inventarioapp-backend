import { type Request, type Response, type NextFunction } from 'express'

type AsyncController = (req: Request, res: Response, next: NextFunction) => Promise<void>

/**
 * @description Wraps an asynchronous controller to catch any rejected promises
 * and pass them to Express's error handling middleware.
 * This avoids unhandled promise rejections and application crashes.
 * @param {AsyncController} controller - The asynchronous controller function.
 * @returns A standard Express middleware function.
 */
export const asyncHandler = (controller: AsyncController) => (req: Request, res: Response, next: NextFunction) => {
	// The .catch(next) will automatically pass any error to the next middleware (the errorHandler).
	Promise.resolve(controller(req, res, next)).catch(next)
}

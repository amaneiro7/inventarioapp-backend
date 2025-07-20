import rateLimit from 'express-rate-limit'

const WINDOW_SIZE_IN_MINUTES = 15 * 60 * 1000 // 15 minutes
const MAX_WINDOW_REQUEST_COUNT = 1000

/**
 * @description A general-purpose rate limiter for all API routes.
 * It helps prevent abuse and ensures the API remains available for all users.
 */
export const limiter = rateLimit({
	windowMs: WINDOW_SIZE_IN_MINUTES,
	limit: MAX_WINDOW_REQUEST_COUNT,
	message: `Too many requests from this IP, please try again after 15 minutes`
})

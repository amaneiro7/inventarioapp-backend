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
	message: {
		message: 'Demasiados peticiones desde esta IP, por favor intente de nuevo después de 15 minutos',
		statusCode: 429
	},
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false // Disable the `X-RateLimit-*` headers
})

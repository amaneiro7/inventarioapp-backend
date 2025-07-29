import rateLimit from 'express-rate-limit'

/**
 * @description A rate limiter specifically for login attempts.
 * It helps prevent brute-force attacks by limiting the number of login requests from a single IP address.
 */
export const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Block after 5 failed attempts
	message: {
		message:
			'Demasiados intentos de inicio de sesión desde esta IP, por favor intente de nuevo después de 15 minutos',
		statusCode: 429
	},
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false // Disable the `X-RateLimit-*` headers
})

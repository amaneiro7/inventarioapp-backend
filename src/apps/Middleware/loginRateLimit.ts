import rateLimit from 'express-rate-limit'

/**
 * @description A rate limiter specifically for login attempts.
 * It helps prevent brute-force attacks by limiting the number of login requests from a single IP address.
 */
export const loginLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Block after 5 failed attempts
	message: 'Too many login attempts from this IP, please try again after 15 minutes',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false // Disable the `X-RateLimit-*` headers
})

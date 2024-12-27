import rateLimit from "express-rate-limit"

const WINDOW_SIZE_IN_HOURS = 10 * 1000 // 15 minutos
const MAX_WINDOW_REQUEST_COUNT = 100

export const limiter = rateLimit({
    windowMs: WINDOW_SIZE_IN_HOURS, // 15 minutes
    limit: MAX_WINDOW_REQUEST_COUNT, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
    standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: `You have exceeded the ${MAX_WINDOW_REQUEST_COUNT} requests in ${WINDOW_SIZE_IN_HOURS} hrs limit!`,
    skipFailedRequests: false,
})
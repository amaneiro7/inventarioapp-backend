import rateLimit from "express-rate-limit"

const WINDOW_SIZE_IN_HOURS = 15 * 60 * 1000 // 15 minutos
const MAX_WINDOW_REQUEST_COUNT = 1000

export const limiter = rateLimit({
    windowMs: WINDOW_SIZE_IN_HOURS, // 15 minutes
    limit: MAX_WINDOW_REQUEST_COUNT, // Limit each IP to 100 requests per `window` (here, per 15 minutes).    
    message: `Demasiadas solicitudes desde esta IP, por favor intenta nuevamente después de 15 minutos`,

})
import rateLimit from 'express-rate-limit';

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Bloquear después de 5 intentos fallidos
  message: 'Demasiados intentos de login desde esta IP, por favor intente de nuevo después de 15 minutos',
  standardHeaders: true, // Devuelve la información del límite en los headers `RateLimit-*`
  legacyHeaders: false, // Deshabilita los headers `X-RateLimit-*`
});
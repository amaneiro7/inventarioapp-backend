import { body } from 'express-validator'

/**
 * @description Validation schema for the user login request.
 * Ensures that the email is a valid email and the password is not empty.
 */
export const loginSchema = [
	body('email').isEmail().withMessage('El email debe ser un correo electrónico válido.'),
	body('password')
		.notEmpty()
		.withMessage('La contraseña no puede estar vacía.')
		.isLength({ min: 8 })
		.withMessage('La contrsena debe tener al menos 8 caracteres.')
]

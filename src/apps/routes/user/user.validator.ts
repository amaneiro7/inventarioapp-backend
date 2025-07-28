import { body, query } from 'express-validator'

const emailSchema = body('email').isEmail().withMessage('El email debe ser un correo válido.')
const passwordSchema = body('password')
	.isLength({ min: 8 })
	.withMessage('La contraseña debe tener al menos 8 caracteres.')
const nameSchema = body('name').notEmpty().withMessage('El nombre es requerido.')
const lastNameSchema = body('lastName').notEmpty().withMessage('El apellido es requerido.')
const roleIdSchema = body('roleId').isUUID().withMessage('El ID del rol debe ser un UUID válido.')

export const registerUserSchema = [emailSchema, passwordSchema, nameSchema, lastNameSchema, roleIdSchema]
export const updateUserSchema = [
	body('id').isUUID(),
	nameSchema.optional(),
	lastNameSchema.optional(),
	emailSchema.optional()
]
export const changePasswordSchema = [
	body('id').isUUID(),
	body('oldPassword').notEmpty(),
	body('newPassword').isLength({ min: 8 })
]
export const resetPasswordSchema = [emailSchema, body('newPassword').isLength({ min: 8 })]
export const getUserByEmailSchema = [query('email').isEmail()]
export const deleteUserSchema = [query('id').isUUID()]

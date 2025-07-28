import { body, param } from 'express-validator'

const nameSchema = body('userName').isString().notEmpty().withMessage('El nombre es requerido.')
const idSchema = param('id').isUUID().withMessage('El ID debe ser un UUID válido.')

export const postCargoSchema = [nameSchema]
export const patchCargoSchema = [idSchema, nameSchema]

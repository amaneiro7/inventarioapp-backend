import { body, param } from 'express-validator'

const nameSchema = body('name').isString().notEmpty().withMessage('El nombre es requerido y debe ser un texto.')
const idSchema = param('id').isUUID().withMessage('El ID debe ser un UUID válido.')

export const postBrandSchema = [nameSchema]
export const patchBrandSchema = [idSchema, nameSchema]

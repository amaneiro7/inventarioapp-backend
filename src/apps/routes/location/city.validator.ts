import { body, param } from 'express-validator'

const nameSchema = body('name').isString().notEmpty().withMessage('El nombre es requerido.')
const stateIdSchema = body('stateId').isUUID().withMessage('El ID del estado es requerido.')
const idSchema = param('id').isUUID().withMessage('El ID debe ser un UUID válido.')

export const postCitySchema = [nameSchema, stateIdSchema]
export const patchCitySchema = [idSchema, nameSchema]

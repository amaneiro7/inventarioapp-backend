import { body, param } from 'express-validator'

const nameSchema = body('name').isString().notEmpty().withMessage('El nombre es requerido.')
const cityIdSchema = body('cityId').isUUID().withMessage('El ID de la ciudad es requerido.')
const typeOfSiteIdSchema = body('typeOfSiteId').isUUID().withMessage('El ID del tipo de sitio es requerido.')
const idSchema = param('id').isUUID().withMessage('El ID debe ser un UUID válido.')

export const postSiteSchema = [nameSchema, cityIdSchema, typeOfSiteIdSchema]
export const patchSiteSchema = [idSchema, nameSchema]

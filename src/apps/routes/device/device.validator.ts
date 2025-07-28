import { body, param } from 'express-validator'

const idParamSchema = param('id').isUUID().withMessage('El ID en la URL debe ser un UUID válido.')

// Basic validation for device creation and updates
const deviceBodySchema = [
	body('id').isUUID().withMessage('El ID del dispositivo es requerido y debe ser un UUID.'),
	body('serial').isString().optional({ nullable: true }),
	body('activo').isString().optional({ nullable: true })
	// body('statusId').isUUID().withMessage('El ID del estado es requerido.'),
	// body('categoryId').isUUID().withMessage('El ID de la categoría es requerido.'),
	// body('brandId').isUUID().withMessage('El ID de la marca es requerido.'),
	// body('modelId').isUUID().withMessage('El ID del modelo es requerido.'),
	// body('locationId').isUUID().withMessage('El ID de la ubicación es requerido.'),
	// body('')
]

export const postDeviceSchema = [...deviceBodySchema]
export const patchDeviceSchema = [idParamSchema, ...deviceBodySchema.map(field => field.optional())]
export const deleteDeviceSchema = [idParamSchema]
